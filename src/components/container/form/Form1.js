import React from 'react';
import './form.css'



export default function Form(params) {
    const [input, setInput] = React.useState('')
    const emailInput = new RegExp(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm)
    const telInput = new RegExp(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g)
    const nameInput = new RegExp(/^[a-z ,.'-]+$/i)

    function checkInput(e) {
        setInput(e.target.value)
       
        if (e.target.id === 'name-input') {
            if (!nameInput.test(e.target.value)) {
                e.target.classList.add('invalid')
            } else {
                e.target.classList.remove('invalid')
                e.target.classList.add('valid')
                params.setUserData({
                    ...params.userData,
                    name: e.target.value,
                    
                })
            }
        }
        if (e.target.id === 'email-input') {
            if (!emailInput.test(e.target.value)) {
                e.target.classList.add('invalid')
            }
            else {
                e.target.classList.remove('invalid')
                e.target.classList.add('valid')
                params.setUserData({
                    ...params.userData,
                    email: e.target.value,
                })
            }
        }
        if (e.target.id === 'tel-input') {
            if (!telInput.test(e.target.value)) {
                e.target.classList.add('invalid')
            } else {
                e.target.classList.remove('invalid')
                e.target.classList.add('valid')
                params.setUserData({
                    ...params.userData,
                    phone:e.target.value
                })
                
            }
        }
    }


    return (
        <div className='form'>
            <h3>Personal Info</h3>
            <p>
                Please provide your name, email address, and phone number.
            </p>
            <label >Name
                <input
                    id='name-input'
                    type="text"
                    placeholder='e.g Stephan King'
                    onChange={(e) => checkInput(e)}
                    onBlur={(e) => checkInput(e)} />
            </label>
            <label >Email Address
                <input
                    id='email-input'
                    type="email"
                    placeholder='e.g stephanKing@lorem.com'
                    onChange={(e) => checkInput(e)}
                    onBlur={(e) => checkInput(e)} />
            </label>
            <label>Phone Number
                <input
                    id='tel-input'
                    type="tel"
                    placeholder='e.g +1 234 567 890'
                    onChange={(e) => checkInput(e)}
                    onBlur={(e) => checkInput(e)}
                />
            </label>

        </div>
    )
};
