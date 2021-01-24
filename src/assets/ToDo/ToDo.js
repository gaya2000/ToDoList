import React from 'react'
import classes from './ToDo.css';
const toDo=(props)=>
{
    let e=props.text;
    return(
        <div onClick={props.func.bind(this,e)}  className={classes.ToDo}>{props.text}</div>
    );
}
export default toDo;