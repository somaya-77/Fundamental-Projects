

const Header = ({ text, allCategories, filterCategories }) => {
  return (
    <div className="title">
      <h2>{text || 'Default Title'}</h2>
      <div className='title-underline'></div>
      <div className="btn-container">
        {allCategories.map(category => {
          return <button onClick={() => filterCategories(category)} key={category} className="btn">{category}</button>

        })}
      </div>
    </div>
  )
}

export default Header