import React, { useState, useEffect } from 'react';
// Import useEffect?
import axios from 'axios';
import './FamousSection.css';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    fetchPeople()
  }, []);

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    console.log('fetchPeople() || GET list from the server')
    axios.get('/people')
    .then((response) => {
      console.log('Response | ', response.data)
      setPeopleArray(response.data)
    }).catch((err) => {
      console.log('Cannot GET list from server')
    })
  }

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
          {famousPeopleArray?.map(person => (
            <li key={person.id}>
              {person.name} is famous for {person.role}
            </li>
          ))}
        </ul>
      </section>
    );
}

export default FamousSection;
