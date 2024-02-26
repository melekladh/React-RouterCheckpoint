import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Filter from './Filter';
import MovieList from './MovieList';
import Add from './Add';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [searchRate,setsearchRate]=useState(0)

  const [titleSearch,settitleSearch]=useState("")
  const [movies,setMovies]=useState([
    {title:"fast and furious",
    description:"Fast and Furious — ou Rapides et Dangereux au Québec — est une série de films d'action américains ",
    rating:"3",
    posterURL:"https://fr.web.img5.acsta.net/pictures/23/05/10/10/55/5129031.jpg",
    trailer:"https://youtu.be/2TAOizOnNPo?si=lIKHhbcekGHVXRq6"
  },
  {title:"forrest gump",
  description:"The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart. ",
  rating:"4",
  posterURL:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  trailer:"https://youtu.be/bLvqoHBptjg?si=srsjhOv_Q3L-0KaW"
},
{title:"da vinci code",
description:"The Da Vinci code commence par un meurtre spectaculaire perpétré dans le Musée du Louvre. Tous les indices pointent vers une organisation religieuse clandestine prête à tout pour protéger un secret qui menace un dogme acquis depuis 2000 ans. ",
rating:"5",
posterURL:"https://fr.web.img6.acsta.net/medias/nmedia/18/36/20/56/18613332.jpg",
trailer:"https://youtu.be/5sU9MT8829k?si=dPmNmvfjxcNhoUVD"
}
  ])

  return (
    <div className="App">
      <Filter  searchRate={searchRate} setsearchRate={setsearchRate}   settitleSearch={settitleSearch}/>

      <Add movies={movies} setMovies={setMovies}/>
      <Routes>
        <Route path="/" element ={<MovieList  movies={movies.filter(movie=>movie.title.toLowerCase().trim().includes(titleSearch.toLowerCase().trim())&&movie.rating>=searchRate )} />  }>

        </Route>
</Routes> 


    </div>

  );
}

export default App;