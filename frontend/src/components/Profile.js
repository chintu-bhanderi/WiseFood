import React from "react";
import { useSelector } from "react-redux";
import { CHEF_TYPE, USER_TYPE, WAITER_TYPE } from "../store/types/authType";

export const Profile = () => {
    const {myInfo} = useSelector(state=>state.auth);
    return (
       <>
            <div className="bg-light">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 mt-5 pt-5">
                            <div className="row z-depth-3">
                                <div className="col-sm-4 bg-info rounded-left">
                                    <div className="card-block text-center text-white">
                                        <i className="fas fa-solid fa-user fa-7x mt-5"></i>
                                        { myInfo.type===USER_TYPE &&<h2 className="font-weight-bold mt-4">{myInfo.firstName}</h2> }
                                        { myInfo.type!==USER_TYPE &&<h2 className="font-weight-bold mt-4">{myInfo.name}</h2> }
                                        <a href="/"><i className="fas fa-edit fa-2x mb-4"></i></a>
                                    </div>
                                </div>
                                <div className="col-sm-8 bg-white rounded-right">
                                <h3 className="mt-3 text-center">Information</h3>
                                <hr className="badge-primary mt-8 w-20" />
                                <div className="row">
                                    <div className="col-sm-6">
                                    { myInfo.type===USER_TYPE && <p className="font-weight-bold">FirstName : </p> }
                                    { myInfo.type!==USER_TYPE && <p className="font-weight-bold">Name : </p> }
                                    { myInfo.type===USER_TYPE && <h6 className="text-muted">{myInfo.firstName}</h6>}
                                    { myInfo.type!==USER_TYPE && <h6 className="text-muted">{myInfo.name}</h6>}
                                    </div>
                                    { myInfo.type===USER_TYPE && <div className="col-sm-6">
                                            <p className="font-weight-bold">LastName: </p>
                                            <h6 className="text-muted">{myInfo.lastName}</h6>
                                        </div>
                                    }
                                    { myInfo.type!==USER_TYPE && <div className="col-sm-6">
                                            <p className="font-weight-bold">User Type : </p>
                                            <h6 className="text-muted">{myInfo.type}</h6>
                                        </div>
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Email : </p>
                                        <h6 className="text-muted">{myInfo.email}</h6>
                                    </div>
                                </div>
                                { myInfo.type===USER_TYPE && <div className="row">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Address: </p>
                                        <h6 className="text-muted">{myInfo.address}</h6>
                                    </div>
                                </div>}
                                { (myInfo.type===CHEF_TYPE || myInfo.type===WAITER_TYPE) && <div className="row">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">TotalLoad : </p>
                                        <h6 className="text-muted">{myInfo?.totalLoad}</h6>
                                    </div>
                                </div>}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </> 
    )
}