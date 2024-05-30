import success from '../../../assets/images/icon-thank-you.svg'

export default function ThankYou() {
    return (
        
            <div className='thank-you'>
                <img src={success} alt='Success!!' />
            <h3>Thank you!</h3>
            <p>Thanks for confirming your subscription!
                We hope you have fun using
                our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.</p>
            </div>
    )
};
