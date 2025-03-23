import logo from './logo.svg';
import './App.css';
import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <div className='container-fluid'>
        <h1 className="header">Cartes des joueurs FIFA</h1>
        <PlayersList />
    </div>
);

export default App;