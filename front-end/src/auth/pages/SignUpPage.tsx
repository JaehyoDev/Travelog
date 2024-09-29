import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Select, {
  OptionProps,
  components,
  SingleValue,
  SingleValueProps,
} from "react-select";
import axios from "axios";
import LogoSection from "../../common/components/LogoSection";
import countryData from "../../assets/data/countryData";
import {
  NationalityOption,
  convertCountryDataToOptions,
} from "../../@types/NationalityOption";

import { IoAirplaneSharp } from "react-icons/io5";

const SignUpPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    nickname: "",
    nationality: "",
  });

  // 아이디, 비밀번호, 닉네임 입력값이 바뀔 때
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 국가 입력값이 바뀔 때
  const handleNationalityChange = (
    selectedOption: SingleValue<NationalityOption> | null
  ) => {
    if (selectedOption) {
      setFormData((prev) => ({
        ...prev,
        nationality: selectedOption.value,
      }));
      toast.success(selectedOption.value);
    }
  };

  // 회원가입
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8089/travelog/user/signup",
        JSON.stringify(formData),
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201) {
        console.log("회원가입 성공!");
        toast.success("회원가입 성공!");
        nav("/login");
      }
    } catch (error) {
      console.error("에러 발생: ", error);
    }
    console.log("회원가입 요청!", formData);
  };

  // 국가 데이터(countryData)를 react-select에서 사용할 옵션 형식으로 변환
  const countryOptions = convertCountryDataToOptions(countryData);

  // 커스텀 옵션 컴포넌트 생성
  const CustomOption = (props: OptionProps<NationalityOption>) => {
    return (
      <components.Option {...props}>
        <div className="flex items-center">
          <img
            className="w-6 h-4 mr-3"
            src={props.data.flagUrl}
            alt={props.data.label}
          />
          {props.data.label} {/* 여기서 label이 문자열이어야 검색 가능 */}
        </div>
      </components.Option>
    );
  };

  // 선택된 국가 표시
  const CustomSingleValue = (props: SingleValueProps<NationalityOption>) => {
    return (
      <div className="flex items-center">
        <img
          className="w-6 h-4 mr-3"
          src={props.data.flagUrl}
          alt={props.data.label}
        />
        {props.data.label}
      </div>
    );
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-login bg-cover bg-center bg-no-repeat">
      {/* 로고 - 시작 */}
      <LogoSection />
      {/* 로고 - 끝 */}

      {/* 회원가입 - 시작 */}
      <div className="absolute top-[50%] right-[19%] transform translate-y-[-50%] w-80 p-4 bg-transparent border-2 border-white border-opacity-20 rounded-lg backdrop-blur-lg shadow-lg">
        {/* 제목 */}
        <div className="mb-8 flex justify-center items-center gap-2 text-2xl text-white">
          <span className="flex items-center">
            <IoAirplaneSharp />
          </span>
          <span className="flex items-center">Sign Up</span>
        </div>

        <div className="relative w-full h-12 mb-4">
          <input
            className="w-full h-full p-4 bg-transparent outline-none border-2 border-white border-opacity-20 rounded-2xl text-white"
            type="text"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        <div className="relative w-full h-12 mb-4">
          <input
            className="w-full h-full p-4 bg-transparent outline-none border-2 border-white border-opacity-20 rounded-2xl text-white"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className="relative w-full h-12 mb-4">
          <input
            className="w-full h-full p-4 bg-transparent outline-none border-2 border-white border-opacity-20 rounded-2xl text-white"
            type="text"
            name="nickname"
            value={formData.nickname}
            placeholder="Nickname"
            onChange={handleChange}
          />
        </div>

        {/* 국적 선택 Custom Select Box */}
        <div className="mb-4">
          {/* react-select는 옵션이 변경될 때마다 자동으로 선택된 값 표시. 추가 렌더링 코드 필요 없음 */}
          <Select
            name="nationality"
            options={countryOptions}
            onChange={handleNationalityChange}
            placeholder="Select your nationality"
            isMulti={false} // 다중 선택을 비활성화
            isSearchable={true} // 검색 기능 비활성화
            isClearable={true} // 입력값을 지울 수 있도록 설정
            menuPlacement="auto" // 드롭다운 위치 자동
            components={{
              SingleValue: CustomSingleValue,
              Option: CustomOption,
            }}
            styles={{
              menu: (provided) => ({
                ...provided,
                transition: "none",
              }),
              control: (provided) => ({
                ...provided,
                width: "100%",
                height: "3rem",
                borderRadius: "1rem",
              }),
              valueContainer: (provided) => ({
                ...provided,
                display: "flex",
                paddingLeft: "1rem",
              }),
              option: (provided) => ({
                ...provided,
                paddingLeft: "1rem",
                color: "black",
              }),
              placeholder: (provided) => ({
                ...provided,
                position: "absolute",
                color: "black",
              }),
              indicatorsContainer: (provided) => ({
                ...provided,
                paddingRight: "0.5rem",
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                paddingRight: "0.5rem",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary50: "red", // 클릭 시 배경색
                primary25: "lightgrey", // 호버 시 배경색
                primary: "var(--primary-color)", // 선택된 배경색
              },
            })}
          />
        </div>

        <button
          className="w-full h-12 px-2 flex justify-center items-center bg-primary rounded-xl"
          onClick={handleSignUp}
        >
          Create your account
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
