import React from 'react'
import './container.css'
import Indicator from './indicator/Indicator'
import Form1 from './form/Form1'
import BottomNav from './bottom-nav/BottomNav'
import Form2 from './form/Form2'
import Form3 from './form/Form3'
import Form4 from './form/Form4'
import ThankYou from './form/ThankYou'


export default function Container({ location, setLocation ,userData,setUserData,mult,setMult}) {
    
    let Form

    if (location === 1) {
        Form = Form1
    } else if (location === 2) {
        Form = Form2

    } else if (location === 3) {
        Form = Form3

    } else if (location === 4) {
        Form = Form4

    } else if(location === 5){
        Form = ThankYou
    }

    
    return (
        <section className='container'>
            
                <div className='sec1'>
                    <div className='bread-crumbs'>
                        <Indicator indicatorTitle={'YOUR INFO'} state={location===1?false:true} number='1' />
                        <Indicator indicatorTitle={'SELECT PLAN'} state={ location===2?false:true} number = '2'/>
                        <Indicator indicatorTitle={'ADD-ONS'} state={ location===3?false:true} number = '3'/>
                        <Indicator indicatorTitle={'SUMMERY'} state={location===4?false:true} number='4' />

                    </div>

                {<Form
                    userData={userData}
                    setUserData={setUserData}
                    mult={mult}
                    setMult={setMult}
                    setLocation={setLocation}

                />}
                </div>
                <div className='sec2'>
                {location !== 5 &&<BottomNav location={location} setLocation={setLocation} userData={userData }/>}
                </div>
            
        </section>
    )
};

