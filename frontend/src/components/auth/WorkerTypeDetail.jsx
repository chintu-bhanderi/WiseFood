import { useEffect, useState } from "react";
import { USER_TYPE } from '../../store/types/authType'
import { WorkerTypeShow } from "./WorkerTypeShow";
import { getWorkerTypes } from "../../store/actions/authAction";
import "../../styles/workerTypes.css";

export const WorkerTypeDetail = (props) => {

    const [workerTypes, setWorkerTypes] = useState();

    useEffect(() => {
        getWorkerTypes().then((data) => {
            setWorkerTypes([USER_TYPE, ...data])
        });
    }, []);

    return (
        <>
            <div class="heading">Login</div>
            <div class=" wrapper ">
                {
                    workerTypes && workerTypes.length > 0 && workerTypes.map(workerType =>
                        <WorkerTypeShow
                            type={workerType}
                        />
                    )
                }
            </div>
        </>
    );
}
