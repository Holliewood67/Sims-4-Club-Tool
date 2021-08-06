import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import { Container } from 'react-bootstrap';

export default class Clubs extends Component {
    constructor(props) {
        super(props);
        this.state = { clubCollection: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/clubs')
            .then(res => {
                this.setState({ clubCollection: res.data });
            }).catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.clubCollection.map((data, i) => {
            return <DataTable obj={data} key={i} /> 
        })
    }

    render() {
        return(
            <div className="wrapper-clubs no-background">
                <Container className="m-auto p-auto">
                    {this.dataTable()}
                </Container>
                
            </div>
        )
    }
}