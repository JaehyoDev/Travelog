import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { colorScale, countries, missingCountries } from "../../Countries";
import Header from "../../common/components/Header";
import Sidebar from "../../common/components/Sidebar";
import profile from "../../assets/images/profile.jpg";

// https://github.com/kadoshms/react-jvectormap

const WorldPage = () => {
  const handleRegionClick = (event, code) => {
    console.log("Clicked region:", code, countries[code]);
  };

  return (
    <div className="w-screen h-screen bg-background">
      <Header />
      <Sidebar />
      <div className="w-map h-map absolute left-36 top-12">
        <div className="h-12 absolute pl-4 pt-2 bg-red-200">
          <div className="w-10 h-10 bg-blue-50">
            <img
              className="w-10 h-10 rounded-full"
              src={profile}
              alt="jaehyo"
            />
          </div>
          <div>jaehyo</div>
          <div>vietnam</div>
        </div>
        <VectorMap
          zoomButtons={false}
          map={worldMill}
          style={{
            width: "100%",
            height: "100%",
            padding: "4rem",
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
    </div>
  );
};

export default WorldPage;
