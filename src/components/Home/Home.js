import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';



const Home = () => {

        // const[teams, setTeams]=useState();
        

        // useEffect(() => {
        //     const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setTeams(data))
        // }, []) 
    return (

        <div className="main-container">
            {/* <h1>here are: {teams}</h1> */}
        <div className="container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../images/manchester.jpg" />
                <Card.Body>
                    <Card.Title>Menchester United</Card.Title>
                    <Card.Text>Sports Type: Football</Card.Text>
                    <Button variant="primary"> Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        
         
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Liverpool</Card.Title>
                    <Card.Text>Sports Type: Football</Card.Text>
                    <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Chelsea</Card.Title>
                    <Card.Text>Sports Type: Football</Card.Text>
                    <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
        </div>    
        
    );
};

export default Home;