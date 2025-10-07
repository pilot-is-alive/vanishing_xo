import { useReducer } from "react"
import "./Cell.css"

interface CellState {
    cell_symbol: string,
    filled: boolean
}

interface CellProps {
    handleTurn: (state: CellState, action: string) => CellState
}

export default function Cell({handleTurn}: CellProps) {
    const [state, dispatch] = useReducer(handleTurn, {cell_symbol: " ", filled: false});
;

    function handleClick() {
        dispatch("turn happening")
    }

    return (
        <div onClick={handleClick}>
            {state.cell_symbol}
        </div>
    )
}