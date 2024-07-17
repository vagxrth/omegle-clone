import { useState } from "react"
import { Link } from "react-router-dom";

export const Landing = () => {

    const [name, setName] = useState("");

    return (
        <div>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <Link to={`/room/?name=${name}`}>Join Room</Link>
        </div>
    )
}