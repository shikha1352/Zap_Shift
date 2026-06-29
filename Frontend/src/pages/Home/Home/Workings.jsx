import React from 'react';
import Card from '../../../components/Cards/Card';

const Workings = ({card}) => {
    const {title,description}=card;
    return (
        <div>
            <Card title={title} description={description}/>
        </div>
    );
};

export default Workings;