import './App.css';
import Footer from './components/Footers/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
