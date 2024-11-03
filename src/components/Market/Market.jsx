import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Market = () => {
    const [activeTab, setActiveTab] = useState('market')
    const [activeTabBuy, setActiveTabBuy] = useState('buy')

    const handleChangeTab = (tab) => {
        setActiveTab(tab)
    }

    const handleChangeBuyTab = (tab) => {
        setActiveTabBuy(tab)
    }


    // const [checked, setChecked] = React.useState(false);

    // const handleChange = () => {
    //     setChecked(!checked);
    // };
    return (
        <div className="market mt-4">
            <div className="blnce-tab-items flex justify-between items-center">
                <button className={`market-tab ${activeTab === "market" && "market-tab-active"}`} onClick={() => handleChangeTab('market')}>Market</button>
                <button className={`market-tab ${activeTab === "limit" && "market-tab-active"}`} onClick={() => handleChangeTab('limit')}>Limit</button>
                <button className={`market-tab ${activeTab === "pro" && "market-tab-active"}`} onClick={() => handleChangeTab('pro')}>Pro</button>

            </div>

            <div className="p-3">
                <div className='flex items-center justify-center flex-col md:flex-row gap-4'>

                    <button className={`w-full order-btn md:w-1/2 ${activeTabBuy === "buy" && 'order-btn-act'}`} onClick={() => handleChangeBuyTab('buy')}>Buy / Long</button>
                    <button className={`w-full order-btn md:w-1/2 ${activeTabBuy === "sell" && "order-btn-act"}`} onClick={() => handleChangeBuyTab('sell')}>Sell / Short</button>
                </div>

                <div className="py-4 space-y-1">
                    <div className="flex justify-between items-center text-[18px]">
                        <p className="text-[#537374] ">Available to Trade</p>
                        <p className="text-[#F4FFFF] ">0.000</p>
                    </div>
                    <div className="flex justify-between items-center text-[18px]">
                        <p className="text-[#537374] ">Current Position</p>
                        <p className="text-[#F4FFFF] ">0.0000 ETH</p>
                    </div>

                    <div className="market-btn">
                        <p>Size</p>
                        <button className="flex gap-2 items-center">
                            <span className="text-slate-100">ETH</span>
                            <FaChevronDown />
                        </button>
                    </div>

                    <div className="py-4">
                        <input type="range" min="0" max="100" value="80" className="range range-success" step="25" />
                        <div class="flex w-full justify-between px-2 text-xs text-success">
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                        </div>
                    </div>

                    <div className="text-[#F4FFFF] flex-col flex gap-2">
                        <div>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox border"/>
                                <span>Reduce Only</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox border"/>
                                <span>Take Profit / Stop Loss</span>
                            </label>
                        </div>
                    </div>

                    <div className="py-4">
                        <div className="market-divider"></div>
                    </div>

                    <div className="space-y-1">
                    <div className="flex justify-between items-center text-[18px]">
                        <p className="text-[#537374] ">Liquidation Price</p>
                        <p className="text-[#F4FFFF] ">N/A</p>
                    </div>
                    <div className="flex justify-between items-center text-[18px]">
                        <p className="text-[#537374] ">Order Value</p>
                        <p className="text-[#F4FFFF] ">N/A</p>
                    </div>
                    <div className="flex justify-between items-center text-[18px]">
                        <p className="text-[#537374] ">Margin Required</p>
                        <p className="text-[#F4FFFF] ">N/A</p>
                    </div>
                    
                    <div className="flex justify-between items-center text-[18px]">
                        <p className="text-[#537374] ">Slip Page</p>
                        <p className="text-[#50D2C1] ">Est: 0% / Max: 8.00%</p>
                    </div>
                    <div className="flex justify-between items-center text-[18px]">
                        <p className="text-[#537374] ">Fees</p>
                        <p className="text-[#F4FFFF] ">0.0350% / 0.0100%</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Market;