import KanbanCard from "./KanbanCard"
import "../index.css"

function KanbanBoard(props) {
    const { kanbanCards, kanbanCardItems } = props

    return (
        <div className="kanban-board">
            {kanbanCards.map((kanbanCard, cardIndex) => {
                return (
                    <KanbanCard kanbanCard={kanbanCard} kanbanCardItems={kanbanCardItems} key={cardIndex}/>
                )
            })}
        </div>
    )
}

export default KanbanBoard