//import libraries
import React from "react";
import styled from "styled-components";

// create a component
const Rainbow3 = props => {
    return (
        <SRainbow3
            src="https://res.cloudinary.com/billpliske/image/upload/v1547066664/grandkids/rainbow3.png"
            alt="cloud"
        />
    );
};

const SRainbow3 = styled.img`
    opacity: 0.3;
    width: 100%;
    display: relative;
    margin: 0px 0 200px 0;
    z-index: 1;
`;

export default Rainbow3;
