import React from 'react';
import './SearchBox.css'

const SearchBox = ({onSearchChange}) => {
    return (
        <div>
            <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type="text" 
                placeholder="Search"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBox;