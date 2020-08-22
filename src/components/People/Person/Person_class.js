import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor() {
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <WithClass classes={classes.Person}>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p
                    onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <input
                    type='text'
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </WithClass>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default Person;

