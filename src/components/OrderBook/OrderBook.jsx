import React, { useState } from 'react';
import OrderTable from './OrderTable';

const OrderBook = () => {
    const [activeTab, setActiveTab] = useState('order')
    const handleChangeTab = (tab) => {
        setActiveTab(tab)
    }
    return (
        <div className='order-book'>

            <div className='flex items-center justify-center flex-col md:flex-row gap-4'>
                <button className={`w-full order-btn md:w-1/2 ${activeTab === "order" && 'order-btn-act'}`} onClick={() => handleChangeTab('order')}>Season 1</button>
                <button className={`w-full order-btn md:w-1/2 ${activeTab === "trade" && "order-btn-act"}`} onClick={() => handleChangeTab('trade')}>Season 2</button>
            </div>

            <div>
                <OrderTable></OrderTable>
            </div>

        </div>
    );
};

export default OrderBook;