import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', height: '500px', marginTop: '10px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;