import "../index.css"

function KanbanCardItem(props) {
    const { kanbanCardItem } = props

    return (
        <div className="kanban-card-item">
            <p>{ kanbanCardItem.description }</p>
        </div>
    )
}

export default KanbanCardItem