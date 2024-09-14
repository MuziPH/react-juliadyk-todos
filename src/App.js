import './App.css';
import TodoList from './components/TodoList';

function App() {
  const todos = ["React", "BAW", "Spring Boot", "Azure", "Java"];
  return (
    <div>
      <header>My Todo List</header>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
