import React from 'react'

export default function Title({ name, number, schoolName, rollNo }) {
    return (
        <>
            <div className='hello' style={{ color: "red", fontSize: 50 }}>The TITLE - {name}</div>
            <div>The TITLE - {number}</div>
            <div>The TITLE - {schoolName}</div>
            <div>The TITLE - {rollNo}</div>
        </>
    )
}
