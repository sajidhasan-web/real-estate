import { Link, useLoaderData } from "react-router-dom";
import SingleDataCard from "../commons/SingleDataCard/SingleDataCard";


const VacationRentals = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                data.map(singleData => <Link to={`${singleData.id}`} key={singleData.id}>
                <SingleDataCard singleData={singleData}></SingleDataCard>
                </Link>)
            }
        </div>
    </div>
    );
}
export default VacationRentals;