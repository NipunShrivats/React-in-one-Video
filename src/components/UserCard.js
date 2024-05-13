import React from 'react'

export default function UserCard({ name, email, rollNo }) {
    return (
        <>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{rollNo}</p>
        </>
    )
}
