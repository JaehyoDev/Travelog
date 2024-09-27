import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoSection from "../../common/components/LogoSection";
import StandardLoginButton from "../components/StandardLoginButton";
import KakaoLoginButton from "../components/KakaoLoginButton";

import { IoAirplaneSharp, IoPerson, IoLockClosed } from "react-icons/io5";

// https://kr.pinterest.com/pin/pinterest--304626362290560695/
const LoginPage = () => {
  const nav = useNavigate();
  const [credentials, setCredentials] = useState({
    id: "",
    password: "",
  });

  // 이메일, 비밀번호 입력값이 바뀔 때
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // 로그인
  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("로그인 시도");
  };

  // 회원가입 페이지로 리다이렉트
  const handleSignUp = () => {
    nav("/signup");
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-login bg-cover bg-center bg-no-repeat">
      {/* 로고 - 시작 */}
      <LogoSection />
      {/* 로고 - 끝 */}

      {/* 로그인 - 시작 */}
      <div className="absolute top-[50%] right-[19%] transform translate-y-[-50%] w-80 p-4 bg-transparent border-2 border-white border-opacity-20 rounded-lg backdrop-blur-lg shadow-lg">
        {/* 제목 */}
        <div className="mb-8 flex justify-center items-center gap-2 text-2xl text-white">
          <span className="flex items-center">
            <IoAirplaneSharp />
          </span>
          <span className="flex items-center">Check In</span>
        </div>

        {/* 아이디 */}
        <div className="relative w-full h-12 mb-4">
          <input
            className="w-full h-full p-4 pr-8 bg-transparent outline-none border-2 border-white border-opacity-20 rounded-2xl text-white"
            type="text"
            name="id"
            value={credentials.id}
            placeholder="ID"
            onChange={handleChange}
          />
          <IoPerson className="absolute top-[50%] right-4 transform translate-y-[-50%] text-gray-400" />
        </div>

        {/* 비밀번호 */}
        <div className="relative w-full h-12 mb-4">
          <input
            className="w-full h-full p-4 pr-8 bg-transparent outline-none border-2 border-white border-opacity-20 rounded-2xl text-white"
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <IoLockClosed className="absolute top-[50%] right-4 transform translate-y-[-50%] text-gray-400" />
        </div>

        {/* 로그인 버튼 */}
        <div className="flex flex-col gap-2">
          <StandardLoginButton />
          <KakaoLoginButton />
        </div>

        {/* 옵션 */}
        <div className="my-4 flex justify-between items-center">
          <label className="flex items-center gap-1 text-white">
            <input type="checkbox" />
            Remember me
          </label>
          <button className="text-link hover:underline">
            Forgot password?
          </button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="text-white">Don't have an account?</span>
          <button className="text-link hover:underline" onClick={handleSignUp}>
            Register
          </button>
        </div>
      </div>
      {/* 로그인 - 끝 */}
    </div>
  );
};

export default LoginPage;
