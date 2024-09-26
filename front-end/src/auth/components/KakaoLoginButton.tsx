// KakaoLoginButton.tsx
import React from "react";
import LoginButton from "../../common/components/LoginButton";
import loginKakao from "../../assets/images/login-kakao.png";

const KakaoLoginButton: React.FC = () => {
  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:8086/oauth2/authorization/kakao";
  };

  return (
    <LoginButton
      title="Login with Kakao"
      imageSrc={loginKakao}
      backgroundColor="bg-kakao"
      onClick={handleKakaoLogin}
    />
  );
};

export default KakaoLoginButton;
