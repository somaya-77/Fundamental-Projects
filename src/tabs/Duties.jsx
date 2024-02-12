import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({ duties }) => {
    return (
        <div>
            {duties.map((duty, index) => {
                return (
                    <div key={index} className="job-desc">
                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Duties;