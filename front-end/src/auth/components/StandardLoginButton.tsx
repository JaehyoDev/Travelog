import React from "react";
import LoginButton from "../../common/components/LoginButton";
import login from "../../assets/images/login.png";

interface StandardLoginButtonProps {
  onClick: () => Promise<void>; // Promise를 반환하는 onClick 함수 타입
}

const StandardLoginButton: React.FC<StandardLoginButtonProps> = ({
  onClick,
}) => {
  return (
    <LoginButton
      title="Login"
      imageSrc={login}
      backgroundColor="bg-primary"
      onClick={onClick}
    />
  );
};

export default StandardLoginButton;
