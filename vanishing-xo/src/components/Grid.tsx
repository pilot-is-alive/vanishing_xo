import "./Grid.css"
import Cell from "./Cell"
import TurnDialogue from "./TurnDialogue"
import { useState } from "react"

interface CellState {
    cell_symbol: string,
    filled: boolean
}

export default function Grid() {

    const [currentTurn, setCurrentTurn] =  useState("X");

    function handleClickTurn(state: CellState, action: string): CellState {
        console.log(action);
        if (state.filled) {
            return state;
        }
        setCurrentTurn(currentTurn=="X"?"O":"X")
        return {
            cell_symbol: currentTurn,
            filled: true
        }
    }

    //function reset()

    return (<>
        <TurnDialogue currentTurn={currentTurn}/>
        <div className="grid-container">
            <Cell handleTurn={handleClickTurn}/>
            <Cell handleTurn={handleClickTurn}/>
            <Cell handleTurn={handleClickTurn}/>
            <Cell handleTurn={handleClickTurn}/>
            <Cell handleTurn={handleClickTurn}/>
            <Cell handleTurn={handleClickTurn}/>
            <Cell handleTurn={handleClickTurn}/>
            <Cell handleTurn={handleClickTurn}/>
            <Cell handleTurn={handleClickTurn}/>
        </div>
    </> 
    )
}