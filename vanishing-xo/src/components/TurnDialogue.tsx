interface TurnDialogueProps {
    currentTurn: string;
}

export default function TurnDialogue({currentTurn}: TurnDialogueProps) {
    return (
        <div>
            Now playing: {currentTurn}
        </div>
    )
}