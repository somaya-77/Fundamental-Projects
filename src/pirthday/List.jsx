import Persons from "./Persons";


const List = ({person}) => {
  return (
    <div>
        {person.map((person) => {
            return <Persons key={person.id} {...person}/>
        })}
        
    </div>
  )
}

export default List;
