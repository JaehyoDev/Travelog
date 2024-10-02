import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { colorScale, countries, missingCountries } from "../../Countries";

const WorldPage = () => {
  const handleRegionClick = (event, code) => {
    console.log("Clicked region:", code, countries[code]);
  };

  return (
    <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        backgroundColor="#212529"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "blue",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
                  <div style="background-color: red; border-radius: 6px; min-height: 50px; width: 125px; color: red"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code]}
                    </p>
                    </div>`);
        }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
        }}
        onRegionClick={handleRegionClick} // 클릭 이벤트 핸들러 추가
      />
    </div>
  );
};

export default WorldPage;
