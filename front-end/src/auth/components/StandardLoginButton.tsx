import React from "react";
import LoginButton from "../../common/components/LoginButton";
import login from "../../assets/images/login.png";

const StandardLoginButton: React.FC = () => {
  const handleLogin = () => {
    window.location.href = "";
  };

  return (
    <LoginButton
      title="Login"
      imageSrc={login}
      backgroundColor="bg-primary"
      onClick={handleLogin}
    />
  );
};

export default StandardLoginButton;
