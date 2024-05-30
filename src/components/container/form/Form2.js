import arcadeIcon from '../../../assets/images/icon-arcade.svg'
import advancedIcon from '../../../assets/images/icon-advanced.svg'
import proIcon from '../../../assets/images/icon-pro.svg'
import React from 'react';

export default function Form2({userData ,setUserData,mult,setMult}) {
    const [time, setTime] = React.useState('mo')
    const [plan,setPlan] = React.useState('pro')
    
    function changeMode() {
        let moderator = document.querySelector('#mode')
        let m = document.querySelector('#m')
        let y = document.querySelector('#y')
        moderator.classList.toggle('yearly')
        m.classList.toggle('grayed')
        y.classList.toggle('grayed')

        if (moderator.classList.contains('yearly')) {
            setMult(10)
            setTime('yr')
        } else {
            setMult(1)
            setTime('mo')
        }

        setUserData({
            ...userData,
                yearlyType:!userData.yearlyType
        })


    }

    function getUserPlan(e) {
        const targetClass = e.target.classList

        if (targetClass.length > 0) {
            if (targetClass.contains('Arc')) {
                setPlan('Arcade')
                targetClass.add('course-selected')
                if (document.querySelector('.Adv').classList.contains('course-selected')) {
                    document.querySelector('.Adv').classList.remove('course-selected') 
                } 
                if(document.querySelector('.Pro').classList.contains('course-selected')) {
                    document.querySelector('.Pro').classList.remove('course-selected') 
                }
                    
            }else if (targetClass.contains('Adv')) {
                setPlan('Advanced')
                targetClass.add('course-selected')
                if (document.querySelector('.Arc').classList.contains('course-selected')) {
                    document.querySelector('.Arc').classList.remove('course-selected') 
                } 
                if(document.querySelector('.Pro').classList.contains('course-selected')) {
                    document.querySelector('.Pro').classList.remove('course-selected') 
                }

            } else if (targetClass.contains('Pro')) {
                setPlan('Pro')
                targetClass.add('course-selected')
                if (document.querySelector('.Adv').classList.contains('course-selected')) {
                    document.querySelector('.Adv').classList.remove('course-selected') 
                } 
                if(document.querySelector('.Arc').classList.contains('course-selected')) {
                    document.querySelector('.Arc').classList.remove('course-selected') 
                }
                setPlan('Pro')

            } else {
                throw alert.error('Something went wrong! 😰 \b No plan selected');
            }
        }
        setUserData({
            ...userData,
            plan:plan
        })
    }


    return (
        <div className='form'>
            <h3>Select your plan</h3>
            <p className='title-desc'>You have the option of monthly or yearly billing.</p>
            <button className='course Arc' onClick={getUserPlan} onBlur={getUserPlan}><img src={arcadeIcon} alt='Arcade' />
            <div className='in-button-div Arc'>
                <p className='button-p-title Arc'>Arcade</p>
                    <p className='button-p-desc Arc'>${9 * mult}/{time}</p>
            </div>
            </button>
            <button className='course Adv' onClick={getUserPlan}><img src={advancedIcon} alt='Advanced'/>
            <div className='in-button-div Adv'>
                <p className='button-p-title Adv'>Advanced</p>
                    <p className='button-p-desc Adv'>${12 * mult}/{time}</p>
            </div>
            </button>
            <button className='course Pro' onClick={getUserPlan}><img src={proIcon} alt='Pro'/>
            <div className='in-button-div Pro'>
                <p className='button-p-title Pro'>Pro</p>
                    <p className='button-p-desc Pro'>${15 * mult}/{time}</p>
            </div>
            </button>

            <button className='moderator' onClick={changeMode}>
                <p id='m' >Monthly</p>
                <div className='mode' id='mode'>
                    <div className='pin'></div>
                </div>
                <p id='y' className='grayed'>Yearly</p>
            </button>

        </div>
    )
};
