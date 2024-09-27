// 국가 옵션 타입
export type NationalityOption = {
  value: string; // 국가 코드
  label: string; // 국가 이름
  flagUrl: string; // 국가 국기
};

// 국가 데이터 타입
type CountryData = {
  code: string; // 국가 코드
  name: string; // 국가 이름
  flagUrl: string; // 국가 국기
};

// 국가 데이터(countryData)를 react-select에서 사용할 옵션 형식으로 변환
export const convertCountryDataToOptions = (countryData: CountryData[]) => {
  return countryData.map((country) => ({
    value: country.code,
    label: country.name, // label을 문자열로 사용해야 검색 가능
    flagUrl: country.flagUrl, // 이미지 URL을 따로 저장
  }));
};
