import React, { useState } from "react";
import Personal from "./component/Personal";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import GoldenNumber from "./component/GoldenNumber";
import OddEven from "./component/OddEven";
import Zero from "./component/Zero";
import Calculation from "./component/Calculation";
import Occurences from "./component/Occurences";
import Practice from "./component/practice";
function App() {
    const [data, setData] = useState("");

    const getData = (e) => {
        setData(e.target.value);
    }
    return (
        <>
            <Nav />
            <h1>select your form</h1>
            <label htmlFor="selectform">selectform:</label>&nbsp;&nbsp;
            <select value={data} onChange={getData}>
                <option>selectForm</option>
                <option>personal</option>
                <option>bussiness</option>
            </select><br /><br /><br />



            <Routes>
                <Route path="/" element={data === "personal" ? <Personal /> : ""} />
                <Route path="/golden" element={<GoldenNumber />} />
                <Route path="/oddeven" element={<OddEven />} />
                <Route path="/zero" element={<Zero />} />
                <Route path="/calculation" element={<Calculation />} />
                <Route path="/occurences" element={<Occurences />} />
                <Route path="/practice" element={<Practice />} />
            </Routes>

        </>
    )
}

export default App