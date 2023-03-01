
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <Header/>
       
        <div className='pagecontent'>
          <Navbar/>
        </div>
      
      <Footer/>
    </div>
  );
}

export default App;
