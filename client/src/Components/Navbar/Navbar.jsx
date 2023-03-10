import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import './Navbar.scss';
import { Badge } from '@mui/material';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="top">
                <img src="/img/logo.png" alt='' />
            </div>
            <div className="bottom">
                <div className="left">

                </div>
                <div className="mid">
                    <div className="menu-icon left" >
                        <SearchIcon />
                    </div>
                    <div className="menu-item" >
                        <Link to='/' >
                            Home
                        </Link>
                    </div>
                    <div className="menu-item" >
                        <Link to='/men' >
                            Men
                        </Link>
                    </div>
                    <div className="menu-item" >
                        <Link to='/women' >
                            Women
                        </Link>
                    </div>
                    <div className="menu-item" >
                        <Link to='/footwear' >
                            Footwear
                        </Link>
                    </div>
                    <div className="menu-item" >
                        <Link to='jewelry' >
                            Jewelry
                        </Link>
                    </div>
                    <div className="menu-item" >
                        <Link to='/blog' >
                            Blog
                        </Link>
                    </div>
                    <div className="menu-item" >
                        <Link to='/aboutus' >
                            About Us
                        </Link>
                    </div>
                    <div className="menu-item" >
                        <Link to='/contact' >
                            Contact
                        </Link>
                    </div>
                    <div className="menu-icon right" >
                        <Badge badgeContent={4} color="success">
                            <ShoppingCartIcon />
                        </Badge>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    );
}

export default Navbar;