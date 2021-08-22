import React from 'react';
import { Input } from 'reactstrap';

class MessageForm extends React.Component{
    state ={
        message: ''
    };

    onChange = e => this.setState({message: e.target.value});

    onSend = e => this.setState({message:''});

    render () {
        return (
            <div id="send-message">
                <Input type="textarea" rows="1" onChange={this.onChange} value={this.state.message} placeholder="أكتب رسالة..." />
                <i className="fa fa-send text-muted px-3 send" onClick={this.onSend} />
            </div>
        );
    };

}

export default MessageForm;