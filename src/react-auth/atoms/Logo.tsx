import React from "react";

type LogoProps = {
  src?: string;
  alt?: string;
  title?: string;
};

export const Logo: React.FC<LogoProps> = ({ src, alt = "Logo", title = "SurfSpace" }) => {
  return (
    <div className="flex items-center gap-3">
      {src ? (
        <img src={src} alt={alt} className="w-[76px] h-14 object-cover" />
      ) : (
        <div className="w-[76px] h-14 bg-[#e5e8ea] rounded-md" />
      )}
      <h1 className="text-[32px] font-bold leading-[23px]">{title}</h1>
    </div>
  );
};

export default Logo;
