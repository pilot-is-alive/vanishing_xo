import { useState } from "react"
import "./Cell.css"

export default function Cell() {
    const [symbol, setSymbol] = useState(" ");

    function handleClick() {
        setSymbol("X")
    }

    return (
        <div onClick={handleClick}>
            {symbol}
        </div>
    )
}