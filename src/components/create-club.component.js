// ** create-club.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';
import ClubRequirements from './club-requirements.component';
import ClubActivities from './club-activities.component';
import { Container, Col, Row, Form, Button, InputGroup } from 'react-bootstrap';

const requirementList = require('./requirements.js');
const activityList = require('./activities.js');

export default class CreateClub extends Component {

    constructor(props) {
        super(props)

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addRequirement = this.addRequirement.bind(this);
        this.removeRequirement = this.removeRequirement.bind(this);
        this.updateRequirements = this.updateRequirements.bind(this);
        this.addEncouragedActivity = this.addEncouragedActivity.bind(this);
        this.removeEncouragedActivity = this.removeEncouragedActivity.bind(this);
        this.updateEncouragedActivity = this.updateEncouragedActivity.bind(this);
        this.addDiscouragedActivity = this.addDiscouragedActivity.bind(this);
        this.removeDiscouragedActivity = this.removeDiscouragedActivity.bind(this);
        this.updateDiscouragedActivities = this.updateDiscouragedActivities.bind(this);
        this.getDefaultRequirementValue = this.getDefaultRequirementValue.bind(this);
        this.getDefaultActivityValue = this.getDefaultActivityValue.bind(this);

        this.state = {
            clubName: '',
            clubDescription: '',
            submitButtonDisabled: true,
            numOfRequirements: 0,
            numOfEncouragedActivities: 0,
            numOfDiscouragedActivities: 0,
            clubRequirementOne: '',
            clubRequirementTwo: '',
            clubRequirementThree: '',
            clubRequirementFour: '',
            clubRequirementFive: '',
            clubRequirementOneDefault: '',
            clubRequirementTwoDefault: '',
            clubRequirementThreeDefault: '',
            clubRequirementFourDefault: '',
            clubRequirementFiveDefault: '',
            clubEncouragedActivityOne: '',
            clubEncouragedActivityTwo: '',
            clubEncouragedActivityThree: '',
            clubEncouragedActivityFour: '',
            clubEncouragedActivityFive: '',
            clubEncouragedActivityOneDefault: '',
            clubEncouragedActivityTwoDefault: '',
            clubEncouragedActivityThreeDefault: '',
            clubEncouragedActivityFourDefault: '',
            clubEncouragedActivityFiveDefault: '',
            clubDiscouragedActivityOne: '',
            clubDiscouragedActivityTwo: '',
            clubDiscouragedActivityThree: '',
            clubDiscouragedActivityFour: '',
            clubDiscouragedActivityFive: '',
            clubDiscouragedActivityOneDefault: '',
            clubDiscouragedActivityTwoDefault: '',
            clubDiscouragedActivityThreeDefault: '',
            clubDiscouragedActivityFourDefault: '',
            clubDiscouragedActivityFiveDefault: '',
            showRequirementOne: false,
            showRequirementTwo: false,
            showRequirementThree: false,
            showRequirementFour: false,
            showRequirementFive: false,
            showEncouragedActivityOne: false,
            showEncouragedActivityTwo: false,
            showEncouragedActivityThree: false,
            showEncouragedActivityFour: false,
            showEncouragedActivityFive: false,
            showDiscouragedActivityOne: false,
            showDiscouragedActivityTwo: false,
            showDiscouragedActivityThree: false,
            showDiscouragedActivityFour: false,
            showDiscouragedActivityFive: false,
        }
    }

    onChangeTextInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        if (this.state.clubName === '' || this.state.clubDescription === '') {
            this.setState({
                submitButtonDisabled: true
            });
        } else {
            this.setState({
                submitButtonDisabled: false
            });
        }

    }

    onChangeInput = (stateName, valueName) => {
        this.setState({
            [stateName]: valueName
        })
        console.log(`${stateName}: ${valueName}`)

    }

    async addRequirement () {
        let requirementIndex = await this.state.numOfRequirements;

        if (requirementIndex <= 4) {
            this.setState({
                numOfRequirements: this.state.numOfRequirements + 1
            })
        }
        this.updateRequirements();
    }

    async removeRequirement () {
        let requirementIndex = await this.state.numOfRequirements;
        if (requirementIndex >= 1){
            this.setState({
                numOfRequirements: this.state.numOfRequirements - 1
            });
        }
        this.updateRequirements();
    }

    async addEncouragedActivity () {
        let encouragedActivityIndex = await this.state.numOfEncouragedActivities;
        if (encouragedActivityIndex <= 4) {
            this.setState({
                numOfEncouragedActivities: encouragedActivityIndex + 1
            })
        }
        this.updateEncouragedActivity();
        
    }

    async removeEncouragedActivity () {
        let encouragedActivityIndex = await this.state.numOfEncouragedActivities;
        if (encouragedActivityIndex >= 1) {
            this.setState({
                numOfEncouragedActivities: encouragedActivityIndex - 1
            })
        }
        this.updateEncouragedActivity();
    }

    async addDiscouragedActivity () {
        let discouragedActivityIndex = await this.state.numOfDiscouragedActivities;
        if (discouragedActivityIndex <= 4) {
            this.setState({
                numOfDiscouragedActivities: discouragedActivityIndex + 1
            })
        }
        this.updateDiscouragedActivities();
    }

    async removeDiscouragedActivity () {
        let discouragedActivityIndex = await this.state.numOfDiscouragedActivities;
        if (discouragedActivityIndex >= 1) {
            this.setState({
                numOfDiscouragedActivities: discouragedActivityIndex - 1
            })
        }
        this.updateDiscouragedActivities();
    }

    async updateRequirements () {
        let requirementIndex = await this.state.numOfRequirements;
        let defaultValue = this.getDefaultRequirementValue();

        switch(requirementIndex){
            case 0:
                this.setState({
                    showRequirementOne: false,
                });
                break;
            case 1:
                this.setState({
                    clubRequirementOneDefault: defaultValue,
                    clubRequirementOne: defaultValue.value,
                    showRequirementOne: true,
                    showRequirementTwo: false,
                });
                break;
            case 2:
                this.setState({
                    clubRequirementTwoDefault: defaultValue,
                    clubRequirementTwo: defaultValue.value,
                    showRequirementTwo: true,
                    showRequirementThree: false,
                });
                break;
            case 3:
                this.setState({
                    clubRequirementThreeDefault: defaultValue,
                    clubRequirementThree: defaultValue.value,
                    showRequirementThree: true,
                    showRequirementFour: false,
                });
                break;
            case 4:
                this.setState({
                    clubRequirementFourDefault: defaultValue,
                    clubRequirementFour: defaultValue.value,
                    showRequirementFour: true,
                    showRequirementFive: false,
                });
                break;
            case 5:
                this.setState({
                    clubRequirementFiveDefault: defaultValue,
                    clubRequirementFive: defaultValue.value,
                    showRequirementFive: true,
                });
                break;
            default:
                this.setState({
                    showRequirementOne: false,
                    showRequirementTwo: false,
                    showRequirementThree: false,
                    showRequirementFour: false,
                    showRequirementFive: false,
                });
        }
    }

    async updateEncouragedActivity () {
        let encouragedActivityIndex = await this.state.numOfEncouragedActivities;
        let defaultValue = this.getDefaultActivityValue();

        switch(encouragedActivityIndex){
            case 0:
                this.setState({
                    showEncouragedActivityOne: false,
                });
                break;
            case 1:
                this.setState({
                    clubEncouragedActivityOneDefault: defaultValue,
                    clubEncouragedActivityOne: defaultValue.value,
                    showEncouragedActivityOne: true,
                    showEncouragedActivityTwo: false,
                });
                console.log(`Activity one changed to ${this.state.clubEncouragedActivityOneDefault}`)
                break;
            case 2:
                this.setState({
                    clubEncouragedActivityTwoDefault: defaultValue,
                    clubEncouragedActivityTwo: defaultValue.value,
                    showEncouragedActivityTwo: true,
                    showEncouragedActivityThree: false,
                });
                break;
            case 3:
                this.setState({
                    clubEncouragedActivityThreeDefault: defaultValue,
                    clubEncouragedActivityThree: defaultValue.value,
                    showEncouragedActivityThree: true,
                    showEncouragedActivityFour: false,
                });
                break;
            case 4:
                this.setState({
                    clubEncouragedActivityFourDefault: defaultValue,
                    clubEncouragedActivityFour: defaultValue.value,
                    showEncouragedActivityFour: true,
                    showEncouragedActivityFive: false,
                });
                break;
            case 5:
                this.setState({
                    clubEncouragedActivityFiveDefault: defaultValue,
                    clubEncouragedActivityFive: defaultValue.value,
                    showEncouragedActivityFive: true,
                });
                break;
            default:
                this.setState({
                    showEncouragedActivityOne: false,
                    showEncouragedActivityTwo: false,
                    showEncouragedActivityThree: false,
                    showEncouragedActivityFour: false,
                    showEncouragedActivityFive: false
                });
        }
    }

    async updateDiscouragedActivities () {
        let discouragedActivityIndex = await this.state.numOfDiscouragedActivities;
        let defaultValue = this.getDefaultActivityValue();

        switch(discouragedActivityIndex){
            case 0:
                this.setState({
                    showDiscouragedActivityOne: false
                });
                break;
            case 1:
                this.setState({
                    clubDiscouragedActivityOneDefault: defaultValue,
                    clubDiscouragedActivityOne: defaultValue.value,
                    showDiscouragedActivityOne: true,
                    showDiscouragedActivityTwo: false
                });
                break;
            case 2:
                this.setState({
                    clubDiscouragedActivityTwoDefault: defaultValue,
                    clubDiscouragedActivityTwo: defaultValue.value,
                    showDiscouragedActivityTwo: true,
                    showDiscouragedActivityThree: false
                });
                break;
            case 3:
                this.setState({
                    clubDiscouragedActivityThreeDefault: defaultValue,
                    clubDiscouragedActivityThree: defaultValue.value,
                    showDiscouragedActivityThree: true,
                    showDiscouragedActivityFour: false
                });
                break;
            case 4:
                this.setState({
                    clubDiscouragedActivityFourDefault: defaultValue,
                    clubDiscouragedActivityFour: defaultValue.value,
                    showDiscouragedActivityFour: true,
                    showDiscouragedActivityFive: false
                });
                break;
            case 5:
                this.setState({
                    clubDiscouragedActivityFiveDefault: defaultValue,
                    clubDiscouragedActivityFive: defaultValue.value,
                    showDiscouragedActivityFive: true
                });
                break;
            default:
                this.setState({
                    showDiscouragedActivityOne: false,
                    showDiscouragedActivityTwo: false,
                    showDiscouragedActivityThree: false,
                    showDiscouragedActivityFour: false,
                    showDiscouragedActivityFive: false
                });
        }
    }

    getDefaultRequirementValue = () => {
        let randomRequirementGroupIndex = Math.floor(Math.random() * requirementList.requirements.length);
        let randomRequirementIndex = Math.floor(Math.random() * requirementList.requirements[randomRequirementGroupIndex].options.length);
        let defaultValue = requirementList.requirements[randomRequirementGroupIndex].options[randomRequirementIndex];
        return defaultValue;
    }

    getDefaultActivityValue = () => {
        let randomActivityGroupIndex = Math.floor(Math.random() * activityList.activities.length);
        let randomActivityIndex = Math.floor(Math.random() * activityList.activities[randomActivityGroupIndex].options.length);
        let defaultValue = activityList.activities[randomActivityGroupIndex].options[randomActivityIndex];        
        return defaultValue;
    }

    onSubmit = (e) => {
        e.preventDefault()

        const ClubObject = {
            clubName: this.state.clubName,
            clubDescription: this.state.clubDescription,
            clubRequirementOne: this.state.clubRequirementOne,
            clubRequirementTwo: this.state.clubRequirementTwo,
            clubRequirementThree: this.state.clubRequirementThree,
            clubRequirementFour: this.state.clubRequirementFour,
            clubRequirementFive: this.state.clubRequirementFive,
            clubEncouragedActivityOne: this.state.clubEncouragedActivityOne,
            clubEncouragedActivityTwo: this.state.clubEncouragedActivityTwo,
            clubEncouragedActivityThree: this.state.clubEncouragedActivityThree,
            clubEncouragedActivityFour: this.state.clubEncouragedActivityFour,
            clubEncouragedActivityFive: this.state.clubEncouragedActivityFive,
            clubDiscouragedActivityOne: this.state.clubDiscouragedActivityOne,
            clubDiscouragedActivityTwo: this.state.clubDiscouragedActivityTwo,
            clubDiscouragedActivityThree: this.state.clubDiscouragedActivityThree,
            clubDiscouragedActivityFour: this.state.clubDiscouragedActivityFour,
            clubDiscouragedActivityFive: this.state.clubDiscouragedActivityFive,
        };

        console.log(ClubObject);

        axios.post('http://192.168.0.141:4000/Clubs/create', ClubObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ 
            clubName: '', 
            clubDescription: ''})
    }

    render() {
        return (
            <div className="wrapper">
                <Container>
                    <Form className="form-area m-auto p-3 text-white"  onSubmit={this.onSubmit}>
                        {/* <Form.Group className="form-group">
                            <Form.Label>Add Club Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter club name" name="clubName" value={this.state.clubName} onChange={this.onChangeTextInput} className="form-control" />
                        </Form.Group> */}
                        <Row>
                            <InputGroup className="my-1" hasValidation>
                                <Col><InputGroup.Text>Name</InputGroup.Text></Col>
                                <Col><Form.Control required  type="text" placeholder="Enter club name" name="clubName" value={this.state.clubName} onChange={this.onChangeTextInput} className="form-control" /></Col>
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup className="my-1" hasValidation>
                            <Col><InputGroup.Text>Description</InputGroup.Text></Col>
                            <Col><Form.Control required type="text" placeholder="Enter club description" name="clubDescription" value={this.state.clubDescription} onChange={this.onChangeTextInput} className="form-control" /></Col>
                            </InputGroup>
                        </Row>
                        <h2>Requirements</h2>
                        <Form.Group>
                            { 
                            this.state.showRequirementOne?<ClubRequirements name="clubRequirementOne" defaultValue={this.state.clubRequirementOneDefault} value={this.state.clubRequirementOne} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            { 
                            this.state.showRequirementTwo?<ClubRequirements name="clubRequirementTwo" defaultValue={this.state.clubRequirementTwoDefault} value={this.state.clubRequirementTwo} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            { 
                            this.state.showRequirementThree?<ClubRequirements name="clubRequirementThree" defaultValue={this.state.clubRequirementThreeDefault} value={this.state.clubRequirementThree} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            { 
                            this.state.showRequirementFour?<ClubRequirements name="clubRequirementFour" defaultValue={this.state.clubRequirementFourDefault} value={this.state.clubRequirementFour} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            { 
                            this.state.showRequirementFive?<ClubRequirements name="clubRequirementFive" defaultValue={this.state.clubRequirementFiveDefault} value={this.state.clubRequirementFive} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            <Button className="py-1 px-4 mx-3" size="lg" onClick={this.addRequirement}>+</Button>
                            <Button className="py-1 px-4 mx-3" size="lg" variant="danger" onClick={this.removeRequirement}>-</Button>
                        </Form.Group>
                        <h2>Encouraged Activities</h2>
                        <Form.Group>
                            {
                            this.state.showEncouragedActivityOne?<ClubActivities name="clubEncouragedActivityOne" defaultValue={this.state.clubEncouragedActivityOneDefault} value={this.state.clubEncouragedActivityOne}  onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            {
                            this.state.showEncouragedActivityTwo?<ClubActivities name="clubEncouragedActivityTwo" defaultValue={this.state.clubEncouragedActivityTwoDefault} value={this.state.clubEncouragedActivityTwo} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            {
                            this.state.showEncouragedActivityThree?<ClubActivities name="clubEncouragedActivityThree" defaultValue={this.state.clubEncouragedActivityThreeDefault} value={this.state.clubEncouragedActivityThreet} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            {
                            this.state.showEncouragedActivityFour?<ClubActivities name="clubEncouragedActivityFour" defaultValue={this.state.clubEncouragedActivityFourDefault} value={this.state.clubEncouragedActivityFour} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            {
                            this.state.showEncouragedActivityFive?<ClubActivities name="clubEncouragedActivityFive" defaultValue={this.state.clubEncouragedActivityFiveDefault} value={this.state.clubEncouragedActivityFive} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            <Button className="py-1 px-4 mx-3" size="lg" onClick={this.addEncouragedActivity}>+</Button>
                            <Button className="py-1 px-4 mx-3" size="lg" variant="danger" onClick={this.removeEncouragedActivity}>-</Button>
                        </Form.Group>
                        <h2>Discouraged Activities</h2>
                        <Form.Group>
                            {
                            this.state.showDiscouragedActivityOne?<ClubActivities name="clubDiscouragedActivityOne" defaultValue={this.state.clubDiscouragedActivityOneDefault} value={this.state.clubDiscouragedActivityOne} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            {
                            this.state.showDiscouragedActivityTwo?<ClubActivities name="clubDiscouragedActivityTwo" defaultValue={this.state.clubDiscouragedActivityTwoDefault} value={this.state.clubDiscouragedActivityTwo} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            {
                            this.state.showDiscouragedActivityThree?<ClubActivities name="clubDiscouragedActivityThree" defaultValue={this.state.clubDiscouragedActivityThreeDefault} value={this.state.clubDiscouragedActivityThree} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            {
                            this.state.showDiscouragedActivityFour?<ClubActivities name="clubDiscouragedActivityFour" defaultValue={this.state.clubDiscouragedActivityFourDefault} value={this.state.clubDiscouragedActivityFour} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            {
                            this.state.showDiscouragedActivityFive?<ClubActivities name="clubDiscouragedActivityFive" defaultValue={this.state.clubDiscouragedActivityFiveDefault} value={this.state.clubDiscouragedActivityFive} onChangeInput={this.onChangeInput} className="form-control"/>: null
                            }
                            <Button className="py-1 px-4 mx-3" size="lg" onClick={this.addDiscouragedActivity}>+</Button>
                            <Button className="py-1 px-4 mx-3" size="lg" variant="danger" onClick={this.removeDiscouragedActivity}>-</Button>
                        </Form.Group>
                        <Form.Group className="form-group d-grid gap-2 my-4">
                                <Button disabled={this.state.submitButtonDisabled} size="lg" value="Create Club" className="btn btn-success btn-block" onClick={this.onSubmit}>Create Club</Button>
                        </Form.Group>
                    </Form>    
                </Container>
            </div>
        )
    }
}