import React, { Component } from 'react'
import Listcontact from './Listcontact';
export default class Addcontact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            contacts: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleLname = this.handleLname.bind(this);
    }

    handleInputChange(event) {
        console.log('event--', event.target.value)
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => event => {
        this.state.contacts.push({ "firstname": this.state.firstname, "lastname": this.state.lastname })
        this.setState({
            contacts: this.state.contacts
        });
        event.preventDefault();
    }

    removeContactparentFunction = (i) => {
        console.log('childData----', i);
        this.state.contacts.splice(i, 1);
        this.setState({
            contacts: this.state.contacts
        });
    }

    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit()}>
                    <div>
                        <label>First Name</label>
                        <input type="text"
                            name='firstname'
                            value={this.state.firstname}
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                    <div>
                        <label>Submit</label>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <br></br>
                <Listcontact removeContact={this.removeContactparentFunction} contactList={this.state.contacts}></Listcontact>
            </div>
        )
    }
}
