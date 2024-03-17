import { useState } from "react"
// usestate is hear
export default function Team() {
    const [team, setteam] = useState(11)

    // add to the player
    const handleAdd = () => {
        const newPlayer = team + 1;
        setteam(newPlayer)
    }

    // remove to the player
    const handleRemove = () => {
        setteam(team - 1);
        
    }


    // css style aadd 
    const webStyle = {
        border: '2px solid blue',
        borderRadius: "10px",
        margin: '10px',
        padding: '10px'
    }


    // website view
    return (
        <div style={webStyle}>
            <h3>players :{team}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}