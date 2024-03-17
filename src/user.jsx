import { useEffect, useState } from "react"

export default function Users() {
    const [user, setuser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setuser(data))

    }, [])
    return (
        <div>
            <h1>data:{user.length}</h1>
        </div>

    )
}

/**
 * 1.useState declear krte hbe 
 * 2.useeffact callback and dependance declear array
 * 3.use lode data fetch
 */