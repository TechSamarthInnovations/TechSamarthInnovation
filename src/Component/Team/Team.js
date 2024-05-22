// src/Component/Team/Team.js
import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <div className="team-container">
            <h1>Our Team</h1>
            <div className="team-members">
                <div className="team-member">
                <img src={require('../../Img/dinesh.jpeg')} alt="Dinesh Saste" />
                    <h3>Dinesh Saste</h3>
                    <p>Founder</p>
                </div>
                <div className="team-member">
                <img src={require('../../Img/akanksha.jpg')} alt="Akanksha Mhetre" />
                    <h3>Akanksha Mhetre</h3>
                    <p>Founder</p>
                </div>
                <div className="team-member">
                <img src={require('../../Img/shree.jpg')} alt="Shrikant Landge" />
                    <h3>Shrikant Landge</h3>
                    <p>Founder</p>
                </div>
            </div>
        </div>
    );
};

export default Team;
