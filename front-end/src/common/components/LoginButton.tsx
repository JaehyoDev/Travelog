import React from "react";

interface LoginButtonProps {
  title: string;
  imageSrc: string;
  backgroundColor: string;
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  title,
  imageSrc,
  backgroundColor,
  onClick,
}) => {
  return (
    <div
      className={`w-full h-12 px-2 flex justify-center items-center ${backgroundColor} rounded-xl cursor-pointer`}
      onClick={onClick}
    >
      <img className="w-4 h-4 ml-2" src={imageSrc} alt="Login" />
      <div className="w-full h-4 pr-2 flex justify-center items-center text-black">
        {title}
      </div>
    </div>
  );
};

export default LoginButton;
