import React, { useState, useEffect } from "react";

const Antypiraci = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLenght = Math.ceil((scrollpx / winHeightPx) * 449);

    setScrolled(Math.floor(scrollLenght));
    console.log(scrollLenght);
  };

  return (
    <>
      <div className="background scroll">
        <img
          className="rysunek"
          src={process.env.PUBLIC_URL + `/images/supermarket.png`}
          alt=""
        />
      </div>

      <div className="container scroll">
        <img
          className="fota johny"
          src={process.env.PUBLIC_URL + `/images/johny.png`}
          alt=""
        />
        <img
          className="fota"
          src={process.env.PUBLIC_URL + `/images/piraci.png`}
          alt=""
        />
        <img
          className="fota pirat"
          src={process.env.PUBLIC_URL + `/images/piracisko.png`}
          alt=""
        />
        <img
          className="fota title"
          src={process.env.PUBLIC_URL + `/images/title.png`}
          alt=""
        />
        <div className="papier">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/MAPA/WEBP/MAPA____${scrolled
                .toString()
                .padStart(4, "0")}.webp`
            }
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Antypiraci;
