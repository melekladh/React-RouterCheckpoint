import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieDescription from './MovieDescription';
import Filter from './Filter';
import MovieList from './MovieList';
import Add from './Add';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [searchRate,setsearchRate]=useState(0)
    const [titleSearch,settitleSearch]=useState("")
  const [movies,setMovies]=useState([
    // We will add a description and the trailer link (embed video link) to the object movie.

    {title:"fast and furious",
    description:"Fast and Furious — ou Rapides et Dangereux au Québec — est une série de films d'action américains ",
    rating:"3",
    posterURL:"https://fr.web.img5.acsta.net/pictures/23/05/10/10/55/5129031.jpg",
    trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/2TAOizOnNPo?si=k0BKMA6g_zRr2wHb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {title:"forrest gump",
  description:"The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart. ",
  rating:"4",
  posterURL:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/bLvqoHBptjg?si=adbQk_GKAL6VgOgT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
},
{title:"da vinci code",
description:"The Da Vinci code commence par un meurtre spectaculaire perpétré dans le Musée du Louvre. Tous les indices pointent vers une organisation religieuse clandestine prête à tout pour protéger un secret qui menace un dogme acquis depuis 2000 ans. ",
rating:"5",
posterURL:"https://fr.web.img6.acsta.net/medias/nmedia/18/36/20/56/18613332.jpg",
trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/5sU9MT8829k?si=0O44Ksdov2AbHqxF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
}
  ])

  return (
    <div className="App">
      
      <Routes>
  <Route path="/" element={
    <><Filter  searchRate={searchRate} setsearchRate={setsearchRate}   settitleSearch={settitleSearch}/>

      <Add movies={movies} setMovies={setMovies}/>
<MovieList
movies={movies.filter(movie => movie.title.toLowerCase().trim().includes(titleSearch.toLowerCase().trim()) && movie.rating >= searchRate)}
    />
    </>
    
  } />
  <Route path='/movieinfo/:name' element={<MovieDescription movies={movies} />} />
</Routes>

    </div>

  );
}

export default App;