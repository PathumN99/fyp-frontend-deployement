import { Link } from 'react-router-dom';
import pic from "../resources/econ1.jpg"

export default function Home() {

    return (
        <div className="home">
            <div className="home1">
                <h1 className="heading">Welcome!</h1>
                <p>
                    Econ Explorer provides you with the latest insights and analysis on inflation trends using
                    consumer price index forecast.
                    And it strives to deliver accurate and timely information to help you stay
                    informed and make well-informed decisions in today's dynamic and fast-paced economy.
                    Whether you're an investor, entrepreneur, policy-maker, or simply interested in the world
                    of economics, Econ Explorer offers a wealth of resources and expertise to help you navigate the
                    ever-changing landscape of the global economy.
                </p>
                <Link to={"/about"}>
                    <button className="button">Get Started!</button>
                </Link>

            </div>
            <div className="pic1">
                <img src={pic} alt="econ1" />
            </div>
        </div>
    )
}