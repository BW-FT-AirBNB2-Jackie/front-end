import React, { useState, useEffect } from 'react'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames';
import Signup from './Signup'
import Login from './Login'

const Auth = props => {


    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    
useEffect(() => {
    if (localStorage.getItem('token')) {
    
    }
}, [props])

return (
    <Container>
        <div className='spacer'></div>
        <Nav tabs>
            <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                >
                    Log In
                </NavLink>
            </NavItem>
            <NavItem className='half center'>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                >
                    Sign Up
                </NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <Jumbotron >
                            <Login />
                        </Jumbotron>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <Jumbotron>
                            <Signup />
                        </Jumbotron>
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
    </Container>
)
}


export default Auth