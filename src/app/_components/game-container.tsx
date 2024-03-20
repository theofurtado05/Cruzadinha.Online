import { Word } from "./word";

const words = [
    "vasco",
    "perda",
    "areia"
]

export function GameContainer(){
    return (
        <>
            <Word words={words}/>
        </>
    )
}