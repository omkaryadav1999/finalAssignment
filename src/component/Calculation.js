
import React, { useState } from "react";

function Calculation() {
    const [data, setData] = useState("");
    const [input, setInput] = useState([])

    const Arr = data.split(",")  // split ","


    let newArr = []  // put iniside the array afeter spliting by "="
    let splitByequal = Arr.forEach((item) => {
        newArr.push(item.split("="))
    });
    console.log(newArr)

    let obj = {};
    let arrs = [];
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length - 1; j++) {
            if (!obj[newArr[i][j]]) {
                obj[newArr[i][j]] = Number(newArr[i][j + 1]) // assign element as an properties of object.
            } else {
                obj[newArr[i][j]] += Number(newArr[i][j + 1]) // if element alredy present then add 1
            }
        }
    }

    console.log("firstconsole", obj)

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length - 1; j++) {
            if (!Number(newArr[i][j])) {
                arrs.push(newArr[i][j])
            }
        }
    }

    console.log(arrs);
    let lengthObj = arrs.reduce((a, b) => {
        if (!a[b]) {
            a[b] = 1
        } else {
            a[b] += 1
        }
        return a
    }, {});   // calculate how many time element are repeated;

    console.log(lengthObj)

    for (let key in obj) {
        for (let keys in lengthObj) {
            if (key == keys) {
                obj[key] = (Number(obj[key] / lengthObj[keys])) // calculate the avrage and assign to object
            }
        }
    }


    let arr = [];

    for (let key in obj) {
        arr.push(`${key} = ${obj[key]}`)
    }
    
    let newSorted = arr.sort()

    window.addEventListener("keydown", (e) => {
        if (e.key == "Tab") {
            setInput(newSorted);
        }
    })

   

    return (
        <>
            <div style={{ width: "100%", textAlign: "center" }}>
                <h1>Question:4</h1><br />
                <p><b>Note:</b>Plase Fill Data In The from Off a=10,b=30..</p><br />
                <input type="text" onChange={(e) => setData(e.target.value.toLocaleLowerCase())} placeholder="Enter value.." /><br /><br />
                {
                    input.map((item, i) => {
                        return <p key={i}>{`${item}`}</p>
                    })
                }<br />
                <p><i> press tab for result</i></p>
            </div>
        </>
    )


}

export default Calculation;