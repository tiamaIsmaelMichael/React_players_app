import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => (
    <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <strong>Équipe :</strong> {team} <br />
                <strong>Nationalité :</strong> {nationality} <br />
                <strong>Numéro de maillot :</strong> {jerseyNumber} <br />
                <strong>Âge :</strong> {age}
            </Card.Text>
        </Card.Body>
    </Card>
);

// Définition des props par défaut
Player.defaultProps = {
    name: "Inconnu",
    team: "Équipe inconnue",
    nationality: "Nationalité inconnue",
    jerseyNumber: 0,
    age: 0,
    image: "https://via.placeholder.com/150"
};

Player.propTypes = {
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    jerseyNumber: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};

export default Player;
