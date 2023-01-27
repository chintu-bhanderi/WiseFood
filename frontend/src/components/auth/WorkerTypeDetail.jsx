import { useEffect, useState } from "react";
import axios from 'axios';
import "../../styles/workerTypes.css";
import { WorkerTypeShow } from "./WorkerTypeShow";

export const WorkerTypeDetail = (props) => {

    const [workerTypes,setWorkerTypes] = useState();

    const fetchWorkerTypesDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/worker`)  
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    useEffect(()=>{
        fetchWorkerTypesDetails().then((data)=>{
            setWorkerTypes(["User",...data])
        });
    },[]);

    return (
        <>
        <div class="heading">Login</div>
        <div class=" wrapper ">

        {
            workerTypes && workerTypes.map(workerType=>
                <WorkerTypeShow
                    type={workerType}
                />
            )
        }
        </div>
        </>
    );
}