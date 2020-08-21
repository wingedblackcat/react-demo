import React from 'react';
// import Person from './Person/Person';
import Person from './Person/Person_class';

const People = (props) => {
    console.log('[People.js] rendering...');
    return props.people.map((person, index) => {   
        return (
         <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)} />
        );
    });
};



export default People;