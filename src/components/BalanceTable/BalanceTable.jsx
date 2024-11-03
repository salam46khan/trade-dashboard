import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const BalanceTable = () => {

    const [activeTab, setActiveTab] = useState('positions')
    const handleChangeTab = (tab) => {
        setActiveTab(tab)
    }

    const [blncData, setBlncData] = useState([])
    useEffect(() => {
        fetch('/balance-fake-data.json')
            .then(res => res.json())
            .then(data => setBlncData(data))
    }, [])
    return (
        <div className="blnc-table mt-4">
            <div className="blnce-tab-items">
                <button className={`blnce-tab ${activeTab === "balance" && "blnce-tab-active"}`} onClick={() => handleChangeTab('balance')}>Balances</button>
                <button className={`blnce-tab ${activeTab === "positions" && "blnce-tab-active"}`} onClick={() => handleChangeTab('positions')}>Positions</button>
                <button className={`blnce-tab ${activeTab === "order" && "blnce-tab-active"}`} onClick={() => handleChangeTab('order')}>Open Orders</button>
                <button className={`blnce-tab ${activeTab === "twap" && "blnce-tab-active"}`} onClick={() => handleChangeTab('twap')}>TWAP</button>
                <button className={`blnce-tab ${activeTab === "trade" && "blnce-tab-active"}`} onClick={() => handleChangeTab('trade')}>Trade History</button>
            </div>
            
            <div className="bln-table ">
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        
                        <thead>
                            <tr className="text-xs text-[#3A5354]">
                                <td>Coin</td>
                                <td className="flex items-center gap-1">
                                    <span>Position Value</span>
                                    <FaChevronDown />
                                </td>
                                <td>Entry Price</td>
                                <td>Mark Price</td>
                                <td>Mark Price</td>
                                <td>PNL (ROE %)</td>
                                <td>Margin</td>
                                <td>Funding</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                blncData?.map(blnc => <tr key={blnc.id}>
                                    <td>{blnc.coin}</td>
                                    <td>{blnc.position}</td>
                                    <td>{blnc.entry}</td>
                                    <td>{blnc.price_1}</td>
                                    <td>{blnc.price_2}</td>
                                    <td>{blnc.pnl}</td>
                                    <td>{blnc.margin}</td>
                                    <td>{blnc.funding}</td>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

             
        </div>
    );
};

export default BalanceTable;