import React, { Component } from 'react';
import  Select  from 'react-select';
const requirementList = require('./requirements.js');

export default class ClubRequirements extends Component{
    render() {
        return(
                <Select className="blackText my-3" options={requirementList.requirements} name={this.props.name} onChange={(value) => this.props.onChangeInput(this.props.name, value.value)} defaultValue={this.props.defaultValue} />
        )
    }
}