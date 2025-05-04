import { useState } from 'react'
import './App.css'
import KanbanBoard from './components/KanbanBoard'
import Header from "./components/Header"

function App() {
  const [kanbanCards, setkanbanCards] = useState([
    { index: 0, name: "Todo" },
    { index: 1, name: "In Progress" },
    { index: 3, name: "In Review" },
    { index: 4, name: "Done" },
  ])

  const [kanbanCardItems, setKanbanCardItems] = useState([
    { parentIndex: 0, description: "Blaa blaa blaa" },
    { parentIndex: 0, description: "Blaa blaa blaa" },
    { parentIndex: 0, description: "Blaa blaa blaa" },
    { parentIndex: 1, description: "Blaa blaa blaa" },
    { parentIndex: 1, description: "Blaa blaa blaa" },
    { parentIndex: 2, description: "Blaa blaa blaa" },
    { parentIndex: 2, description: "Blaa blaa blaa" },
    { parentIndex: 3, description: "Blaa blaa blaa" },
    { parentIndex: 4, description: "Blaa blaa blaa" },
    { parentIndex: 4, description: "Blaa blaa blaa" },
  ])

  return (
    <>
      <Header />
      <KanbanBoard kanbanCards={kanbanCards} kanbanCardItems={kanbanCardItems}/>
    </>
  )
}

export default App
