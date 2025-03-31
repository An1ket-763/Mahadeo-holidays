import { packagesData } from './data.js';
import './packages.css';
export default function Packages() {
    return (
        <div className="container-fluid package">
            <div className="title">
                <h2>Our Popular Packages</h2>
            </div>
            <div className="row mx-auto" id="packages">
                {packagesData.map((pkg) => (
                    <div className="col-md-6" key={pkg.id}>
                        <div className="card-deck d-flex">
                            <div className="card">
                                <img className="card-img-top" src={pkg.imgSrc} alt={pkg.altText} />
                                <div className="card-body">
                                    <p className="card-text">{pkg.description}</p>
                                </div>
                                <div className='link'>
                                    <a href={pkg.link}>Explore Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
