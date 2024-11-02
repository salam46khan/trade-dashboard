import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { TbCurrencyEthereum } from 'react-icons/tb';

const ChartInfo = () => {
    return (
        <div className='chartInfo flex flex-col md:flex-row gap-y-5'>
            <div className='flex gap-2 items-center'>
                <div className='chartInfoBtn'>
                    <TbCurrencyEthereum />
                </div>
                <p className='text-xl text-white'>ETH - USD</p>
                <div className='p-2'>
                    <FaChevronDown />
                </div>
            </div>

            <div className='flex flex-wrap gap-4 ml-auto'>
                <div className='-space-y-[2px]'>
                    <p className='text-sm text-[#3A5354] underline'>Mark</p>
                    <p className='text-slate-100'>2,649.8</p>
                </div>
                <div className='-space-y-[2px]'>
                    <p className='text-sm text-[#3A5354]'>Oracle</p>
                    <p className='text-slate-100'>2,648.4</p>
                </div>
                <div className='-space-y-[2px]'>
                    <p className='text-sm text-[#3A5354]'>24h Change</p>
                    <p className='text-pink-800'>-34.6 / -1.29%</p>
                </div>
                <div className='-space-y-[2px]'>
                    <p className='text-sm text-[#3A5354]'>24h Volume</p>
                    <p className='text-slate-100'>$175,909,253</p>
                </div>
                <div className='-space-y-[2px]'>
                    <p className='text-sm text-[#3A5354] underline'>Open Interest</p>
                    <p className='text-slate-100'>$243,312.85</p>
                </div>
                <div className='-space-y-[2px]'>
                    <p className='text-sm text-[#3A5354] underline'>Funding / Countdown</p>
                    <p className='text-slate-100'>0.0013%</p>
                </div>
            </div>
        </div>
    );
};

export default ChartInfo;