import React, { useEffect, useState } from "react";
import { AreaComponentImage } from "./styled";
import Kratos from "../../assets/kratos.png";
import Bluedemon from "../../assets/bluedemon.png";
import Apocalypse from "../../assets/apocalypse.png";
import BannerPalmeiras from "../../assets/palmeirasBanner.png";

function ComponentImage() {
  const [leftPosition, setLeftPosition] = useState("100%");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftPosition((prevPosition) => {
        return prevPosition === "100%"
          ? "0%"
          : prevPosition === "0%"
          ? "-100%"
          : "100%";
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AreaComponentImage>
      <div className="component_image" style={{ left: leftPosition }}>
        <img id="first_image" src={Bluedemon} alt="Santos" />
        <img src={Apocalypse} alt="São Paulo" />
        <img src={BannerPalmeiras} alt="Palmeiras" />
      </div>
    </AreaComponentImage>
  );
}

export default ComponentImage;
