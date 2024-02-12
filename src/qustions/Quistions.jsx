import { useState } from 'react';

import data from './data';
import Quistion from './Quistion';

const Quistions = () => {
    const [quistions, setQuistions] = useState(data);
    
    return (
        <div>
            {quistions.map((quistion) => {
                return <Quistion key={quistion.id} {...quistion}/>
            })}
        </div>
    )
}

export default Quistions;