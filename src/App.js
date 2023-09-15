import './App.css';
import ListToDo from './component/ListToDo';
import InputToDo from './component/InputToDo';
import TContext from './context/TodoContext';

function App() {
  return (
    <TContext.TodoContext>
    <div className="App container">
      <div className='row'>
        <InputToDo />
        <ListToDo />
      </div>
    </div>
    </TContext.TodoContext>
  );
}

export default App;
