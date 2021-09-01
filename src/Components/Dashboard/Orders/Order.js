import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Order = ({ orderInfo }) => {
    console.log('orderinfo', orderInfo);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>


            {loggedInUser &&

                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-header text-danger">
                        <i class="bi bi-hourglass-bottom"></i> Pending
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <b>Your name:</b>  {orderInfo.Name}</li>
                        <li class="list-group-item"><b>Device Type:</b> {orderInfo.DeviceName}</li>
                        <li class="list-group-item"><b>Description :</b> {orderInfo.discretion}</li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Order;