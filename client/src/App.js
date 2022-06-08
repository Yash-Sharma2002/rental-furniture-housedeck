import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './large/webpages/Home';
import { useMediaQuery } from '@mui/material'
import HomeMedium from './medium/webpages/Home';
import Packages from './large/webpages/Packages';


function Large() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/packages=:packages&tags=:tag' element={<Packages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


function Medium() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeMedium />} />
          {/* <Route exact path='/type=home' element={<HomeMedium />} />
          <Route exact path='/type=me' element={<HomeMedium />} />
          <Route exact path='/type=search' element={<HomeMedium />} />
          <Route exact path='/type=categories' element={<HomeMedium />} /> */}
          <Route exact path='/type=:type&package=:packages&tag=:tag' element={<HomeMedium />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default function App(){
  const xlMax = useMediaQuery('(max-width:4000px)');
  const xlMin = useMediaQuery('(min-width:1160px)');
  const mdMax = useMediaQuery('(max-width:1160px)');
  return (
    <>

      {xlMax && xlMin && (
        <Large  />
      )}
      {!(xlMax && xlMin) && mdMax && (
        <Medium />
      )}
    </>
  )
}


