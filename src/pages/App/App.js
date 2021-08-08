import React, { Component } from 'react';

import './App.css';

import{Route,NavLink} from "react-router-dom";

import * as puppyAPI from '../../services/puppies-api'

import AddPuppy from '../AddPuppy/AddPuppy';

import PuppyList from '../PuppyList/PuppyList'

import EditPuppy from '../EditPuppy/EditPuppy';

class App extends Component {
  
  state={
  
    puppies:[]
  
  };

  handleAddPuppy= async newPupData => {

    const newPup = await puppyAPI.create(newPupData)

    this.setState(state => ({

      puppies:[...state.puppies, newPup]}),
      ()=> this.props.history.push('/'));
    
  }

  handleDeletePuppy= async id => {
    
    await puppyAPI.deleteOne(id);
    
    this.setState(state => ({
    
      puppies: state.puppies.filter(p => p._id !== id)
    
    }));
 
  }


  async componentDidMount() {

    const puppies = await puppyAPI.getAll();

    this.setState({puppies});
  }
  handleUpdatePuppy = async updatedPupData => {
    const updatedPuppy = await puppyAPI.update(updatedPupData);
  
    const newPuppiesArray = this.state.puppies.
  
    map(p => p._id === updatedPuppy._id ? updatedPuppy : p);
  
  this.setState(
    
    {puppies: newPuppiesArray},
    
    () => this.props.history.push('/')
  );
}



  render() {
  
  return (
   <div clasName="App">
    

      <header className= 'App-header'>
        React Puppies CRUD
        
        <nav>

          <NavLink exact to='/'>Puppy list</NavLink>
     
          <NavLink className='m-left' exact to='/add'>Add Puppy</NavLink>
        </nav> 
    
      </header>
    
    <main>
          <Route exact path='/add' render={() => 
          <AddPuppy
          handleAddPuppy = {this.handleAddPuppy}
          />
          } />
          <Route exact path='/' render={()=>
          <PuppyList
            puppies={this.state.puppies}
            handleDeletePuppy={this.handleDeletePuppy}
            />
            }/>
            <Route exact path='/edit' render={({location}) => 
            <EditPuppy
              handleUpdatePuppy={this.handleUpdatePuppy}
                location={location}
              />
            } />
    </main>
   </div>
  )
}

}


export default App;
