import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'


const Header = () => {



    const menuItems = <>
        <li className='font-semibold'><Link to={'/home'}>Home</Link></li>
        <li className='font-semibold'><Link to={'/services'}>Services</Link></li>
        <li className='font-semibold'><Link to={'/login'}>Login</Link></li>
        <li className='font-semibold'><Link to={'/signup'}>Sign Up</Link></li>
        {/* <li>
            {
                user?.uid ?
                    <>
                        <button onClick={handleLogOut}
                            aria-label='Logout'
                            title='Logout'
                            className='border font-semibold'
                        >
                            Logout
                        </button>
                        <Link to={'/orders'} className='font-semibold'>Orders</Link>
                    </>
                    :
                    <>
                        <Link
                            to='/login'
                            aria-label='Log In'
                            title='Log In'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            LogIn
                        </Link>
                    </>

            }
        </li>


        <li>{
            // user?.uid ?
            //     <>
            //         <img src= {user?.photoURL}  alt="" />
            //         <button className='font-semibold btn text-white' onClick={handleLogOut}>Log Out</button>
            //     </>
            //     :
            //     <li className='font-semibold'><Link to={'/login'}>Login</Link></li>

            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                {
                    user?.photoURL ?
                        <img className='rounded-full' style={{ height: '40px' }} src={user.photoURL} alt="" /> :
                        <div className="tooltip tooltip-bottom" data-tip="Profile">
                            <FaUserAlt></FaUserAlt>
                        </div>
                }
            </div>
        }
        </li> */}



    </>





    return (
        <div className='bg-black text-white'>
            <div className="navbar container mx-auto">
                <div className="flex-1 ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 mr-auto">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <img className='w-24' src= {logo} alt="" />
                    <Link to={'/home'} className="btn btn-ghost normal-case text-xl">Wildlife Photographer</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuItems
                        }
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;