import React from 'react';
import { connect } from "react-redux";
import Bidder from './Bidder';
function BiddersContainer(props) {
    return (
        <div>
            <h1>Bidders</h1>
            {
              props.bidder.allbidders.map((b,i)=>{
                  return(<Bidder bidderdetails={b}></Bidder>)
              })  
            }
        </div>
    );
}

export default connect(store=>store)(BiddersContainer);