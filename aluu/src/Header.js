import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="ud-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <h3 style={{ color: "white" }} >@ aluu</h3>
                                </Link>
                                <button className="navbar-toggler">
                                    <span className="toggler-icon"> </span>
                                    <span className="toggler-icon"> </span>
                                    <span className="toggler-icon"> </span>
                                </button>
                                <div className="navbar-collapse">
                                    <ul id="nav" className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <Link className="ud-menu-scroll" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#contact">Contact</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="navbar-btn d-none d-sm-inline-block">
                                    <a href="/login" className="ud-main-btn ud-login-btn">
                                        Sign In
                                    </a>
                                    <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
                                        Sign Up
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
