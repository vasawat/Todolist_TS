import React from "react";
import { useRef } from "react";
interface TaskformProps {
    addItem:(name:string)=>void
}
export default function TaskForm({addItem}:TaskformProps):JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
    function saveData (e:React.FormEvent){
        e.preventDefault();
        const name = inputRef.current!.value
        addItem(name)
    }
    return (
        <form onSubmit={saveData}>
            <input type="text" placeholder="put your task" ref={inputRef}/>
            <button type="submit">submit</button>
        </form>
    )
};
