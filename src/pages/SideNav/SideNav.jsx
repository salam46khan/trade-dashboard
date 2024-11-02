import { FaPlus, FaRuler, FaSearchPlus, FaSlidersH } from 'react-icons/fa';
import './SideNav.css'
import { TbLine } from 'react-icons/tb';
import { FiLayers, FiSliders } from 'react-icons/fi';
import { FaPencil } from 'react-icons/fa6';
import { PiShareNetworkBold, PiTextTBold } from 'react-icons/pi';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { RiDeleteBin6Line } from 'react-icons/ri';
const SideNav = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div>
                <button className='plus'>
                    <FaPlus />
                </button>
            </div>

            <div className='side-nav-tool'>
                <button className='tools'>
                    <FaPlus />
                </button>
                <button className='tools active'>
                    <TbLine />
                </button>
                <button className='tools'>
                    <FaSlidersH />
                </button>
                <button className='tools'>
                    <FaPencil />
                </button>
                <button className='tools'>
                    <PiTextTBold />
                </button>
                <button className='tools'>
                    <PiShareNetworkBold />
                </button>
                <button className='tools'>
                    <HiOutlineEmojiHappy />
                </button>
                <button className='tools'>
                    <FaRuler />
                </button>
                <button className='tools'>
                    <FaSearchPlus />
                </button>
            </div>

            <div className='side-nav-tool'>
                <button className='tools'>
                    <FiLayers />
                </button>
                <button className='tools'>
                    <RiDeleteBin6Line />
                </button>
            </div>
        </div>
    );
};

export default SideNav;