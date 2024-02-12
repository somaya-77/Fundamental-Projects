

const Persons = ({ name, image,age }) => {



  return (
    <div  className='person'>
      < ul>
        <li>
          <img src={image} alt={name} />
          <span>
            <h2>{name}</h2>
            <p>{age} Years</p>
          </span>
        </li>
      </ul >
    </div>
  )
}

export default Persons;