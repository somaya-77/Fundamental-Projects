import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from "react";
import reviews from './data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  // const checkNumber = (number) => {
  //   if(number > reviews.length - 1){
  //     return 0;
  //   }
  //   if(number < 0){
  //     return reviews.length - 1;
  //   }
  //   return number;
  // }

  const nextIndex = () => {
    setIndex((currentIndex) => {
      // const newIndex = currentIndex + 1;
      // return checkNumber(newIndex);

        const newIndex = (currentIndex + 1) % reviews.length;
        return newIndex;
    })
  }

  const prevIndex = () => {
    setIndex((currentIndex) => {
      // const newIndex = currentIndex - 1;
      // return checkNumber(newIndex);

      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        return newIndex;
    })
  }

  const randomReviews = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if(randomNumber === index){
      randomNumber = index + 1;
    }
    // setIndex(checkNumber(randomNumber));
    const newIndex = randomNumber % reviews.length;
    setIndex(newIndex);
  }

  return (
    <main>
      <article className='review'>
        <div className="image">
          <img src={image} alt={name} style={{ width: "100px" }} />
          <span><FaQuoteRight /></span>
        </div>
        <div className="title">
          <h2>{name}</h2>
          <span>{job}</span>
          <p>{text}</p>
        </div>
        <div className="controll">
          <span onClick={prevIndex}><FaChevronLeft /></span>
          <span onClick={nextIndex}><FaChevronRight /></span>
          <button onClick={randomReviews}>Surprise Me</button>
        </div>
      </article>

    </main>
  )
}

export default Review;