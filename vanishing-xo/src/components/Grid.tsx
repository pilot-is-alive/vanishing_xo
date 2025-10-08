import "./Grid.css"
import Cell from "./Cell"
import TurnDialogue from "./TurnDialogue"
import { useState } from "react"
import type { CellState } from "../types/CellTypes"

export default function Grid() {

    const [currentTurn, setCurrentTurn] =  useState("X");
    const [gridState, setGridState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]); // 0 = unassigned, 1 = X, 2 = Y
    //TODO: const [moveQueue, setMoveQueue] = useState([]);

    function handleClickTurn(state: CellState, action: string): CellState {
        console.log(action);
        if (state.filled) {
            return state;
        }

        //update grid state based on coords
        const gridStateIndex = (state.coord.y - 1)*3 + state.coord.x - 1;
        const newGridState = [...gridState];
        newGridState[gridStateIndex] = currentTurn=="X"? 1: 2;
        setGridState(newGridState);

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