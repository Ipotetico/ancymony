import React from "react";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className="container">
        <img
          className="fota"
          src={process.env.PUBLIC_URL + `images/zboje.png`}
          alt=""
        />
        <p className="zboje">
          — Czysta fantazja — odparł Starszy Zbójca. — Jeżeli dzisiejszym poetom
          wolno pisać wiersze bez rymu i rytmu, to dlaczego zbójca nie miałby
          obdarowywać napadniętego? Jesteśmy po prostu antyzbójami, to cała
          tajemnica.
        </p>
        <p className="zboje">
          — Dziękuję — powiedział Smok i zamknął notatnik.
        </p>
        <span className="zboje">
          Stanisław Pagaczewski "Porwanie Baltazara Gąbki"
        </span>
      </div>
    </>
  );
};

export default App;
