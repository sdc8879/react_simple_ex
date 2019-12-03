import React, { Component } from 'react'

export default class Listcontact extends Component {

    constructor(props) {
        super(props)
        console.log('Listcontact-----------', this.props)
    }
    componentDidMount() {
        console.log('componentDidMount')
    }


    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }


    handleClick(i) {
        console.log('i---', i);
        this.props.removeContact(i)
    }
    render() {

        console.log('List Contact', this.props)

        return (
            <div>
                <ul>
                    {this.props.contactList.map((b, i) =>
                        <li key={i}>{b.firstname}{" "}{b.lastname}
                            {
                                " "
                            }
                            <button onClick={() => this.handleClick(i)} >Click Me</button>
                        </li>
                    )
                    }
                </ul>
            </div>
        )
    }

}

