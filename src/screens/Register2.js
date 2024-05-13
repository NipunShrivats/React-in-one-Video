import React, { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const bigCalculation = (num) => {
    console.log("calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num; //mimicking an API call
}

export default function Register2() {
    const value = useSelector(state => state.value)//
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculaton = useMemo(() => bigCalculation(count), [count]);


    const addTodo = () => {
        setTodos((t) => [...t, "New todo"]);
    }
    const increment = () => {
        setCount((c) => c + 1);
    }

    return (
        <>
            <div>
                <h2>My Todo</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add Todo</button>
                <hr />
                <div>
                    count:{count} <br />
                    <button onClick={increment}>+</button>
                    <hr />
                    <h2>BigCalculation</h2>
                    {calculaton}
                </div>
            </div>

            <Link to="/userList">Go to userList</Link><br />
            <Link to="/contact">Contact page</Link>

            <h2>{value}</h2>
        </>
    )
}
