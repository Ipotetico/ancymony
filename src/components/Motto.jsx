import React from "react";

const Motto = ({ setPage }) => {
  return (
    <>
      <div className="background">
        <img
          className="rysunek"
          src={process.env.PUBLIC_URL + `/images/supermarket.png`}
          alt=""
        />
      </div>
      <div className="container" onClick={() => setPage(3)}>
        <img
          className="fota zboje"
          src={process.env.PUBLIC_URL + `/images/bandits.png`}
          alt=""
        />

        <img
          className="fota motto"
          src={process.env.PUBLIC_URL + `/images/motto.svg`}
          alt=""
        />
        {/* <div className="cytat">
          <p className="zboje">
            "— Jeżeli dzisiejszym poetom wolno pisać wiersze bez rymu i rytmu,
            to dlaczego zbójca nie miałby obdarowywać napadniętego? Jesteśmy po
            prostu antyzbójami, to cała tajemnica.
          </p>
          <p className="zboje">
            — Dziękuję — powiedział Smok i zamknął notatnik."
          </p>
          <span className="zboje">
            Stanisław Pagaczewski "Porwanie Baltazara Gąbki"
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Motto;
