import Appbar from "./Appbar"
import AddTodo from "./Addtodo"
import RenderTodo from "./Rendertodo"

function App() {
  return(
    <div>
      <Appbar />
      <div style={{
        display: "flex",
      }}>
        <div style={{ flex: 1, padding: '16px' }}>
            <AddTodo />
        </div>
        <div style={{ flex: 1, padding: '16px' }}>
            <RenderTodo />
        </div>
      </div>
    </div>
  )
}

export default App