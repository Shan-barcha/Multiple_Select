



import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./index.css";
const options = [
  { label: "payment process fee", value: 10 },
  { label: "payroll bonus G&A", value: 20 },
  { label: "sum", value: "+" },
  { label: "Payment bonus S&M", value: 40 },
  { label: "salary increase month", value: 2 },
];
export default function App() {
  const data = [
    { label: "payment process fee", value: 10 },
    { label: "+", value: "+", __isNew__: true },
    { label: "payroll bonus G&A", value: 20 },
    { label: "(", value: "(", __isNew__: true },
    { label: "Payment bonus S&M", value: 40 },
    { label: "+", value: "+", __isNew__: true },
    { label: "salary increase month", value: 2 },
    { label: ")", value: ")", __isNew__: true },
  ];
  
  

  const [selected, setSelected] = useState([]);
  const [answer, setAnswer] = useState("");
  let calculation = "";
  
  const handleCal = () =>{
  
    for (let i = 0; i < selected.length; i++) {
      calculation += selected[i].value + ' ';
    }
    calculation = calculation.replace(/\(/g, "+(")
    setAnswer(eval(calculation));
  }
  return (
    <div>
      <h1> Multiple Select operations</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        isCreatable={true}
      />
      <button onClick={handleCal}>Calculate</button>
      answer: {answer}
    </div>
  );
}


