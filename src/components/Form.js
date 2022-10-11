import React, { useState } from 'react'
import Cricketers from './Cricketers';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import cricketer from './cricketer.jpg';
import cup from './cup.png'


export default function Form() {
  const [position, setposition] = useState('');
  const [player, setplayer] = useState('');
  const [rating, setrating] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = position, b = player, c = rating;
    Cricketers.push({ a, b, c });
    // console.log(Cricketers);
    history('/added');


  }

  return (
    <div>
      <h1>Football Team</h1>
      <form className='container'>
        <label>Jersy no.</label><br></br>
        <input type="number"   placeholder='Enter Jersy no.' onChange={(e) => setposition(e.target.value)} required></input><br></br>
        <label>Player</label><br></br>
        <input type="text"   placeholder='Enter Name' onChange={(e) => setplayer(e.target.value)} required></input><br></br>
        <label >Age</label><br></br>
        <input type="number" placeholder='Enter Age' onChange={(e) => setrating(e.target.value)} required></input><br></br>
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>

      {/* <img className='imagecup' src={cup}></img>
      <img className='image' src={cricketer}></img> */}

    </div>
  )
}
