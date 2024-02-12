import MenuItem from "./MenuItem";


const ListMenu = ({itemMenu}) => {
  return (
    <div className="section-center">
        {itemMenu.map((item) => {
            return <MenuItem key={item.id} {...item}/>
        })}
    </div>
  )
}

export default ListMenu;