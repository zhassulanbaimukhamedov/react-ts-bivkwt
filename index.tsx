import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import React, { useState } from 'react';

function Example() {
  // const [name, setName] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [age, setAge] = useState(0);
  // function handleClick() {
  //   const frmdetails = {
  //     name: name,
  //     lastname: lastname,
  //     age: age,
  //   };
  //   console.log(frmdetails);
  // }
  const [firstname, setFirstName] = useState('Arman');
  const [email, setEmail] = useState('arman@gmail.com');
  const [myage, setMyAge] = useState(18);
  const [ban, setBan] = useState(false);

  return (
    <div>
      <div>
        <div>user: {firstname}</div>
        <div>email: {email}</div>
        <div>age: {myage}</div>
        <button onClick={() => setFirstName('Danik')}>ChangeName</button>
        <button onClick={() => setEmail('danik@gmail.com')}>ChangeName</button>
        <button onClick={() => setMyAge(19)}>ChangeName</button>
        <button onClick={() => setBan(!ban)}>Ban</button>
        {ban ? 'No Enter' : 'Come In'}
      </div>
      {/* <div>
        <h1>
          {name} {lastname} {age}
        </h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="firstname"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          name="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          name="age"
          onChange={(e) => setAge(+e.target.value)}
        />

        <button onClick={handleClick}>submit</button>
      </div> */}
    </div>
  );
}

render(<Example />, document.getElementById('root'));
