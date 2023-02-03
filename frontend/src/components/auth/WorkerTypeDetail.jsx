import { useEffect, useState } from "react";
import axios from 'axios';
import "../../styles/workerTypes.css";
import { WorkerTypeShow } from "./WorkerTypeShow";
import {USER_TYPE} from '../../store/types/authType'
import { getWorkerTypes } from "../../store/actions/authAction";
import { Navbar } from "../Navbar";

export const WorkerTypeDetail = (props) => {

    const [workerTypes,setWorkerTypes] = useState();

    useEffect(()=>{
        getWorkerTypes().then((data)=>{
            setWorkerTypes([USER_TYPE,...data])
        });
    },[]);    

    return (
        <>
        {/* <Navbar /> */}
        <div class="heading">Login</div>
        <div class=" wrapper ">
        {
            workerTypes && workerTypes.length > 0 && workerTypes.map(workerType=>
                <WorkerTypeShow
                    type={workerType}
                />
            )
        }
        </div>
        </>
    );
}
