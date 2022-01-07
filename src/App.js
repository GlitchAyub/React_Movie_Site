import {Discover} from './Api';
import{useEffect,useState} from 'react'
import Movie from './components/Movie';


function App() {
  const [movies,setMovies]=useState([])

  useEffect(() => {
    fetch(Discover).then(response=>{
      return response.json()
    }).then(data=>{
      console.log(data.results);
      setMovies(data.results)
    })

  }, [])

  return (
  <>
  <div className='movie_container'>
    {movies.map((movie)=>(
      <Movie key={movie.id} {...movie}/>
    ))}

  </div>

  </>
  );
}

export default App;
