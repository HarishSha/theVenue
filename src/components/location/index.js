import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56120.85686315261!2d77.01291053907957!3d28.462871535782288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74ca05bd2fd9c2ea!2sHarish+Bakery!5e0!3m2!1sen!2sin!4v1543502160996" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
}

export default Location;
