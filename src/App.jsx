import React, { useState } from "react";
import "./App.scss";
import Motto from "./components/Motto";
import Antypiraci from "./components/Antypiraci";
import Start from "./components/Start";

const App = () => {
  const [page, setPage] = useState(2);
  return (
    <>
      {/* {page === 1 && <Start setPage={setPage} />} */}
      {page === 2 && <Motto setPage={setPage} />}
      {page === 3 && <Antypiraci setPage={setPage} />}
    </>
  );
};

export default App;
