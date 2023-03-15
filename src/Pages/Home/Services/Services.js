import React from 'react';
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from './Service';

const Services = () => {

    const serviceData=[
        {
            id:1,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:fluoride
        },
        {
            id:2,
            name:"Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:cavity
        },
        {
            id:3,
            name:"Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:whitening
        }
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl uppercase font-bold text-primary'>Our Service</h3>
                <h2 className='text-3xl'>Service we provide</h2>
            </div>

            <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service=><Service key={service.id} service={service}></Service>)
                }
            </div>      
        </div>
    );
};

export default Services;