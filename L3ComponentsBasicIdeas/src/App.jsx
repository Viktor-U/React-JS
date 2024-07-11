import { useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([
    'The Matrix',
    'Man of Steel',
    'Lord of the Rings',
    'The Case for Christ'
  ])

  const buttonClickHandler = () => {
    setMovies((oldMovies) => {
      const newMovies = [...oldMovies];

      if (oldMovies[2] != 'Harry Poter') {
        newMovies[3] = 'Harry Poter';
        newMovies.push('Naruro');
        newMovies.shift();
      }

      return newMovies;
    });
  };

  return (
    <>
      <h1>Movies</h1>

      <ul>
        {movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>

      <button onClick={buttonClickHandler}>Buton</button>
    </>
  )
}

export default App
