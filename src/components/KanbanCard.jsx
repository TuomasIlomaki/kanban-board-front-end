import { useSortable } from "@dnd-kit/sortable"
import "../index.css"
import { CSS } from "@dnd-kit/utilities"
import KanbanCardItem from "./KanbanCardItem"

function KanbanCard(props) {
    const { column, deleteColumn } = props

    const { setNodeRef, attributes, listeners, transform, transition } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },
    })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div className="kanban-card">
            <div className="kanban-card-header">
                <div>0</div>
                <div>{column.title}</div>
                <button onClick={() => {deleteColumn(column.id)}}><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <div className="kanban-card-content">Content</div>
            <div>Footer</div>
        </div>
    )
}

export default KanbanCard