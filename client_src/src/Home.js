import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
    <div>

        <h1> This is home page</h1>

        <button><Link to ='/Register' >Register</Link></button>
        <p/>
        <button><Link to ='/Sign In' >Sign In</Link></button>

    </div>
)

export default Home;