export interface CellCoord {
    x: number,
    y: number
}
export interface CellState {
    cell_symbol: string,
    filled: boolean,
    coord: CellCoord
}