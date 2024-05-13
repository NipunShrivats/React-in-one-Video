import React, { useEffect, useState } from 'react'
import './Register1.css'


export default function Rejister() {
    function handleClick(event) {
        event.preventDefault();
        console.log("Hello World!")
    }

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [age, setAge] = useState(13);

    function changeEmail(event) {
        setEmail(event.target.value);
    }
    function changePass(event) {
        setPass(event.target.value);
    }
    function incrementAge(event) {
        event.preventDefault();
        setAge(age + 1)
    }
    useEffect(() => {
        // setAge(13); //useEffect - runs on screen render
        console.log("age: ", age);
    }, [age]) //empty dependency - provide when variables are changing in nature

    // let age = 19;
    // let name_ = "Nipun";

    return (
        <form action="">
            {age >= 18 ? (
                <>
                    <input type="email" placeholder='Enter Email' className='input-area' value={email} onChange={changeEmail} /><br />
                    <input type="password" placeholder='Enter password' className='input-area' value={pass} onChange={changePass} /><br />
                    <button onClick={handleClick}>Submit</button>

                    <p>{email}</p>
                    <p>{pass}</p>
                </>
            ) : (<h1>No access !</h1>)}

            <button onClick={incrementAge}>increment</button>

        </form>
    )

}
