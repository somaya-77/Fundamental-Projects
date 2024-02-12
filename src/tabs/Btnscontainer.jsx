

const Btnscontainer = ({ getTabs, currentItem, setCurrenItem }) => {
    return (
        <div className='btn-container'>
            {getTabs.map((item, index) => {
                return (
                    <button key={index} onClick={() => setCurrenItem(index)}
                        className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}>
                        {item.company}
                    </button>
                )
            })}
        </div>
    )
}

export default Btnscontainer;