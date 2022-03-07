import './App.css';
import { Router,Route} from 'react-router-dom';
import React from 'react'
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';



function App() {
  return (
   <>
   
     <Router history={history}>
     <Header/>
     <div>
     <Route path='/' exact  component={StreamList}/>
     <Route path='/streams/new' exact component={StreamCreate}/>
     <Route path='/streams/edit/:id' exact component={StreamEdit}/>  
     <Route path='/streams/delete/:id' exact component={StreamDelete}/>
     <Route path='/streams/show' exact component={StreamShow}/>
     </div>

     </Router>
   </>
  );
}

export default App;
