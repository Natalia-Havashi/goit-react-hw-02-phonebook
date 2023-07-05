import { ContactList } from "./ContactList/ContactList";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

const { Component } = require("react")

class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
 }

 

  render() {
     return (
    <div>
      <h1>PhoneBook</h1>
    <Contacts />
    <h2>Contacts</h2>
    <Filter />
    <ContactList createContact={this.state.contacts}/>

    </div>
  );
  }
 
};


export default App