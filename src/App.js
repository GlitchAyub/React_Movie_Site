import {Discover,Search_Api} from './Api';
import{useEffect,useState,useRef} from 'react'
import Movie from './components/Movie';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';


function App() {
  const [movies,setMovies]=useState([])
  const searchEl = useRef(null)

  useEffect(() => {
    fetchData(Discover)
  }, [])
  const fetchData=((Api)=>{
    fetch(Api).then(response=>{
      return response.json()
    }).then(data=>{
      console.log(data.results);
      setMovies(data.results)
    })
  })

  const onSubmitHandler =(event)=>{
    event.preventDefault() //prevent it from submitting a form.
    const search =searchEl.current.value
    if(search){
      fetchData(Search_Api + search)
    }
  }

  return (
  <>
  <div className='header'>
    
    <form onSubmit={onSubmitHandler}>
    <div className='search_bar'>
      <SearchIcon/>
      <input className='header_search' type='search' placeholder='Search' ref={searchEl}></input>
    </div>
    </form>
  
    <HomeIcon/>

  </div>
  <div className='movie_container'>
    {movies.map((movie)=>(
      <Movie key={movie.id} {...movie}/>
    ))}

  </div>

  </>
  );
}

export default App;
