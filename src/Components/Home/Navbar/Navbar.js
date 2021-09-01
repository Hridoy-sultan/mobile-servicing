import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="  navbar navbar-expand-lg navbar-light bg-primary ">
            <div className="  container-fluid">
                <div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="m-auto navbar-nav ">
                        <Link className="text-decoration-none" to='/'>
                            <a className="nav-link text-white  m-3  active">Home</a>
                        </Link>

                        <Link className="text-decoration-none" to='/'>
                            <a className="nav-link text-white  m-3  active">About</a>
                        </Link>
                        <Link className="text-decoration-none" to='/review'>
                            <a className="nav-link text-white  m-3  active">Review</a>
                        </Link>



                        {
                            loggedInUser.email ?

                                <div>
                                    <a onClick={() => setLoggedInUser({})} className="nav-link text-white m-3  active" aria-current="page" href="#">  Logout </a>


                                </div>
                                :
                                <div>
                                    <Link className="text-decoration-none" to='/login'>
                                        <a className="nav-link text-white  m-3  active">login</a>
                                    </Link>

                                </div>


                        }


                        <div>
                            <Link className="text-decoration-none" to='/dashboard'>
                                <a className="nav-link text-white  m-3  active">Dashboard</a>
                            </Link>
                            <h3 className='text-warning'>{loggedInUser.displayName}</h3>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;