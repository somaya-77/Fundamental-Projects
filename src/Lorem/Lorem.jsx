import { useState } from 'react';
import data from './data';
import './style.css';

const Lorem = () => {
    const [count, setCount] = useState(1);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count)
        setText(data.slice(0, amount))
        // console.log(typeof amount);
    }
    return (

        <section className='section-center'>
            <h2>tired of boring lorem ipsum?</h2>

            <form onSubmit={handleSubmit} className='lorem-form'>
                <label htmlFor="amount">Paragraphs:</label>
                <input type="number" id='amount' name='amount' min='1' step='1' max='8' value={count} onChange={(e) => setCount(e.target.value)} />
                <button className='btn' type='submit'>Generate</button>
            </form>
            <article className='lorem-text'>
                {text.map((item, index) => {
                    return <p key={index}>{item}</p> 
                })}
            </article>
        </section>
    )
}

export default Lorem;