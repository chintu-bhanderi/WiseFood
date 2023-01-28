import { useEffect, useState } from "react";
import axios from 'axios';
import "../../styles/workerTypes.css";
import { WorkerTypeShow } from "./WorkerTypeShow";
import {USER_TYPE} from '../../store/types/authType'
import { useNavigate } from "react-router-dom";

export const WorkerTypeDetail = (props) => {
    const navigate = useNavigate();

    const [workerTypes,setWorkerTypes] = useState();
    const [selectType,setSelectType] = useState();

    const fetchWorkerTypesDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/worker`)  
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    useEffect(()=>{
        fetchWorkerTypesDetails().then((data)=>{
            setWorkerTypes([USER_TYPE,...data])
        });
    },[]);

    // useEffect(e()=>{
    //     if(selectType) navigate(`/auth/login/${selectType}`);
    // },[selectTyp]);
    

    return (
        <>
        <div class="heading">Login</div>
        <div class=" wrapper ">
        {
            workerTypes && workerTypes.map(workerType=>
                <WorkerTypeShow
                    type={workerType}
                    setSelectType={setSelectType}
                />
            )
        }
        </div>
        </>
    );
}