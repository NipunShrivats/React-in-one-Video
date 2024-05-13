import React, { useContext } from 'react'
import { incrementByAmount } from '../store/reducers';
import { store } from '../store/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CountContext } from '../context/CountContext';

export default function Contact() {

    const value = useSelector(state => state.value)

    const { count, setCount } = useContext(CountContext)
    const increment_data = () => {
        setCount(count + 2)
    }

    function incrementVal() {
        store.dispatch(incrementByAmount(10));
        console.log("value updated")
    }
    return (
        <>
            <div>Contact</div>
            <button onClick={incrementVal}>Increment value by 10</button>

            <h1>{value}</h1>

            <h2>ContextValue: {count}</h2>
            <button onClick={increment_data}>Increase count by 2</button>
            <Link to="/register">Go to register</Link>


        </>

    )
}
