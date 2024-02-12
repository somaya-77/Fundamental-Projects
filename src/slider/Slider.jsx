import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {list } from './data';
import './style.css';

const Slider = () => {
    const [people, setPeople] = useState(list);
    const [currentPersone, setCurrentPersone] = useState(0);

    // const prevSlide = () => {
    //     if (currentPersone > 0) {

    //         setCurrentPersone(currentPersone - 1);
    //     }
    // }
    // const nextSlide = () => {
    //     if (currentPersone < people.length - 1) {

    //         setCurrentPersone(currentPersone + 1);
    //     }
    // }

    const prevSlide = () => {
        setCurrentPersone((oldPersone) => {
            const result = (oldPersone - 1 + people.length) % people.length;
            return result;
        })
    }
    const nextSlide = () => {
        
        setCurrentPersone((oldPersone) => {
            const result = (oldPersone + 1) % people.length;
            return result;
        })
    }
    useEffect(() => {
        let slider = setInterval(() => {
            nextSlide();
        }, 3000)
        return(() => {clearInterval(slider)})
    }, [currentPersone])

    return (
        <section className='slider-container '>
            {people.map((persone, indexPersone) => {
                const { id, image, name, title, quote } = persone;
                return <article className='slide' style={{ transform: `translateX(${100 * (indexPersone - currentPersone)}%)`, opacity: indexPersone ===  currentPersone ? 1 : 0,visibility: indexPersone ===  currentPersone ? 'visible' : 'hidden', }} key={id}>
                    <img src={image} alt={name} className='person-img' />
                    <h5 className='name'>{name}</h5>
                    <p className='title'>{title}</p>
                    <p className='text'>{quote}</p>
                    <FaQuoteRight className='icon' />
                </article>
            })}

            <button type='button' className='prev' onClick={prevSlide}><FiChevronLeft /></button>
            <button type='button' className='next' onClick={nextSlide}><FiChevronRight /></button>
        </section>
    )
}

export default Slider;