import "./App.scss";
import Todos from "./components/Todos";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "Task One",
          done: false
        },
        {
          id: 2,
          title: "Task two",
          done: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
