import React from 'react'
import data from '../utils/data'
import UserCard from '../components/UserCard'


export default function UserList() {

    return (
        <>
            {/* part1 */}
            {/* {data.map(({ name, email, rollNo }) => {
                return (
                    <div>
                        <h1>{name}</h1>
                        <p>{email}</p>
                        <p>{rollNo}</p>
                    </div>
                )
            })} */}

            {/* part2 */}
            {/* {data.map(({ name, email, rollNo }) =>
                <div>
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <p>{rollNo}</p>
                </div>
            )} */}
            {/* part3 */}

            {data.map(({ name, email, rollNo }) =>
                <UserCard name={name} email={email} rollNo={rollNo} />
            )}
        </>
    )
}
