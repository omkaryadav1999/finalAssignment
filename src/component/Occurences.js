import React, { useState } from "react";


function Occurences() {
    const [data, setData] = useState("");
    const [input, setInput] = useState([]);
    const arr = data.split("").map(Number);
    const newArr = arr.sort((a, b) => {
        return a - b
    }).filter((item, index) => {
        return arr.indexOf(item) === index
    })
    const getData = (e) => {
        if (Number(e.target.value)) {
            setData(e.target.value)
        } else if (e.target.value === ".") {
            alert("plase Enter valid number")
        } else {
            setData("")
        }
    }

    let obj = {}

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j <= newArr.length; j++) {
            for (let k = 0; k <= newArr.length; k++) {
                if (newArr[i] === newArr[j] + newArr[k] && j <= k) {
                    if (!obj[newArr[i]]) {
                        obj[newArr[i]] = `=[${newArr[k]} + ${newArr[j]}]`
                    } else {
                        obj[newArr[i]] += `[${newArr[k]} + ${newArr[j]}]`
                    }
                }
            }
        }
    }

    let result = Object.entries(obj)

    window.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            setInput(result);
        }
    })


    return (
        <>
            <div style={{ width: "100%", textAlign: "center", padding: "35px" }}>
                <h2 style={{ margin: "5px" }}>find the combination</h2><br />
                <input type="text" value={data} onChange={getData} /><br /><br />
                {input.map((item) => {
                    return <div>{item}</div>
                })}
                <p><i> press tab for result</i></p>
            </div>
        </>
    )

}

export default Occurences