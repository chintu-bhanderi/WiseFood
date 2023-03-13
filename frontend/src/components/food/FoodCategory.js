import { useEffect, useState } from "react";
import {FoodCategoryShow} from './FoodCategoryShow'
import "../styles.css"
import "../../styles/category.css";
import { fetchCategoryDetails } from "../../store/actions/foodAction";

export const FoodCategory = () => {

    const [categories,setCategories] = useState();

    useEffect(()=>{
        fetchCategoryDetails().then(data=>setCategories(data));
    },[]);

    return (
        <>
            <h1 class="mainHeading">Categories</h1>
            <br/>
            <br/>
            <ul class="cards">
                {categories && categories.map((category,index) => (
                    <FoodCategoryShow
                        categoryId={category._id}
                        categoryName={category.name}
                    />
                ))}
            </ul>       
        </>
    );
}