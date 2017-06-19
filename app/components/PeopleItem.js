import React, {Component} from 'react';
import {Button} from 'react-materialize';

export default class PeopleItem extends Component{
    state ={
        visible: false
    };

    clickCloseButton = (e)=> {
        e.preventDefault();
        this.setState({visible:true});
    }


    render(){
        let users = this.props.peopleList;
        let visible = this.state.visible;
            return (
                <div className={"item "+(visible ? 'none': '')} key={users.id}>
                    <div className="img-container"><img src={users.img}/></div>
                    <div>{users.user}</div>
                    <Button onClick={this.clickCloseButton} waves='light'>Delete</Button>
                </div>
            )
    }

}

