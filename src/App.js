import React from 'react';
import './App.css';
import ProfilePage from './Components/ProfilePage';
import DialogsPage from './Components/DialogsPage';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Friends from './Components/Friends/Friends'
import {Route} from 'react-router-dom'
import UsersContainer from './Components/Users/usersContainer';


function App(props) {
 
  return (
    
    <div className="App">
      <Header />
      <Nav />
      <div className="app-wrapper">
      <Route path='/profile'  render={()=><ProfilePage  state={props.state.getState()} />}/>
      <Route path='/messages'  render={()=><DialogsPage state={props.state.dialogPage} dispatch={props.dispatch}/>}/>
      <Route path='/friends'  render={()=><Friends state={props.state}/>}/>
      <Route path='/friends'  render={()=><Friends state={props.state}/>}/>
      <Route path='/friends'  render={()=><Friends state={props.state}/>}/>
      <Route path='/friends'  render={()=><Friends state={props.state}/>}/>
      <Route path='/users'  render={()=><UsersContainer />}/>

      {/* <ProfilePage state={props.state}/> */}
      {/* <DialogsPage state={props.post}/> */}
      </div>
    </div>
    
  );
}
export default App;
