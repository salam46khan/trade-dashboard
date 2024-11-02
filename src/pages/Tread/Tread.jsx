import TreadChart from "../../components/TreadChart/TreadChart";
import './Tread.css'
const Tread = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3">
                <TreadChart></TreadChart>
            </div>
            <div className="w-full md:w-1/3  border"></div>
        </div>
    );
};

export default Tread;