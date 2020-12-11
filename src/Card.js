import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="image" src={`https://robohash.org/${id}?200x200`} />
            <h1>{name}</h1>
            <h3>{email}</h3>
        </div>
    );
}

export default Card;