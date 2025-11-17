import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

type Props = {
  onSubmit: (data: { email: string; password: string }) => void;
};

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className="w-full max-w-md p-6 bg-white rounded-md shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input label="Correo electrónico" type="email" value={email} onChange={setEmail} required />
      </div>

      <div className="mb-4">
        <Input label="Contraseña" type="password" value={password} onChange={setPassword} required />
      </div>

      <div className="flex items-center justify-between gap-4">
        <Button type="submit" variant="primary" ariaLabel="Iniciar sesión">
          Iniciar sesión
        </Button>

        <Button type="button" variant="secondary" ariaLabel="Registrarse">
          Registrarse
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
