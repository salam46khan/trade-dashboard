import BalanceTable from "../../components/BalanceTable/BalanceTable";
import OrderBook from "../../components/OrderBook/OrderBook";
import TreadChart from "../../components/TreadChart/TreadChart";
import './Tread.css'
const Tread = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 overflow-hidden">
            <div className="w-full md:w-2/3 overflow-hidden">
                <TreadChart></TreadChart>

                <div className="w-full">
                    <BalanceTable></BalanceTable>
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <OrderBook></OrderBook>
            </div>
        </div>
    );
};

export default Tread;