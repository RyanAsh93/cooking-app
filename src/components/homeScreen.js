import React from 'react';
import { Link } from 'react-router-dom'
import history from './history';

class homeScreen extends React.Component {
    render() {
        return (
            <div>
            <h1>FLAVR</h1>
            {/* <button onClick={() => history.push('/Login')}>Login</button> */}
            <Link to="./login.js">Login</Link>
            <h2>Dont have an account?</h2>
            <button>Sign Up</button>
            </div>
        )
    }
}

export default homeScreen;
