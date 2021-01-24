import React, { Component } from 'react';
import classes from './App.css';
import Header from './Header/Header';
import List from './List/List'
import ToDo from './assets/ToDo/ToDo'
 


class App extends Component {
  
  state={
    ToDo:[],
    Doing:[ ],
    Done:[]
  }
 clickOnToDo=(e)=>
  {
    let newToDo=[...this.state.ToDo];
    let newDoing=[...this.state.Doing];
    let indexToDelete=0;
    for(const i of this.state.ToDo)
    {
      if(i==e)
      {
        break;
      }
      indexToDelete++;
    }
    newToDo.splice(indexToDelete,1);
    newDoing.push(e);
    this.setState(
      {
        ToDo:newToDo,
        Doing:newDoing
      }
    );

   
    
  }

clickOnDoing=(e)=>
{
  let newDoing=[...this.state.Doing];
  let newDone=[...this.state.Done];
  let indexToDelete=0;
    for(const i of this.state.Doing)
    {
      if(i==e)
      {
        break;
      }
      indexToDelete++;
    }
    newDoing.splice(indexToDelete,1);
    newDone.push(e);
    this.setState(
      {
        Doing:newDoing,
        Done:newDone
      }
    );
    
}
clickOnDone=(e)=>
{
  alert('Congrats on finishing your task!');
  let newDone=[...this.state.Done];
  let indexToDelete=0;
    for(const i of this.state.Done)
    {
      if(i==e)
      {
        break;
      }
      indexToDelete++;
    }
    newDone.splice(indexToDelete,1);
    this.setState({Done:newDone});


}
inputHandler=(e)=>
{
  if(e.keyCode==13)
  {
   
    let newToDo=[...this.state.ToDo];
    newToDo.push(e.target.value);
    this.setState
    (
      {ToDo:newToDo}
    );
     
  }
 
}
  render() 
  {
    <Content textarr={this.state.Text[0]} imgadd={this.state.Images[0]} para={this.state.Desc[0]} time={this.state.Time[0]} backg={this.state.backg} ></Content>

      let renderedToDo=
      (
        this.state.ToDo.map(
          (e)=>{
            return <ToDo func={this.clickOnToDo} text={e}></ToDo>;
          }
        )
      );
      let renderedDoing=
      (
        this.state.Doing.map(
          (e)=>{
            return <ToDo func={this.clickOnDoing} text={e}></ToDo>;
          }
        )
      );
      let renderedDone=
      (
        this.state.Done.map(
          (e)=>{
            return <ToDo func={this.clickOnDone} text={e}></ToDo>;
          }
        )
      );
      return (
        <div className="App">
          <Header></Header>
          <List type='ToDo' code={renderedToDo}></List>
         <List type="Doing" code={renderedDoing}></List>
         <List type="Done" code={renderedDone}></List>
         <input type="text" onKeyUp={this.inputHandler} className={classes.InputEl}></input>
        </div>
      );   
         
   }
     
     

   }
  
export default App;
