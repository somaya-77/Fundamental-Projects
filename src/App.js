import { useState } from "react";
import GeneratorColor from "./generator-color/GeneratorColor";
import Lorem from "./Lorem/Lorem";
import Slider from "./slider/Slider";
import SliderL from "./slider/SliderL";
import Tabs from "./tabs/Tabs";
import Pirthday from "./pirthday/Pirthday";
import { data } from './pirthday/data';
import Menu from "./menu/Menu";
import Review from "./reviews/Review";
import AllTours from "./tours/AllTours";
import Quistions from "./qustions/Quistions";

import Grocery from './grocery/Grocery';

function App() {
  
  const [person, setPerson] = useState(data);
  
  return (
    <div className="App">
      {/* <Pirthday person={person} setPerson={setPerson} data={data}/> */}
      {/* <AllTours /> */}
      {/* <Review /> */}
      {/* <Quistions /> */}
      {/* <Menu /> */}
      {/* <Tabs /> */}
      {/* <Slider /> */}
      {/* <SliderL /> */}
      {/* <Lorem /> */}
      {/* <GeneratorColor /> */}
      <Grocery />

    </div>
  );
}

export default App;
