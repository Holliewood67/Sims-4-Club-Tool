import React, { Component } from 'react';
import Select from 'react-select';

const activityList = require('./activities');

export default class ClubActivities extends Component {
    render() {
        return (
            <div>
                <Select className="blackText my-3" options={activityList.activities} name={this.props.name} onChange={(value) => this.props.onChangeInput(this.props.name, value.value)} defaultValue={this.props.defaultValue} />
            </div>
        )
    }
}