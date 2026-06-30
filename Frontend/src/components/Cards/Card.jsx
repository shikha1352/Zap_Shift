import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";

const Card = ({icon,img,title,description,className}) => {
    return (
        <div
  className={`bg-white rounded-2xl p-8 h-[250px] w-full flex flex-col `}
>
            {icon}
            {img?<img src={img} className=" mx-auto mb-4"/>:""}
            <h1 className='text-secondary text-[18px] font-bold my-3'>{title}</h1>
            <p className='text-[#606060] font-light text-[13px]'>{description}</p>
            
        </div>
    );
};

export default Card;