import { useEffect, useState } from "react";
import axios from 'axios';
import { ChefShow } from './ChefShow'
import "../styles.css"

export const ChefDetail = (props) => {
    const [chefs, setChefs] = useState();

    const fetchChefDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/worker-action/chef`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    useEffect(() => {
        fetchChefDetails().then(data => setChefs(data));
    }, []);

    return (
        <>
            <div>
                <h1>All Chefs</h1>
                <div className="ordersDetail">
                    {chefs && chefs.map((chef, index) => (
                        <ChefShow
                            chefId={chef._id}
                            name={chef.name}
                            load={chef.load}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}