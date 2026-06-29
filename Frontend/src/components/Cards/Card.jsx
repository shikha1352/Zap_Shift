import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";

const Card = ({title,description}) => {
    return (
        <div className='items-start h-[262px] w-[280px] bg-white rounded-2xl p-[32px]'>
            <CiDeliveryTruck size={50}  />
            <h1 className='text-secondary text-[18px] font-bold my-3'>{title}</h1>
            <p className='text-[#606060]'>{description}</p>
            
        </div>
    );
};

export default Card;