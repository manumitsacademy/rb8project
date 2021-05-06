import React from 'react';
import { connect } from 'react-redux'
import Entry from './Entry';
function LogContainer(props) {
    return (
        <ul>
            {
                props.logger.log.map((l,i)=>{
                    return(<Entry entry={l} key={i}></Entry>)
                })
            }
        </ul>
    );
}

export default connect(store=>store)(LogContainer);