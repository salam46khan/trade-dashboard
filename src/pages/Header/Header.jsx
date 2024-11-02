import React, { useState } from 'react';
import stateUp from '../../assets/svg/status-up.svg'
import lucide from '../../assets/svg/lucide_vault.svg'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/svg/logo-navbar 1.svg'

import './Header.css'
import { GiProgression, GiTireIronCross } from 'react-icons/gi';
import { VscBriefcase } from 'react-icons/vsc';
import { FaAward, FaUsers } from 'react-icons/fa';
import { FaRankingStar } from 'react-icons/fa6';
import { TbSettings2, TbWorld } from 'react-icons/tb';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { TfiClose, TfiMenu } from 'react-icons/tfi';
import { CgClose, CgMenuLeft } from 'react-icons/cg';
const Header = () => {
    const [openNav, setOpenNav] = useState(false)


    return (
        <div className='flex justify-between items-center relative'>
            <div className='flex md:gap-8 items-center justify-normal'>
                <Link to={'/'} className='' >
                    <button className='rounded-lg p-2 logo bg-[#0A191C]'>
                        <img className='w-full' src={logo} alt="" />
                    </button>
                </Link>

                <div className='hidden md:block'>
                    <ul className='mynav'>
                        <li>
                            <NavLink to={'/dashboard/trade'}>
                                {/* <img src={stateUp} alt="" /> */}
                                <GiProgression className='text-2xl' />
                                <p>Trade</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/lucide'}>
                                {/* <img src={lucide} alt="" /> */}
                                <GiTireIronCross className='text-2xl' />
                                <p>Voult</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/brifcase'}>
                                <VscBriefcase className='text-2xl' />
                                <p>Briefcase</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/team'}>
                                <FaUsers className='text-2xl' />
                                <p>Team</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/award'}>
                                <FaAward className='text-2xl' />
                                <p>Award</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/rank'}>
                                <FaRankingStar className='text-2xl' />
                                <p>Ranking</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>


            </div>

            <div className=' gap-3 hidden md:flex'>
                <button className='connect-btn'>Connect</button>
                <button className='nav-setting-btn'>
                    <TbWorld />
                </button>
                <button className='nav-setting-btn'>
                    <TbSettings2 />
                </button>
            </div>




            <div className='md:hidden'>
                <button className='nav-toggle' onClick={() => setOpenNav(!openNav)}>
                    {
                        openNav ?  <CgClose /> : <CgMenuLeft /> 
                    }
                </button>

                <div className={`toggle-content duration-300 z-50  p-4 ${openNav ? 'opacity-100 right-0' : 'opacity-0 -right-[100%]'}`}>
                    <ul className=''>
                        <li>
                            <NavLink to={'/dashboard/trade'}>
                                {/* <img src={stateUp} alt="" /> */}
                                <GiProgression className='text-2xl' />
                                <p>Trade</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/lucide'}>
                                {/* <img src={lucide} alt="" /> */}
                                <GiTireIronCross className='text-2xl' />
                                <p>Voult</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/brifcase'}>
                                <VscBriefcase className='text-2xl' />
                                <p>Briefcase</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/team'}>
                                <FaUsers className='text-2xl' />
                                <p>Team</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/award'}>
                                <FaAward className='text-2xl' />
                                <p>Award</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/rank'}>
                                <FaRankingStar className='text-2xl' />
                                <p>Ranking</p>
                            </NavLink>
                        </li>
                    </ul>

                    <div>
                        <button className='connect-btn-mob mt-1'>Connect</button>
                        <div className='flex items-center justify-evenly py-3'>
                            <button className='nav-setting-btn'>
                                <TbWorld />
                            </button>
                            <button className='nav-setting-btn'>
                                <TbSettings2 />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;