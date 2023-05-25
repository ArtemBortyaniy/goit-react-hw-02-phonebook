import { nanoid } from "nanoid";
import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts : [],
    filter : '',
  }

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }));
  }

  addContact = ({name, number}) => {
    const id = nanoid();
    const { contacts } = this.state
    
    const existingContact = contacts.find(contact => contact.name === name);
      if (existingContact) {
        alert(`${name} is already in contacts`);
        return;
      }
    
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { name, number, id }
      ]
    }));
  }

  handleFilter = () => {
    const { contacts } = this.state;
    
    const filter = contacts.filter(({name}) => name.toLowerCase().includes(this.state.filter.toLowerCase()));
    
    return filter;
  }

  changeFilter = (e) => {
    this.setState({'filter' : e.currentTarget.value});
  }

  render () {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSabmit={this.addContact}></ContactForm>

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
        <ContactList contacts={this.handleFilter()} onDeleteContact={this.deleteContact}></ContactList>
      </div>
    );
  }
};

export { App };
