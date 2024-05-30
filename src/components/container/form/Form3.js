import React from 'react'


export default function Form3({ userData, setUserData ,mult,setMult}) {
    const [res, setRes] = React.useState('')
    const [sts,setSts] = React.useState(false)

    function updateUserData(e) {
        setRes(e.target.parentElement.parentElement.id)
        console.log('res',res);

        setSts(e.target.checked)
        console.log(e.target,sts);


        if (res === 'online') {
            setUserData({
                ...userData,
                onlineService: sts,
            })
        } else if (res === 'storage') {
            setUserData({
                ...userData,
                largerStorage:sts,
            })
        }else if (res === 'profile') {
            setUserData({
                ...userData,
                customProfile:sts,
            })
        }

    }


    return (
        <div className='form'>
            <h3>Pick add-ons</h3>
            <p className='title-desc'>Add-ons help enhance your gaming experiance</p>
            <div className='course2' id='online'>
                
                <label className='label' >
                <input 
                type='checkbox' 
                className='chkbox' 
                onClick={updateUserData} onBlur={updateUserData}></input>
                <span className="checkmark"></span></label>
                <div className='btn-content'>
                    <div className="button-p-title2">Online service</div>
                    <div className="button-p-desc2">Access to multiplayer games</div>
                </div>
                <div className="price">+${1 * mult}/{mult === 1 ? 'mo' : 'yr'}</div>
            </div>
            <div className='course2' id='storage'>
                
                <label className='label'>
                <input 
                type='checkbox' 
                className='chkbox' 
                onChange={updateUserData} onBlur={updateUserData}></input>
                <span className="checkmark"></span></label>
                <div className='btn-content'>
                    <div className="button-p-title2">Large storage</div>
                    <div className="button-p-desc2">Extra 1TB of cloud save</div>
                </div>
                <div className="price">+${2 * mult}/{mult === 1 ? 'mo' : 'yr'}</div>
            </div>
            <div className='course2'  id='profile'>
                
                <label className='label'>
                <input 
                type='checkbox' 
                className='chkbox' 
                onChange={updateUserData} onBlur={updateUserData}></input>
                <span className="checkmark"></span></label>
                <div className='btn-content'>
                    <div className="button-p-title2">Customizable profile</div>
                    <div className="button-p-desc2">Custom theme on your profile</div>
                </div>
                <div className="price">+${2 * mult}/{mult === 1 ? 'mo' : 'yr'}</div>
            </div>
            

        </div>
    )
};
