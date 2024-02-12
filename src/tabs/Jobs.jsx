import Duties from "./Duties";


const Jobs = ({ getTabs, currentItem }) => {

    const { company, title, dates, duties } = getTabs[currentItem];
    return (
        <article className="job-info">
            <h3>{title}</h3>
            <span className='job-company'>{company}</span>
            <p className='job-date'>{dates}</p>
            <Duties duties={duties}/>
        </article>
    )
}

export default Jobs;