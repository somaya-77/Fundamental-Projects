import { useEffect, useState } from "react"
import Tours from "./Tours";
import Loading from "./Loading";
const url = 'https://course-api.com/react-tours-project';

const AllTours = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(url);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      console.log(toursData)
      setTours(toursData);
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])
  const deleteItem = (id) => {
    const update = tours.filter((tour) => tour.id !== id);
    setTours(update);

  }
  if (isLoading) {
    return <Loading />
  }
  if (tours.length === 0) {
    return <div>
      <h2>no tours left</h2>
      <button onClick={() => getData()}>get all tours</button>
    </div>
  }
  return (
    <div>
        <Tours tours={tours} deleteItem={deleteItem} />
    </div>
  )
}

export default AllTours