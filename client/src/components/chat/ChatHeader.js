import React from 'react';
import Auth from 'Auth';
import { Avatar } from 'components';
import { Row, DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown } from 'reactstrap';
import moment from 'moment';

const ChatHeader = props => {

    const logout = () => {
        console.log(props);
        Auth.logout();
        props.history.push('/');
    };

    const status = () => {
        if (props.typing) return 'يكتب الآن...';
        if (props.contact.status === true) return 'متصل الآن';
        if (props.contact.status) return moment(props.contact.status).fromNow();
    }

    return (
        <Row className="heading m-0">
            <div onClick={props.toggle}>
                <Avatar src={props.contact.avatar} />
            </div>
            <div className="text-right">
                <div>{props.contact ? props.contact.name : ''}</div>
                <small>{status()}</small>
            </div>
            <Nav className="mr-auto" navbar>
                <UncontrolledDropdown>
                    <DropdownToggle tag="a" className="nav-link">
                        <i className="fa fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={logout}>تسجيل الخروج</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Row>
    );
}

export default ChatHeader;