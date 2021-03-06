import './App.css';
import pug from './media/pug.jpg'
import snake from './media/snake.jpg'
import CardClass  from './components/Card_class/Card_class.jsx'
import CardFunc  from './components/Card_func/Card_func';

function App() {

  return (
    <div className="App">
      <CardClass name='Pretty Pug' 
                imgSrc={pug} 
                info = 'This is quite pretty pug. I really like pugs, u know'>
      </CardClass>
      <CardFunc name ='Ugly snake'  
                info = 'This is ugly snake. I really hate them'  
                imgSrc = {snake}>
      </CardFunc>
    </div>
  );
}

export default App;
