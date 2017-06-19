import React, {Component} from 'react';
import {Row, Col, Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router';

export default class MainContainer extends Component{
        render(){
        return(
        <div>
            <Navbar className="container">
                <Row >
                    <Col s={12} className="main-menu">
                        <Link activeClassName="active" to="/">Home</Link>
                        <Link activeClassName="active" to="/people">People</Link>
                    </Col>
                </Row>
            </Navbar>
             <Row className="main-content container">
                    <Col s={12}>
                        {this.props.children}
                    </Col>
             </Row>
        </div>
        )
    }
}