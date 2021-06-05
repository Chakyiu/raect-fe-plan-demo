import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "./FEPlan.scss";

function FEPlan({ data, setIsShow }) {
  const [elementList, setElementList] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    let tempList = [];
    data.plan.forEach((e) => {
      Object.keys(e.element).forEach((e) => {
        if (tempList.indexOf(e) === -1) {
          tempList.push(e);
        }
      });
      setElementList(tempList);
    });
  }, [data]);

  const backOnClick = () => {
    setIsShow(false);
  };

  const selectOnChange = (e) => {
    setSelectedPlan(e.target.id);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alert(`${selectedPlan} Selected.`);
  };

  return (
    <>
      <div className="w-75 h-75">
        <div className="text-center h1 m-4">Choose a plan</div>
        <Form onSubmit={onSubmit}>
          <Table responsive hover>
            <thead>
              <tr>
                <th />
                {data.plan.map((p) => (
                  <th key={p.name} className="text-center h4 pb-4">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {elementList.map((e) => (
                <tr key={e}>
                  <td className="h4 py-3">{e}</td>
                  {data.plan.map((p) =>
                    p.element[e] ? (
                      <td key={p.name} className="text-center py-3">
                        ✔
                      </td>
                    ) : (
                      <td key={p.name} className="text-center py-3">
                        ✘
                      </td>
                    )
                  )}
                </tr>
              ))}
              <tr>
                <td />
                {data.plan.map((p) => (
                  <td key={p.name} className="py-3">
                    <Form.Check
                      className="d-flex justify-content-center price-tag"
                      type="radio"
                      name="check-plan"
                      id={`${p.name}`}
                      label={`HK$${p.price} `}
                      onChange={selectOnChange}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={backOnClick}>
            Back
          </Button>
          <Button className="btn-submit" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default FEPlan;
