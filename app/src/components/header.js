import React from 'react';
import titleImg from '../images/title.png';

const Header = () => {
    return(
        <div
            style={{
                color: "dimgray",
            }}
        >
            <img src={titleImg} alt="Title" width="100%" />
        </div>
    );
};

export default Header;