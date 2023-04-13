import { useEffect, useState } from "react";
import { FoodCategoryShow } from './FoodCategoryShow'
import { fetchCategoryDetails } from "../../store/actions/foodAction";
import "../../styles/category.css";

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