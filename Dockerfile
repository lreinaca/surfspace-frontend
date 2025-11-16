#ETAPA 1: Construir contenedor (Build Stage) ---------------------------------------------
FROM node:20-alpine AS build

#Establecer mi directorio de trabajo
WORKDIR /app

#Copiar archivos de configuración npm
#(package.json y package-lock.json)
COPY package*.json ./

#Instalar todas las dependencias del proyecto que necesitamos
#Esto instala node_modules/ dentro del contenededor
RUN npm install

#Copiar TODO el código fuente al contenedor
COPY . . 

#Ejecutar el buid de producción de Angular
#Esto genera la carpeta dist
RUN npm clean run build -- --configuration production

#ETAPA 2: Servidor web (Production Stage) -------------------------------------------------
#Usamos nginx para servir los archivos estáticos
FROM nginx:alpine

#Crear directorios para los log
RUN mkdir -p /var/log/nginx

#copio proyecto listo para el despliegue
COPY --from=build /app/dist/surfspace-frontend /usr/share/nginx/html

# (opcional) Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
 
#Exponer el puerto 80 (es el puerto estandar de HTTP)
EXPOSE 80

#Por defecto arranca el servidor web local
#Comando para iniciar Nginx
#configuro para activar en cada reinicio
CMD ["nginx", "-g", "daemon off;"]