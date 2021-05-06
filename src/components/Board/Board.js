import React from 'react';
import { connect } from 'react-redux'
function Board(props) {
    console.log(props)
    return (
        <div>
            
        </div>
    );
}

export default connect(store=>store)(Board);