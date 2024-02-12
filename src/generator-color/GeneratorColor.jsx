import { useState } from "react";
import Form from "./Form";
import ListColor from "./ListColor";
import Values from "values.js";

import { ToastContainer, toast } from 'react-toastify';

const GeneratorColor = () => {
  const [colors, setColors] = useState(new Values('#25d483').all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ListColor colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}

export default GeneratorColor;