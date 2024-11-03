import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const OrderTable = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch('/order-fake-data.json')
            .then(res => res.json())
            .then(data => setTableData(data))
    }, [])
    return (
        <div>
            <div className="flex items-center justify-between py-3">
                <button className="flex items-center gap-2">
                    <span className="text-slate-100">0.1</span>
                    <FaChevronDown />
                </button>
                <button className="flex items-center gap-2">
                    <span className="text-slate-100">ETH</span>
                    <FaChevronDown />
                </button>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-sm">
                        {/* head */}
                        <thead>
                            <tr className="text-[#537374] text-[14px]">
                                <th>Price</th>
                                <th>Size (ETH)</th>
                                <th>Total (ETH)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData?.map(tData => <tr key={tData.id}>
                                    <td className="text-pink-800">{tData.price}</td>
                                    <td className="text-slate-200">{tData.size}</td>
                                    <td className="text-slate-200">{tData.order}</td>
                                </tr>)
                            }
                            
                            <tr className="bg-[#80ffff10] text-slate-200">
                                <td>Spread</td>
                                <td>0.1</td>
                                <td>0.01%</td>
                            </tr>
                            
                            {
                                tableData?.map(tData => <tr key={tData.id}>
                                    <td className="text-teal-400">{tData.price}</td>
                                    <td className="text-slate-200">{tData.size}</td>
                                    <td className="text-slate-200">{tData.order}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderTable;