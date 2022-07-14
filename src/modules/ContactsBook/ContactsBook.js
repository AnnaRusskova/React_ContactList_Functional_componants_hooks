import { Search, ContactsList, EditPopup } from './components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';

const list = [
    {id:1, firstName:"Andres", lastName:"Garcia", phone:"+ 38 (012) 345 67 89"},
    {id:2, firstName:"Anna", lastName:"Delvey", phone:"+ 38 (012) 345 67 89", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjGWKQyQYVdTBEubnCvi-OGVkgAR_y4u4yA&usqp=CAU"},
    {id:3, firstName:"Anna", lastName:"Sorokin", phone:"+ 38 (012) 345 67 89"},
    {id:4, firstName:"Bob", lastName:"Garisson", phone:"+ 38 (012) 345 67 89", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTediDSOhVVnjdMY1UAE0qWAmm6jiPchrxUlg&usqp=CAU"},
    {id:5, firstName:"Jane", lastName:"Doe", phone:"+ 38 (012) 345 67 89"},
    {id:6, firstName:"John", lastName:"Doe", phone:"+ 38 (012) 345 67 89", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kevMmBSw9be5NzeiYcn-WK-J4KgmrIJnzA&usqp=CAU"},
    {id:7, firstName:"Robert", lastName:"Person", phone:"+ 38 (012) 345 67 89", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjOcSmNjV1C88zM32AXezw9TOJCr_MOhxBg&usqp=CAU"}
]

export function ContactsBook (){

    const [showPopup, setShowPopup] = useState(false);
    const [contactList, setContactList] = useState(list); 
    const [titleFilter, setTitleFilter] = useState('');
    const [selectedContact, setSelectedContact] = useState({});

    const onSearchChange = (searchValue)=>{ //  to detect input value in search field
        setTitleFilter(searchValue.toLowerCase());
        console.log(titleFilter)
    } 

    // testing useEffect in search field
    useEffect(()=> console.log('searching for contact...'), [titleFilter]);

    // testing useMemo in search field 
    const filteredList = useMemo(()=> (list) =>{ 
        if (titleFilter){
            let newList = list.filter(contact =>
                contact.firstName.toLowerCase().includes(titleFilter) 
                || contact.lastName.toLowerCase().includes(titleFilter)
                || contact.phone.toLowerCase().includes(titleFilter)
            ) 
            console.log('useMemo in action');
            return newList;
        } else {
            console.log('useMemo in action');
            return list;
        }
    }, [titleFilter]);

    // testing useCallback after edition of the contact
    const onEditComplete = useCallback((changedContact) =>{ 
        console.log(changedContact);
        setContactList(
            contactList.map(contact => contact.id === changedContact.id
                ? {...contact, 
                    firstName: changedContact.firstName, 
                    lastName: changedContact.lastName, 
                    phone: changedContact.phone, 
                    img: changedContact.img ? changedContact.img : null}
                : contact
            )
        ); 
        console.log('useCallback in action');
    }, [contactList])
    
    return(
        <>
            <Search onSearchChange={onSearchChange}/>
              
            <ContactsList 
                contactList ={filteredList(contactList)} // to render filtered list
                setContactList={setContactList}
                showPopup ={showPopup}
                setShowPopup={setShowPopup}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
            />
    
            {showPopup 
                ? <EditPopup 
                    contactToEdit={selectedContact} 
                    showPopup ={showPopup}
                    setShowPopup={setShowPopup}
                    // onEditComplete={(changedContact)=>  console.log(changedContact)} />
                    onEditComplete={onEditComplete} />
                : <></> 
            } 
        </>

    );
}