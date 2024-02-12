import { useState } from "react";
import './style.css';

const Form = ({ addColor }) => {
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="container">
            <h2>Color Generator</h2>
            <form onSubmit={handleSubmit} className="color-form">
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="text" placeholder="#25d483" value={color} onChange={(e) => setColor(e.target.value)} />
                <button className="btn" type="submit" style={{ background: color }} onClick={() => addColor(color)}>submit</button>
            </form>
        </section>
    )
};

export default Form;