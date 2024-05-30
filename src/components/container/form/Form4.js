

export default function Form4({ userData, mult, setMult,setLocation,setUserData }) {
    
    let plan = 0
    let total = 0
    if(userData.yearlyType===true){setMult(10)}
    if (userData.plan === 'Arcade') { plan = 9 }
    else if (userData.plan === 'Advanced') { plan = 12 }
    else if (userData.plan === 'Pro') { plan = 15 }
    if(userData.onlineService) { total += 1 }
    if (userData.largerStorage) { total += 2 }
    if(userData.customProfile){total +=2}
    total += plan 
    total *= mult

    function change() {
        setLocation(2)
        setUserData({
            ...userData,
            yearlyType: false, 
            plan: 'no plan selected',
            onlineService: false,
            largerStorage: false,
            customProfile:false,
        })
    }
        
    

    return (
        <div className='form'>
            <h3>Finishing up</h3>
            <p className='title-desc'>Double-check everything looks OK before confirming</p>
            <div className='sum-up'>
                <div className='sum-up-first-row'>
                    <div className='sum-up-title-container'>
                        <p className="sum-up-title">{userData.plan} ({userData.yearlyType?'Yearly':'Monthly'}) </p>
                        <p className='underline' onClick={change}>Change</p>
                    </div>
                    <div className='sum-up-title-sum'>${plan * mult}/{userData.yearlyType?'yr':'mo'}</div>
                </div>
            
                <hr className='magnolia'></hr>
                <div className='add-ons'>
                    <p className='add-ons-title'>{(userData.onlineService===true) && 'Online service'}</p>
                    <p className='add-ons-sum'>{(userData.onlineService===true) && ` +$${1*mult}/${userData.yearlyType ? 'yr' : 'mo' }`}</p></div>
                <div className='add-ons'>
                    <p className='add-ons-title'>{(userData.largerStorage===true) && 'Larger storage'}</p>
                    <p className='add-ons-sum'>{(userData.largerStorage===true) && ` +$${2*mult}/${userData.yearlyType ? 'yr' : 'mo' }`}</p></div>
                <div className='add-ons'>
                    <p className='add-ons-title'>{(userData.customProfile===true) && 'Customizable profile'}</p>
                    <p className='add-ons-sum'>{(userData.customProfile===true) && ` +$${2*mult}/${userData.yearlyType ? 'yr' : 'mo' }`}</p></div></div>
                <div className='add-ons'>
                <p className='add-ons-title'>Total (per month)</p><p className='total'>{` +$${total}/${userData.yearlyType ? 'yr' : 'mo'}`}</p></div>
            

        </div>
    )
};
