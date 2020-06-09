import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Dashboard from './components/Dashboard';
import AddStudents from './components/AddStudents';
import Teachers from './components/Teachers';
import StudentsTable from './components/StudentsTable';
import UserData from './components/UserData';
import Post from './view/Post';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path='/all_students' component={ AddStudents } />
            <Route path="/teachers" component={Teachers} />
            <Route path="/users" component={UserData} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

