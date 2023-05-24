import { Link } from "react-router-dom";
import logo from '../resources/eelogocopy.png';

export default function Navbar() {

    return (
        <nav className="nav">
            <div className="site-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <div>
                <ul id="navul">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/forecasting">CPI Forecast</Link>
                    </li>
                    <li>
                        <Link to="/inflation">Inflation Rate</Link>
                    </li>
                    <li>
                        <Link to="/add-analysis">Add Analysis</Link>
                    </li>
                    <li>
                        <Link to="/view-analysis">View Analysis</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )

}