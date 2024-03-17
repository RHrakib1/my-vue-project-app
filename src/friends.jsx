// akhane css style file add kora hoyese 
import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend'
export default function Friends() {
    const [friend, setfriend] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setfriend(data))

    }, [])
    return (
        <div className='box'>
            <h1>friend:{friend.length}</h1>
            {
                friend.map(friend1 => <Friend
                    friend={friend1}></Friend>)
            }
        </div>
    )

}