import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addUser } from './actions/action';
function App() {
  const dispatch = useDispatch()
  const [name, setname] = useState("")
  const state = useSelector(state => state.user)

const handlesubmit=(e)=>{
  dispatch(addUser({"id":4,name}));
  e.preventDefault()
}
  return (
    <div className="App">
     <form onSubmit={handlesubmit}>
      <input type="text" value={name} name="name" onChange={(e)=>setname(e.target.value)}/>
       <button type="submit">Submit</button>
       {
state.users.map((c)=><div key={c.id}>{c.name}</div>)
       }
     </form>
    </div>
  );
}

export default App;
