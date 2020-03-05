import React from 'react';

const ContentCard = (props) => {

return(

    <div>

        <img />

        <span>{props.item.title}</span>
        <p>{props.item.description}</p>
    </div>

);


};

export default ContentCard;