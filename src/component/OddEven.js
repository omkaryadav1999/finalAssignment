import React, { useState } from "react";

function ODDEven() {
    const [arr, setArr] = useState("");
    const [even, setEven] = useState("");
    const [odd, setOdd] = useState("")
    const getData = (e) => {
        let num = e.target.value;
        if (num >= 0) {
            let final = Math.floor(num)
            setArr(final)
        } else if (!Number(num)) {
            setArr("")
        }
    }
    let array = arr.toString().split("")

    function cal() {
        let even = 0
        let odd = 0
        let calculate = array.forEach((item) => {
            if (Number(item) % 2 == 0) {
                even++
            } else {
                odd++
            }
        })
        setEven(even);
        setOdd(odd)
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            cal()
        };
    })

    return (
        <>
            <div style={{ width: "100%", textAlign: "center" }}>
                <h1>Find the length of odd and Even number</h1><br />
                <input type="text" value={arr} onChange={getData} /><br />
                <h1>even:{even}</h1>
                <h1>odd:{odd}</h1><br/>
                <p><i> press tab for result</i></p>
            </div>
        </>
    )
}

export default ODDEven;
