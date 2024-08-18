import React from 'react';


export const Button = ({text}) => {
    return (
        <button className='block bg-black text-white text-xl px-16 py-4 rounded-full'>{text}</button>
    );
};
