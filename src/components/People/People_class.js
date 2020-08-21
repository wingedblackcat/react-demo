import React, { Component } from 'react';
// import Person from './Person/Person';
import Person from './Person/Person_class';

class People extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[People.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(nextProps, prevState) {
        console.log('[People.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(nextProps, prevState, snapshot) {
        console.log('[People.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[People.js] rendering...');
        return this.props.people.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            );
        });
    }

};



export default People;