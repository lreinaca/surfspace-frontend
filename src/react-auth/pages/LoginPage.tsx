import React from "react";
import AuthTemplate from "../organisms/AuthTemplate";
import LoginForm from "../molecules/LoginForm";

export const LoginPage: React.FC = () => {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login submit", data);
    // Aquí puedes conectar con tu servicio de autenticación
  };

  return (
    <AuthTemplate logoSrc={undefined}>
      <div className="relative w-full h-full flex items-center justify-center">
        <img src={undefined as any} alt="Resto de pantalla" className="absolute inset-0 w-full h-full object-cover" />

        <div className="relative z-10">
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
    </AuthTemplate>
  );
};

export default LoginPage;
