import React from 'react';
import logo from '../assets/images/logo.svg';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home Components</h1>
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default Home;
