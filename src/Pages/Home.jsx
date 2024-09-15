import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Work from '../components/work/Work';
import Footer from '../components/Footer/Footer';
import Reserved from '../components/Reserved/Reserved';
//import { Height } from '@mui/icons-material';

const Home = () => {
  return (
    <div>
      <Hero/>
      <About />
      <Work/>
      <Footer/>
      <Reserved/>
    </div>
  )
}

export default Home