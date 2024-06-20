import React, { useState, useEffect } from 'react';
import '../Assets/styles/addbook.css'
import { validateForm } from '../apis/validateForm';
function AddUser() {
    // const [buttons, setButtons] = useState([]);
    // const [forms, setForms] = useState([]);
    // const [tables, setTables] = useState([]);

    // useEffect(() => {
    //     const addButtonClickHandler = () => {
    //         setButtons((prevButtons) =>
    //             prevButtons.map((button) =>
    //                 button.id === 'add-user-button'
    //                     ? { ...button, backgroundColor: '#800040' }
    //                     : { ...button, backgroundColor: '#4CAF50' }
    //             )
    //         );
    //     };

    //     const submitUserForm = (event) => {
    //         event.preventDefault();
    //         const form = document.getElementById('user-form');
    //         const select = document.getElementById('type');
    //         const selectValues = Array.from(select.options)
    //             .filter((option) => option.selected)
    //             .map((option) => option.value);
    //         const formData = new FormData(form);
    //         formData.append('type', selectValues.join(','));
    //         const serializedData = Object.fromEntries(formData.entries());

    //         if (serializedData['phone-number'].length !== 10) {
    //             alert('Phone number should be 10 digits');
    //             form.reset();
    //         } else if (validateForm(serializedData)) {
    //             // Rest of the code...
    //         } else {
    //             form.reset();
    //         }
    //     };

    //     const buttons = document.getElementsByClassName('butn');
    //     setButtons(Array.from(buttons));

    //     const forms = document.getElementsByClassName('mainforms');
    //     setForms(Array.from(forms));

    //     const tables = document.getElementsByClassName('tables');
    //     setTables(Array.from(tables));

    //     document
    //         .getElementById('add-user-button')
    //         .addEventListener('click', addButtonClickHandler);
    //     document
    //         .getElementById('submit-user')
    //         .addEventListener('click', submitUserForm);

    //     return () => {
    //         document
    //             .getElementById('add-user-button')
    //             .removeEventListener('click', addButtonClickHandler);
    //         document
    //             .getElementById('submit-user')
    //             .removeEventListener('click', submitUserForm);
    //     };
    // }, []);

    return (
        <div>
            <form id="user-form" className="mainforms" autoComplete="off" required>
                <h2>Add User</h2>
                <label htmlFor="name">
                    Name:<span className="Warning">This field is required</span>
                </label>
                <input type="text" id="name" name="name" autoComplete="off" required /><br /><br />
                <label htmlFor="type">
                    Type:<span className="Warning">This field is required</span>
                </label>
                <select id="type" required>
                    <option value="" disabled selected>Select your option</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                </select><br /><br />
                <label htmlFor="phone-number">
                    Phone Number:<span className="Warning">This field is required</span>
                </label>
                <input type="number" id="phone-number" pattern="[0-9]{10}" name="phone-number" title="Please Enter Exactly 10 digits" autoComplete="off" required /><br /><br />
                <button id="submit-user">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;
