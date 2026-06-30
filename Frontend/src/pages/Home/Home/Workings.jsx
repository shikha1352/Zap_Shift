import React from 'react';
import Card from '../../../components/Cards/Card';
import { CiDeliveryTruck } from 'react-icons/ci';

const Workings = ({card}) => {
    const {title,description}=card;
    const icon=<CiDeliveryTruck size={50}/>;
    return (
        <div>
            <Card icon={icon} title={title} description={description}/>
        </div>
    );
};

export default Workings;