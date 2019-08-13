import React, { useReducer } from 'react';

import Input from './components/Input';
import Task from './components/Task'
import { initialState, reducer } from './reducers/Reducer';

import './App.css';

function App() {
  
const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">

      <Input />

      {state.todos.map(singleTask => <Task taskName={singleTask.item} />)}
      
    </div>
  );
}

export default App;
