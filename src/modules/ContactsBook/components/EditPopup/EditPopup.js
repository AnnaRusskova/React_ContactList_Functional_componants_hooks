import {useState} from 'react';
import './EditPopup.css';

export function EditPopup ({contactToEdit, onEditComplete, showPopup, setShowPopup}) {

    const [firstName, setFirstName] = useState(contactToEdit.firstName);
    const [lastName, setLastName] = useState(contactToEdit.lastName);
    const [phone, setPhone] = useState(contactToEdit.phone);
    const [img, setImg] = useState(contactToEdit.img);
    const [saveIndicator, setSaveIndicator] = useState('saved');

    const onSave = () => {
        saveIndicator === 'unsaved' && onEditComplete({
            id: contactToEdit.id,
            firstName,
            lastName,
            phone,
            img
        });
        setShowPopup(!showPopup);
    }

    const onChangeFieldsHandler = (field, value) => {
        switch (field) {
            case 'firstName' : {
                setFirstName(value);
                setSaveIndicator('unsaved')
                break;
            }
            case 'lastName' : {
                setLastName(value);
                setSaveIndicator('unsaved')
                break;
            }
            case 'phone' : {
                setPhone(value);
                setSaveIndicator('unsaved')
                break;
            }
            case 'img' : {
                setImg(value);
                setSaveIndicator('unsaved')
                break;
            }
            default :
        }
    }

    const onClose = () =>{
        setShowPopup(!showPopup)
    }

    return (
        <div className="overlay">
            <div className="popUp">
                <div className="popUp-title">
                    <h2 className='popUp-title-contact'> Edit Contact: <span>{contactToEdit.firstName} {contactToEdit.lastName}</span></h2>
                    <button className='popUp-title-close' onClick={onClose}>✖️</button>
                </div>

                <div className="popUp-field">
                    <div className="popUp-photo">
                        {contactToEdit.img 
                        ? <img className="popUp-img" src={img} alt="photo_img" />
                        : contactToEdit.firstName.charAt(0)} 
                    </div>
                    <div className="popUp-inputs" >
                        <input type="text" value={firstName} onChange={({target})=> onChangeFieldsHandler('firstName', target.value)}></input>
                        <input type="text" value={lastName} onChange={({target})=> onChangeFieldsHandler('lastName', target.value)}></input>
                        <input type="text" value={phone} onChange={({target})=> onChangeFieldsHandler('phone', target.value)}></input>
                        <button className="popUp-btn" onClick={onSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}