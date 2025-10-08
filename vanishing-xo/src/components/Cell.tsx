import { useReducer } from "react"
import "./Cell.css"
import type {CellState, CellCoord} from "../types/CellTypes"

interface CellProps {
    handleTurn: (state: CellState, action: string) => CellState,
    coord: CellCoord
}

export default function Cell({handleTurn, coord}: CellProps) {
    const [state, dispatch] = useReducer(handleTurn, {cell_symbol: " ", filled: false, coord: coord});

    function handleClick() {
        dispatch("turn happening")
    }

    return (
        <div onClick={handleClick}>
            {state.cell_symbol}
        </div>
    )
}