import React, { Component } from 'react';
import classes from './App.module.css';
// import People from '../components/People/People';
import People from '../components/People/People_class';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  /* SPECIAL lifecycle method - creation */
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  /* More modern way to create state in React */
  state = {
    people: [
      { id: 'lnaiia', name: 'Max', age: 28 },
      { id: 'ljk2v3', name: 'Mike', age: 25 },
      { id: 'jlani3', name: 'Zohar', age: 24 }
    ],
    otherState: 'some other value',
    showPeople: false,
    showCockpit: true,
    authenticated: false,
  };

  /* lifecycle method - creation / update */
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  /* lifecycle method - creation http requests */
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  /* lifecycle methid, used for performance */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  /* lifecycle method - update - creation http requests */
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.people[personIndex],
    }
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({ people: people });
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  /* lifecycle method - creation */
  render() {
    console.log('[App.js] render');
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
          {
            this.state.showCockpit ? (
              < Cockpit
                title={this.props.appTitle}
                showPeople={this.state.showPeople}
                peopleLength={this.state.people.length}
                clicked={this.togglePeopleHandler} />
            ) : null
          }
          {people}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
