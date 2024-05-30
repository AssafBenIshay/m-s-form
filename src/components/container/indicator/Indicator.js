import React from 'react';
import './indicator.css'

export default function Indicator(params) {
    const [vw,setVw] = React.useState(true)
    

    window.addEventListener('resize', () => {
        //setVw(window.innerWidth > 600)
        if (window.innerWidth < 600) {
            setVw(false)
        } else {
            setVw(true)
        }
    })

    function Title() {
        
        return (
            <div className='indicator-container-title-desc'>
                <div className='indicator-container-title'>
                    STEP {params.number}
                </div>
                <div className='indicator-container-desc'>
                    {params.indicatorTitle}
                </div>
            </div>
        )
}

    return (
        <div className='indicator-container' >
            <div className={`indicator ${params.state && 'unfocused'} `}>{params.number}</div>
            {vw && <Title />}

            
        </div>
    )
};
