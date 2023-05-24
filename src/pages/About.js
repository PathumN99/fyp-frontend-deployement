import { Link } from 'react-router-dom';
import pic from "../resources/econ2.png"

export default function About() {

    return (
        <div className="home">
            <div className="home1">
                <h1 className="heading">Get Started!</h1>
                <p>Navigate through the navigation panel to checkout the features</p>
                <ul className='about-ul'>
                    <li>Checkout the consumer price index (CPI) values which are forecast for next two years</li>
                    <li>Review the calculated inflation rates for each month. Be informed. Make decisions</li>
                    <li>Submit your review or insight for each month. Share your knowlege with others</li>
                    <li>View the reviews and insights which have been added by the others. Extract whats useful</li>
                </ul>
                <Link to={"/home"}>
                    <button className="button">Back to Home!</button>
                </Link>

            </div>
            <div className="pic1">
                <img src={pic} alt="econ1" />
            </div>
        </div>


    )
}