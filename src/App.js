import React, { useState } from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FEForm from "./components/FEForm";
import FEPlan from "./components/FEPlan";

function App() {
  const [inputString, setInputString] = useState("");
  const [jsonInput, setJsonInput] = useState({});
  const [isShow, setIsShow] = useState(false);

  const submitOnClick = () => {
    setIsShow(true);
  };

  return (
    <div className="App">
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        {isShow ? (
          <FEPlan data={jsonInput} setIsShow={setIsShow} />
        ) : (
          <FEForm
            inputString={inputString}
            setInputString={setInputString}
            setJsonInput={setJsonInput}
            submitOnClick={submitOnClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
