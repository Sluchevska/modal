import React from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, TitleH1, TitleH2 } from './App.styled';
import Modal from '../Modal/Modal';
import Clock from '../Clock/Clock';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as BookIcon } from '../../Icons/phbook.svg';
import { Button } from '../ContactForm/ContactForm.styled';

import './App.css';


const { v4: uuidv4 } = require('uuid');

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
   }
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if(parsedContacts){
    this.setState({contacts:parsedContacts})}

  }

 

  addContact = ({ name, number }) => {
    const doubleName = this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
    )
    const doublePhoneNumber = this.state.contacts.find(contact => contact.number === number)
    if (doubleName) {
      alert(`${name} is already in contacts`);
      return;
    } else if (doublePhoneNumber) {
      alert(`This number ${number} is already in contacts`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
     
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

   toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
     this.setState({
      filter: '',
      
    });
   }
   

  render() {
    const { filter, showModal } = this.state;

    return (
      <Container>
          <IconButton onClick={this.toggleModal} aria-label="Contacts"> <BookIcon width="30px" height="30px" ></BookIcon></IconButton> 
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onSubmit={this.addContact} />
        <Button type="button" onClick={this.toggleModal}>Open Contact List</Button>
        {showModal &&
          <Modal onClose={this.toggleModal}>
        <TitleH2>Contacts</TitleH2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onRemove={this.deleteContact}
          />
          <Button type="button" onClick={this.toggleModal}>Close</Button>
          </Modal>}
      
        <Clock/>
       
       
      </Container>
    );
  }
}

export default App;
