import React from 'react'
import classes from './List.css'
import ToDo from '../assets/ToDo/ToDo'
const list=(props)=>
{
    let style;
    let listHead=props.type;
    if(props.type=='ToDo')
    {
        style=classes.ToDo;
        
    }
    else if(props.type=='Doing')
    {
        style=classes.Doing;
    }
    else if(props.type=='Done')
    {
        style=classes.Done;
    }

    return(
        <div className={style}>
            <p className={classes.ListHeader}>{props.type}</p>
            {props.code}
        </div>
        
          
            
    );
}
export default list;