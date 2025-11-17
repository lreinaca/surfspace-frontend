import React from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";

type Props = {
  children: React.ReactNode;
  logoSrc?: string;
};

export const AuthTemplate: React.FC<Props> = ({ children, logoSrc }) => {
  const navItems = [
    { id: 1, label: "" },
    { id: 2, label: "" },
    { id: 3, label: "" },
    { id: 4, label: "" },
    { id: 5, label: "Inicio" },
  ];

  return (
    <div className="bg-white w-full min-w-[1280px] min-h-[800px] flex">
      <div className="flex w-[1280px] h-[800px] relative flex-col items-start bg-white">
        <header className="relative self-stretch w-full h-[65px] border-b border-[#e5e8ea]">
          <nav className="flex w-[1200px] items-start justify-end gap-8 absolute top-3 left-10" aria-label="Main navigation">
            <ul className="inline-flex h-10 items-center gap-9 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.id} className="inline-flex items-center">
                  {item.label && (
                    <a href="#" className="font-medium text-[#0f1616] text-sm no-underline">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="inline-flex items-start gap-2">
              <Button variant="primary" ariaLabel="Reservar un Espacio">Reservar un Espacio</Button>
              <Button variant="secondary" ariaLabel="Registrarse">Registrarse</Button>
            </div>
          </nav>

          <div className="absolute top-[21px] left-[85px] w-36 h-[23px] flex gap-px items-center">
            <Logo src={logoSrc} />
          </div>
        </header>

        <main className="relative flex-1 self-stretch w-full grow">{children}</main>
      </div>
    </div>
  );
};

export default AuthTemplate;
