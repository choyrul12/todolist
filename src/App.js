import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setToDos] = React.useState([])
  // const [news, setNews] =  React.useState([])
  // React.useEffect(function(){
  //   async function getData(){
  //     const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
  //     const res = await req.json();

  //     setNews(res)
  //   }
  //   getData();
  // },[])
  // const activityRef = React.useRef(null)
  
  function submitForm(e){
    e.preventDefault();
    setToDos([...todos, {id:generateId(), activity:activity}])
    setActivity('')
  }

  function generateId(){
    return Date.now();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoList</h1>
      </header>
      <div className='body'>
        <form onSubmit={submitForm}>
          <input type='text' value={activity} className='input-txt' onChange={function(e){setActivity(e.target.value)}}/>
          <button className='btn'>ADD</button>
        </form>  
        <ul>
          {todos.map(function(todo){
            return<li key={todo.id}>{todo.activity}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
