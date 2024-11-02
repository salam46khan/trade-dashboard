import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen w-full bg-slate-500 flex justify-center items-center'>
            <Link className='bg-gray-200 p-4 rounded-full myBtn' to={'dashboard'}>Go To Dashboard</Link>
        </div>
    );
};

export default Home;