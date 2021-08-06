import React, { Component } from 'react';
import { Card, Container, Row, Col, Accordion, Button } from 'react-bootstrap';

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
                                            {this.props.obj.clubDiscouragedActivityOne?<Card.Text>{this.props.obj.clubEncouragedActivityOne}</Card.Text>: null}
                                            {this.props.obj.clubDiscouragedActivityTwo?<Card.Text>{this.props.obj.clubEncouragedActivityTwo}</Card.Text>: null}
                                            {this.props.obj.clubDiscouragedActivityThree?<Card.Text>{this.props.obj.clubEncouragedActivityThree}</Card.Text>: null}
                                            {this.props.obj.clubDiscouragedActivityFour?<Card.Text>{this.props.obj.clubEncouragedActivityFour}</Card.Text>:null}
                                            {this.props.obj.clubDiscouragedActivityFive?<Card.Text>{this.props.obj.clubEncouragedActivityFive}</Card.Text>: null}
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
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        {/* <Accordion>
                            <Accordion.Toggle as={Button} className="widen" eventKey="0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                            </svg>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <div>
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
                                    {this.props.obj.clubDiscouragedActivityOne?<Card.Text>{this.props.obj.clubEncouragedActivityOne}</Card.Text>: null}
                                    {this.props.obj.clubDiscouragedActivityTwo?<Card.Text>{this.props.obj.clubEncouragedActivityTwo}</Card.Text>: null}
                                    {this.props.obj.clubDiscouragedActivityThree?<Card.Text>{this.props.obj.clubEncouragedActivityThree}</Card.Text>: null}
                                    {this.props.obj.clubDiscouragedActivityFour?<Card.Text>{this.props.obj.clubEncouragedActivityFour}</Card.Text>:null}
                                    {this.props.obj.clubDiscouragedActivityFive?<Card.Text>{this.props.obj.clubEncouragedActivityFive}</Card.Text>: null}
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
                            </div>
                            </Accordion.Collapse>
                        </Accordion> */}
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