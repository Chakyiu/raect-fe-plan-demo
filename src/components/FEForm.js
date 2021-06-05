import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./FEForm.scss";
import template from "../app/data/template";

function FEForm({ inputString, setInputString, setJsonInput, submitOnClick }) {
  const [jsonValidated, setJsonValidated] = useState(false);
  const [isFailClick, setIsFailClick] = useState(false);

  const alertMessage = {
    normal: "JSON format correct.",
    warning:
      "JSON format incorrect\n" +
      "sample format are:\n" +
      JSON.stringify(template, undefined, "\t"),
  };

  useEffect(() => {
    setJsonValidated(checkJsonValidation());
  }, [inputString]);

  useEffect(() => {
    if (isFailClick) setTimeout(() => setIsFailClick(false), 500);
  }, [isFailClick]);

  const checkJsonValidation = () => {
    try {
      var tempJSON = JSON.parse(inputString);
      var isWrongSyntax = false;

      if (!tempJSON.hasOwnProperty("plan")) isWrongSyntax = true;
      if (tempJSON["plan"].length === 0) isWrongSyntax = true;

      tempJSON["plan"].forEach((e) => {
        if (!e.hasOwnProperty("name")) isWrongSyntax = true;
        if (!e.hasOwnProperty("element")) isWrongSyntax = true;
        if (!e.hasOwnProperty("price")) isWrongSyntax = true;
      });

      if (isWrongSyntax) return false;
      setJsonInput(tempJSON);
    } catch {
      return false;
    }
    return true;
  };

  const onChangeHandler = (e) => {
    setInputString(e.target.value);
  };

  const onClickHandler = () => {
    if (jsonValidated) submitOnClick();
    else setIsFailClick(true);
  };

  return (
    <>
      <Form className={`w-75 h-75 fe-form ${isFailClick ? "shake" : ""}`}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={20}
            // placeholder="Input JSON here..."
            placeholder="Input JSON here..."
            onChange={onChangeHandler}
            value={inputString}
          />
        </Form.Group>
        <Alert variant={jsonValidated ? "primary" : "danger"}>
          {jsonValidated ? alertMessage["normal"] : alertMessage["warning"]}
        </Alert>
        <Button variant="primary" onClick={onClickHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FEForm;
