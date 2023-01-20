import { useEffect, useState } from "react";
import axios from 'axios';
import {FoodCategoryShow} from './FoodCategoryShow'
import "../styles.css"

//import React from "react
export const FoodCategory = () => {

    const [categories,setCategories] = useState();
    // const [chair,setChair] = useState();

    const fetchCategoryDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/category`)
          .catch(error => console.log(error));
        const data = await res.data;
        // console.log(data[0].chair);
        // setChair(data[0].chair);
        // console.log(data);
        return data;
      }
    

    useEffect(()=>{
        fetchCategoryDetails().then(data=>setCategories(data));
        // console.log(tables);
    },[]);

    return (
        <>
            <div className="tableDetail"    >
                {categories && categories.map((category,index) => (
                    <FoodCategoryShow
                        categoryId={category._id}
                        categoryName={category.name}
                    />
                ))}
            </div>
        </>
    );
}