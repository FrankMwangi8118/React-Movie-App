
import { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import '../css/Home.css'
import { searchMovies,getPopularMovies } from '../Services/api';
 function Home() {
    const [movies,setMoviess]=useState([]);
    const [searchQuery,setSearchQuery]=useState('');
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);


    useEffect(()=>{
        const loadPopularMovies=async ()=>{
            try{
                const popularMovies=await getPopularMovies();
                setMoviess(popularMovies)
            }catch(err){
                console.log(ErrorEvent)
                setError("failed to load the movies")
            }
            finally{
                setLoading(false)
            }

        }
        loadPopularMovies();

    },[]);

    
   

    const handleSearch=(e) =>{
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery('');
    };

  return <div className='home'>
    <form onSubmit={handleSearch} className='search-form'>
        <input type="text"
         placeholder="search for movies...." 
         className='search-input'
         onChange={((e)=>setSearchQuery(e.target.value))}
         value={searchQuery}
          />
        <button type='submit'
        className='search-button'>
            search
        </button>
    </form>

    <div className='movies-grid'>
        {movies.map((movie)=>(
           <MovieCard movie={movie} key={movie.id}/>
        ))}

    </div>
  </div>
   
  
}
export default Home;