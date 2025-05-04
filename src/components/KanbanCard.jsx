import "../index.css"
import KanbanCardItem from "./KanbanCardItem"

function KanbanCard(props) {
    const { kanbanCard, kanbanCardItems } = props

    return (
        <div className="kanban-card">
            <div className="kanban-card-header">{kanbanCard.name}</div>
            <div className="kanban-card-content">
                {kanbanCardItems.filter((i) => i.parentIndex === kanbanCard.index).map((kanbanCardItem, kanbanCardItemIndex) => {
                    return(
                        <KanbanCardItem kanbanCardItem={kanbanCardItem} key={kanbanCardItemIndex}/>
                    )
                })}
            </div>
        </div>
    )
}

export default KanbanCard