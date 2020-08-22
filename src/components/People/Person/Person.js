import React from 'react';
import classes from './Person.module.css';
import WithClass from '../../../hoc/WithClass';

const Person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <WithClass className={classes.Person}>
            < p onClick={props.click} > I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </WithClass >
    );
};

export default Person;

