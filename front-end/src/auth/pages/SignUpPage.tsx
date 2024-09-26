import React, { useState } from "react";
import LoginButton from "../../common/components/LoginButton";
import KakaoLoginButton from "../components/KakaoLoginButton";

import { IoAirplaneSharp } from "react-icons/io5";

// https://kr.pinterest.com/pin/pinterest--304626362290560695/
const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // 아이디, 비밀번호 입력값이 바뀔 때
  const handleChange = (field: string | number, value: string | number) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  // 로그인
  const handleLogin = () => {
    // e.preventDefault();
    console.log("로그인 시도");
  };

  // 회원가입 페이지로 리다이렉트
  const handleSignUp = () => {
    // 회원가입 페이지로의 네비게이션을 추가하세요
    console.log("회원가입 페이지로 이동");
  };

  return (
    <div>
      {/* <LogoSection /> */}
      <div>
        <div>
          <span>
            <IoAirplaneSharp />
          </span>
          <span>Check In</span>
        </div>

        <div>
          <label htmlFor="Username">Username</label>
          <input
            id="Username"
            type="text"
            value={credentials.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            type="password"
            value={credentials.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>

        <div></div>

        <div>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <button>Forgot password?</button>
        </div>

        <div>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
