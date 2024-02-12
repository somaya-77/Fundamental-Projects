import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useState } from 'react';

const Quistion = ({title, info}) => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <h2>{title}</h2>

       {!show ? <button onClick={() => setShow(!show)}>
            <FaCirclePlus />
        </button>
        :
        <button onClick={() => setShow(!show)}>
            <FaCircleMinus />
        </button>
        }

        {show && <p>{info}</p>}
    </div>
  )
}

export default Quistion;