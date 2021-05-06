import React from 'react';

function Bidder(props) {
    console.log(props)
    return (
        <div>
            {props.bidderdetails.biddername}
        </div>
    );
}

export default Bidder;