import './App.css';
import TaskForm from './containers/TaskForm'
import DisplayUser from './components/DisplayUser'
function App() {
  return (
    <div className="App">
     <TaskForm />
     <DisplayUser/>
    </div>
  );
}

export default App;
