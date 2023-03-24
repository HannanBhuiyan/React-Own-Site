 
import './App.css';
import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Service from './components/service/Service';
import Experience from './components/experience/Experience';
import Work from './components/work/Work';
import Partner from './components/partner/Partner.js';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
        <Menu></Menu>
        <Hero></Hero>
        <About></About>
        <Service></Service>
        <Experience></Experience>
        <Work></Work>
        <Partner></Partner>
        <Blog></Blog>
        <Footer></Footer>
    </>
  );
}

export default App;
