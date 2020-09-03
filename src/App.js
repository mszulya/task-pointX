import React from 'react';
import styles from './App.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import CreateNewTask from './components/CreateNewTask/CreateNewTask';

function App() {
  let userName='DrBeats inc';
  
  return (
    <BrowserRouter>
      <div className={styles.wrap}>
        <Header userName={userName}/>
        <div>
          <Route path='/task-pointX' exact render={  () => <Main userName={userName}/> } />
          <Route path='/newtask' render={  () => <CreateNewTask /> } />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
