import React, { useState } from "react";

function Zero() {
    const [str, setStr] = useState("");
    const [arr, setArr] = useState([]);
    const [value, setValue] = useState([])
    let newArr = str.split("")
    const getData = (e) => {
        if (Number(e.target.value)) {
            setStr(e.target.value)
        } else {
            alert("Plase Enter valid Number")
        }

        
    }

    let unique = newArr.filter((item, index) => {  // remove unique items and sort
        return newArr.indexOf(item) == index
    }).sort()
    let dublicate = newArr.filter((item, index) => { // remove dublicate items
        return newArr.indexOf(item) !== index
    })

    let pushElement = dublicate.forEach((item) => {   // push element at the end
        unique.push(0)
    })

    let updated = []

    let Authentication = unique.forEach((item) => {    // condition for + and -
        if (item !== "+" && item !== "-") {
            updated.push(item)
        }
    })

    let zero = [];
    let number = [];
    let seprate = updated.forEach((item) => { // separate the array by 0 and non zero element
        if (item == 0) {
            zero.push(item);
        } else {
            number.push(item);
        }
    })
    let finaleArr = number.concat(zero)  // concate the array

    window.addEventListener("keydown", (e) => {
        if (e.key == "Tab") {
            setValue(finaleArr)
        }
    })
    return (
        <>
            <div style={{ width: "100%", textAlign: "center" }}>
                <h1>add the zero at the end</h1><br />
                <input type="text" onChange={getData} placeholder="Enter number..." />
                <div style={{ width: "90px", margin: "10px auto" }}>
                    {
                        value.map((item, i) => {
                            return <div key={i} style={{ width: "50px", textAlign: "center", border: "1px solid black", margin: "5px" }}>{item}</div>
                        })
                    }
                </div><br/>
                <p><i> press tab for result</i></p>
            </div>
        </>
    )

}

export default Zero;
