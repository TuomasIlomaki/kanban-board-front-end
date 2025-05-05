import KanbanCard from "./KanbanCard"
import "../index.css"
import { useMemo, useState } from "react"
import { DndContext } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"

function KanbanBoard(props) {
    const [columns, setColumns] = useState([])
    const columnsId = useMemo(() => columns.map((col) => col.id), [columns])

    function createNewColumn() {
        const columnToAdd = {
            id: generateId(),
            title: `Column ${columns.length + 1}`
        }
        setColumns([...columns, columnToAdd])
    }

    function generateId() {
        return Math.floor(Math.random() * 10001)
    }

    function deleteColumn(id) {
        const filteredColumns = columns.filter((col) => col.id !== id)
        setColumns(filteredColumns)
    }

    return (
        <div>
            <DndContext>
                <div className="kanban-board">
                    <SortableContext items={columnsId}>
                        {columns.map((column, columnIndex) => (
                            <KanbanCard className="kanban-card" column={column} deleteColumn={deleteColumn} key={column.id}/>
                        ))}
                    </SortableContext>
                    <button className="add-column-btn" onClick={() => {createNewColumn()}}>Add Column</button>
                </div>
            </DndContext>
        </div>
    )
}

export default KanbanBoard