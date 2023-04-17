import { useEffect, useState } from "react";
import axios from 'axios';
import { WaiterShow } from './WaiterShow'
import "../styles.css"

export const WaiterDetail = (props) => {
    const [waiters, setWaiters] = useState();

    const fetchWaitersDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/worker-action/waiter`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    useEffect(() => {
        fetchWaitersDetails().then(data => setWaiters(data));
    }, []);

    return (
        <>
            <div>
                <h1>All Chefs</h1>
                <div className="ordersDetail">
                    {waiters && waiters.map((waiter, index) => (
                        <WaiterShow
                            chefId={waiter._id}
                            name={waiter.name}
                            load = {waiter.load}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}