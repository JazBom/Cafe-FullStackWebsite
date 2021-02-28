import React, { Component } from "react";

class Contact extends Component{
    constructor() {
        super();
        this.state = {
            contactFormMessages: [ { name: "", email: "", message: ""},
                        ],
        };
    };

    handleContactFormSubmit = (name, email, message) => {
        console.log("formvalues:", name, email, message);
        const newMessage= {name: name, email: email, message: message};
        const newContactFormMessages = [...this.state.contactFormMessages];
        newMessage.push(newContactFormMessages);
        this.setState({contactFormMessages: newContactFormMessages});
    };
    
render(){
    return(
        <div className="contact">
        <h3>Contact details</h3>
        <p>Phone Mark directly on 03 5975 0165, or send a message with this form:</p>
            <div className="Contact-form">
            <div className="Details">
            <button className="Button form-element" onSubmit={this.handleContactFormSubmit}>Contact</button>
            <input className="Contact form-element" placeholder="Your name">{this.state.name}</input>
            <input className="Contact form-element" placeholder=" and email">{this.state.email}</input>
            </div>
            <div className="Messages">
            <input className="Message-input" placeholder="... message Lilo Cafe!">{this.state.message}</input>
            </div>
            </div>
        </div> 
    )
}
};

export default Contact;

