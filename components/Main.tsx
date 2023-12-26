import React, { useEffect, useState } from 'react'
import { requestURL } from '@/atoms/requestAtom'
import { useRecoilValue } from 'recoil'
import { API_URL } from '@/utils/requests'
import Thumbnail from './Thumbnail'

const Main = () => {
  const globalState = useRecoilValue(requestURL)
  const [movies, setMovies] = useState([])
  //   console.log('this is what i got from global state', globalState)

  const x = API_URL + globalState.url

  //   console.log('fetching here ->', x)
  useEffect(() => {
    fetch(API_URL + globalState.url)
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err))
    //vo dependensy array sekogash koga ke go smenam globalniot state
    // sakam povik na ovoj fetch
  }, [globalState.url])

  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols3'>
  {movies.map((movie: any) => (
  <Thumbnail key={movie['movie-index']} movie={movie} />
))}
    </div>
  )
}

export default Main
