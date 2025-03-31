import './about.css';
import { ABOUT_DATA } from './data.js';

export default function About() {
    return (
        <div className="container-fluid" id="about">
            <div className="row mx-auto">
                <div className="col-md-6">
                    <img src={ABOUT_DATA.image} alt="about-img" />
                </div>
                <div className="col-md-6">
                    <h3>{ABOUT_DATA.title}</h3>
                    <p className="information">{ABOUT_DATA.description}</p>
                </div>
            </div>
        </div>
    );
}

