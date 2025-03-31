import { useState } from "react";
import "./package1.css";
import BookingForm from "./form.jsx";
import { packageData } from "./data.js";

function PackageTable({ title, data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{title}</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.description}</td>
                        <td>{row.rate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default function Package1() {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="container-fluid bg-primary" id="package-1">
            <h2 className="title">Wet'n Joy Packages</h2>
            <div className="card-deck">
                {packageData.map((pkg, index) => (
                    <div className="card mx-auto" key={index}>
                        <img className="card-img-top" src={pkg.image} alt={pkg.title} />
                        <div className="card-body">
                            <h5 className="card-title">{pkg.title}</h5>
                            <p className="card-text">{pkg.description}</p>
                            <button onClick={() => setSelectedPackage(pkg.key)}>View Package</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPackage && (
                <>
                    <div className="package-overlay" onClick={() => setSelectedPackage(null)}></div>
                    <div id="package-details">
                        <div className="heading">
                            <span className="close-btn" onClick={() => setSelectedPackage(null)}>x</span>
                            <h2>Selected Package</h2>
                        </div>
                        <PackageTable title={packageData.find(pkg => pkg.key === selectedPackage).title}
                            data={packageData.find(pkg => pkg.key === selectedPackage).data} />
                        <div className="custom-btn">
                            <button className="book-btn" onClick={() => setShowPopup(true)}>Book Now</button>
                        </div>
                        {showPopup && <BookingForm onClose={() => setShowPopup(false)} />}
                    </div>
                </>
            )}
        </div>
    );
}

