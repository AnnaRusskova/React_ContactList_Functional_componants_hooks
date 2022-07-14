import './ContactCard.css';
/**
 * 
 * @param contact - obj with data to display card 
 * @param onContactEdit - call back which provides id of edited contact
 * @param onContactDelete - call back which provides id of deleted contact
 * @returns JSX with contact card/cards
 */

export function ContactCard ({contact, onContactEdit, onContactDelete}) {
    return (
        <div className="contactCard">

            <div className="contactCard-info">
                <div >
                    {contact.img 
                ? <img className="contactCard-photo-img" src={contact.img} alt="photo_contact" /> 
                : <div className="contactCard-photo">{contact.firstName.charAt(0)}</div>}</div>

                <div className="contactCard-data">
                    <div className="contactCard-name">{contact.firstName} {contact.lastName}</div>
                    <div className="contactCard-phone">{contact.phone}</div>
                </div>
            </div>

            <div className="contactCard-signs">
                <button 
                    className="contactCard-edit"
                    onClick={()=>onContactEdit(contact.id)}
                    >✍</button>
                <button 
                    className="contactCard-delete"
                    onClick={()=>onContactDelete(contact.id)}
                    >🗑</button>
            </div>
        </div>
    );
}