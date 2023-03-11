import React, { useEffect, useState } from "react";


function Practice() {
    const [value, setValue] = useState([])
    const [send, setSend] = useState({})

    const setData = (e) => {
        setValue(e.target.value)
    }

    const SubmitData = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/userData",{
            method: "POST",
            body: JSON.stringify({
                name: "omkar",
                age: 23,
                id: 1
            }
            ),
            headers: {
                "content-type": "application/json"
            }
        })
    }

    const getData = async () => {
        let response = await fetch("http://localhost:3000/userData");
        let data = await response.json()
        setValue(data)

    }


    useEffect(() => {
        getData()
    }, []);


    const update = () => {
        fetch(`http://localhost:3000/userData/${1}`, {
            method: "PUT",
            body: JSON.stringify({
                name: "rahul",
                age: 23,
                id: 1
            }),
            headers: {
                "content-type": "application/json"
            }
        })
    }

    const delte = () => {
        fetch(`http://localhost:3000/userData/${1}`, {
            method: "DELETE",
        })
    }



    return (
        <>
            <button onClick={SubmitData}>submit</button>
            <button onClick={update}>update</button>
            <button onClick={delte}>DELETE</button>
        </>
    )
}
export default Practice