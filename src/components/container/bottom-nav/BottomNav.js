import React from 'react';
import './nav.css'


export default function BottomNav({ location, setLocation ,userData}) {
    
    function setNewLocation() {
        if (location === 1) {
            if (userData.name && userData.email && userData.phone) {
                setLocation(lastLocation => lastLocation+1)
            } else {
                alert('Please fill all fields correctly.')
            }
        } else if (location === 2) {
            console.log(userData.plan);
            if (!userData.plan) {
                alert('Please select a plan before moving to the next stage.')
            } else {
                setLocation(lastLocation => lastLocation+1)
            }
        } else if (location === 3) {
            setLocation(lastLocation => lastLocation+1)
        } else if (location === 4) {
            setLocation(lastLocation => lastLocation+1)
        }
        
    }
    function setLastLocation() {
        if (location > 1) {
            setLocation(lastLocation => lastLocation - 1)
        }
    }
    
    return (
        <nav className='bottom-nav'>
            
            {(location === 4)?<button onClick={setNewLocation} className='last'>Confirm</button>:<button onClick={setNewLocation} className='next'>Next Step</button>}
            {(location !==1) && <button onClick={setLastLocation} className='back'>Go Back</button>}
        </nav>
    )
};
