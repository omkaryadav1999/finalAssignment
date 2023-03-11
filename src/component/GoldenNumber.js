import React, { useState } from "react";

function GoldenNumber() {
    const [value, setValue] = useState("");
    const [total, setTotal] = useState("");
    const [length, setLength] = useState("")
    const getData = (e) => {
        let num = e.target.value;
        if (num >= 0) {
            let final = Math.floor(num)
            setValue(final)
        } else if (!Number(num)) {
            setValue("")
        }

    }
    let array = value.toString().split("");
    function cal() {
        let length = array.length

        let total = array.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)
        setTotal(total);
        setLength(length);
    }
    window.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            cal()
        };
    })

    return (
        <>
            <div style={{ width: "100%", textAlign: "center" }}>
                <h1>Find the GoldenNumber</h1><br />
                <input type="text" value={value} onChange={getData} /><br />
                <h1>total:{total}</h1><br />
                <h2>length:{length}</h2><br />
                <h2>{total % length == 0 ? `${total} Is the golden number` : `${total} Is not gloden number`}</h2><br />
                <p><i> press tab for result</i></p>
            </div>

        </>
    )

}

export default GoldenNumber
