import React from "react";
import Item from "../models/item"

interface TaskListProps {
    items:Item[]
}
export default function TaskList(props:TaskListProps):JSX.Element {
    return (
        <div>
            <h1>Task today</h1>
            <ul>
                {props.items.map((element)=>(
                    <li key={element.id}>{element.name}</li>
                ))}
            </ul>
        </div>
    )
};
