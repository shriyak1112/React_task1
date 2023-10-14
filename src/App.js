import './App.css';
import './style.css';
import { useState, useEffect } from 'react';

function App() {
  
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);
   
  }, [text]);

  return (
    <div>
    <div className="words-counter-container">
                <h2>
                    Word Counter
                    text
                </h2>
                <textarea  name="" id="" cols="30" rows="10" className="words" value={text} onChange={changeHandler}
          placeholder='What is on your mind?'></textarea>

          <div>
          <p className="word-count">Word Count: {wordCount}</p>
          </div>
   </div>
   </div>
  );
}
export default App;
