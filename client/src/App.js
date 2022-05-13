import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './large/webpages/Home';
import { useMediaQuery } from '@mui/material'
import HomeMedium from './medium/webpages/Home';


function Large() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
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
          <Route exact path='/home' element={<HomeMedium />} />
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


