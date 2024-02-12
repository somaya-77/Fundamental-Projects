import { useState } from "react";


const Tour = ({id, name, image, info, price, deleteItem}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{readMore ? info : `${info.substring(0,200)}.....`} <span style={{color: "red"}} onClick={() => setReadMore(!readMore)}>{!readMore ? "Read More" : "Less"}</span></p>
        <span>{price}</span>
        <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  )
}

export default Tour;