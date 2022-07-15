import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get a Joke');

  const handleClick = () => {
    if (btnText === 'Get a Joke' || btnText === 'Wanna See Another Joke?') {
      getJoke().then((obj) => setJoke(obj)).then(() => {
        setBtnText('Get Punchline');
      });
    } else if (btnText === 'Get Punchline') {
      setBtnText('Wanna See Another Joke?');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
        border: '3px dotted #e6e6e6',
        borderWidth: '15px',
        marginTop: '50px',
        marginBottom: '50px',
      }}

    >
      <>
        <h1>{ btnText === 'Get A Joke' ? '' : joke.setup }</h1>
        <h4><b>{ btnText === 'Wanna See Another Joke?' ? joke.delivery : ''}</b></h4>
        <button type="button" onClick={handleClick}>{btnText}</button>
      </>
    </div>
  );
}

export default Home;
