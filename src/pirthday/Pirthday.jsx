import List from "./List";
import './style.css';


const Pirthday = ({person, setPerson, data}) => {
  return (
    <div className='container'>
      <h1>{person.length} birthday today</h1>
      <List person={person} />
      {person.length > 0 ? <button className='btn btn-block' onClick={() => setPerson([])}>Clear All</button>
      :
      <button className='btn btn-block' onClick={() => setPerson(data)}>Reset</button>}
      
    </div>
  )
}

export default Pirthday;