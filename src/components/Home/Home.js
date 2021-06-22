import React, { useEffect, useState } from 'react';
import './Home.css';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import League from '../League/League'
import img1 from '../../images/premiere.png'
import img2 from '../../images/englishfootball.png'
import img3 from '../../images/efl.png'
import img4 from '../../images/champions.png'
import img5 from '../../images/europa.png'
import img6 from '../../images/laliga.png'
import img7 from '../../images/emirates.png'
import img8 from '../../images/mls.png'
import img9 from '../../images/scottish.png'
import img10 from '../../images/sportsmania.png'

const Home = () => {
    const [leagues, setLeagues] = useState({})
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLeagues(data.countrys)
            })
    }, [])
    return (
        <div className="home-container">
            {/* <h3>Leagues detail: {leagues.length}</h3> */}
            <img className="image" src={img10} alt="" />
            <Row className="main-row">
                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Premiere League</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore      <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>English Football League</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore     <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Efl championship</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore     <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>champions league</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore     <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Europa League</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore     <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>La Liga</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore    <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img7} />
                        <Card.Body>
                            <Card.Title>Fa Cup</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore    <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img8} />
                        <Card.Body>
                            <Card.Title>Major League</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore    <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col">
                    <Card className="card">
                        <Card.Img className="img" variant="top" src={img9} />
                        <Card.Body>
                            <Card.Title>Scottish Championship</Card.Title>
                            <Card.Text>
                                Sports Type : Football
                            </Card.Text>
                            <Button className="button" variant="primary">   Explore    <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default Home;