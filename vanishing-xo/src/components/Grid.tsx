import "./Grid.css"
import Cell from "./Cell"
import TurnDialogue from "./TurnDialogue"
import { useState } from "react"
import type { CellState } from "../types/CellTypes"

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
            filled: true,
            coord: state.coord
        }
    }

    //function reset()

    return (<>
        <TurnDialogue currentTurn={currentTurn}/>
        <div className="grid-container">
            <Cell handleTurn={handleClickTurn} coord={{x:1,y:1}}/>
            <Cell handleTurn={handleClickTurn} coord={{x:2,y:1}}/>
            <Cell handleTurn={handleClickTurn} coord={{x:3,y:1}}/>
            <Cell handleTurn={handleClickTurn} coord={{x:1,y:2}}/>
            <Cell handleTurn={handleClickTurn} coord={{x:2,y:2}}/>
            <Cell handleTurn={handleClickTurn} coord={{x:3,y:2}}/>
            <Cell handleTurn={handleClickTurn} coord={{x:1,y:3}}/>
            <Cell handleTurn={handleClickTurn} coord={{x:2,y:3}}/>
            <Cell handleTurn={handleClickTurn} coord={{x:3,y:3}}/>
        </div>
    </> 
    )
}