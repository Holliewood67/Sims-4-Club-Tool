import React, { Component } from 'react';
import { Card, Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import axios from 'axios';


class DataTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse = () => {
        let isOpen = !this.state.open;
        this.setState={
            open: isOpen
        };
    }

    render() {
        return (
            <div>
            <Card className="m-3 p-1 no-background">
                <Container className="aligned-to-center" fluid>
                    <Row>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="aligned-to-center">
                                    <Card.Title>{this.props.obj.clubName}</Card.Title>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div>
                                <Card.Text>{this.props.obj.clubDescription}</Card.Text>
                                    {this.props.obj.clubRequirementOne?<Col>
                                    <Card.Title>Club Requirements</Card.Title>
                                    <Container>
                                        <Row className="my-2 p-2">
                                            {
                                            this.props.obj.clubRequirementOne?<Card.Text>{this.props.obj.clubRequirementOne}</Card.Text>: null
                                            }
                                            {
                                                
                                            this.props.obj.clubRequirementTwo?<Card.Text>{this.props.obj.clubRequirementTwo}</Card.Text>: null
                                            }
                                            {
                                            this.props.obj.clubRequirementThree?<Card.Text>{this.props.obj.clubRequirementThree}</Card.Text>: null
                                            }
                                            {
                                            this.props.obj.clubRequirementFour?<Card.Text>{this.props.obj.clubRequirementFour}</Card.Text>: null
                                            }
                                            {
                                            this.props.obj.clubRequirementFive?<Card.Text>{this.props.obj.clubRequirementFive}</Card.Text>: null
                                            }
                                        </Row>
                                    </Container>
                                </Col>: null}
                                {this.props.obj.clubEncouragedActivityOne?<Col>
                                    <Card.Title>Encouraged Activities</Card.Title>
                                    <Container>
                                        <Row>
                                            {this.props.obj.clubEncouragedActivityOne?<Card.Text>{this.props.obj.clubEncouragedActivityOne}</Card.Text>: null}
                                            {this.props.obj.clubEncouragedActivityTwo?<Card.Text>{this.props.obj.clubEncouragedActivityTwo}</Card.Text>: null}
                                            {this.props.obj.clubEncouragedActivityThree?<Card.Text>{this.props.obj.clubEncouragedActivityThree}</Card.Text>: null}
                                            {this.props.obj.clubEncouragedActivityFour?<Card.Text>{this.props.obj.clubEncouragedActivityFour}</Card.Text>:null}
                                            {this.props.obj.clubEncouragedActivityFive?<Card.Text>{this.props.obj.clubEncouragedActivityFive}</Card.Text>: null}
                                        </Row>
                                    </Container>
                                </Col>: null
                                }
                                {this.props.obj.clubDiscouragedActivityOne?<Col>
                                    <Card.Title>Discouraged Activities</Card.Title>
                                    <Container>
                                        <Row>
                                            <Card.Text>{this.props.obj.clubDiscouragedActivityOne}</Card.Text>
                                            <Card.Text>{this.props.obj.clubDiscouragedActivityTwo}</Card.Text>
                                            <Card.Text>{this.props.obj.clubDiscouragedActivityThree}</Card.Text>
                                            <Card.Text>{this.props.obj.clubDiscouragedActivityFour}</Card.Text>
                                            <Card.Text>{this.props.obj.clubDiscouragedActivityFive}</Card.Text>
                                        </Row>
                                    </Container>
                                </Col>: null}
                                <Button onClick={() => {axios.get(`http://localhost:4000/Clubs/removeClub/${this.props.obj._id}`).then(window.location.reload())}}>Remove Club</Button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </Card>
            </div>
        );
    }
}

export default DataTable;