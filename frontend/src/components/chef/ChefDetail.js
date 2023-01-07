import { useEffect, useState } from "react";
import axios from 'axios';
import { ChefShow } from './ChefShow'
import "../styles.css"

//import React from "react"
export const ChefDetail = (props) => {
    // store all orders..
    const [chefs, setChefs] = useState();

    // fetch all orders ..
    const fetchChefDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/chef`)
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
                            load = {chef.load}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}