import './ContactList.css'
import {ContactCard} from '../ContactCard/ContactCard'

export function ContactsList ({contactList, setContactList, onContactEdit, onContactDelete, showPopup, setShowPopup,setSelectedContact}) {
    onContactEdit = (id) =>{
        let currentContact = contactList.find(contact => contact.id === id)
        setSelectedContact(currentContact)
        setShowPopup(!showPopup);
    }

    onContactDelete = (id) =>{
        let newList = [...contactList].filter(contact => contact.id !== id);
        setContactList(newList)
    }
    
    return (
        <div className="contactsList-wrapper">
            <ul className="contactsList">
                {/* here happens mapping of li */}
                {contactList.map(contact => 
                    (<li key={contact.id}>
                        < ContactCard 
                            key={contact.id} 
                            contact={contact} 
                            onContactEdit={onContactEdit}
                            onContactDelete={onContactDelete}
                    /></li>))
                }
            </ul>
        </div> 
    );
}