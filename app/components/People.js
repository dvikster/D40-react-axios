import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'react-materialize';
import PeopleItem from './PeopleItem'

export default class People extends Component{
    state ={
        people: [],
    };

    componentDidMount(){
        axios.get('http://localhost:3000/people1.json')
            .then(result =>{
                this.setState({
                    people: result.data,
                });
            })
    }
    render(){
        const {people} = this.state;

        return(
            <div>
                <h1>People</h1>
                <div className="people-container">
                    {people.map(people =>{
                        return (
                             <PeopleItem  peopleList={people}/>
                        )
                     })
                    }
                </div>
            </div>
        );
    }

}
