import './App.css';
import './header'
import Header from './header';
import React from 'react';
import Content from './Content';
import Footer from './Footer';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const todo = ['React', 'CSS', 'Não tem mais HTML', 'JSX', 'REDUX'];

function App() {
   
  return (
    <React.Fragment>
      <Header />
      <ol className='content-list'>
        {todo.map((item) => task(item))}
      </ol>    
      <div className='content-container'>
        <Content />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
