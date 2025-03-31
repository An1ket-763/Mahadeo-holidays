import { useState } from "react";
import "./package2.css";
import BookingForm2 from "./form2.jsx";
import { packages } from "./data.js";

function ImagicaTable({ title, data }) {
    return (
        <div className="imagica-table">
            <table>
                <thead>
                    <tr>
                        <th>Ticket Type</th>
                        <th>Category</th>
                        <th>Discount</th>
                        <th>Price (incl. GST)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.ticketType}</td>
                            <td>{row.category}</td>
                            <td>{row.discount}</td>
                            <td>{row.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Package2() {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="container-fluid bg-primary" id="package-2">
            <h2 className="title">Imagica Packages</h2>
            <div className="card-deck">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="card mx-auto">
                        <img className="card-img-top" src={pkg.imgSrc} alt={pkg.title} />
                        <div className="card-body">
                            <h5 className="card-title">{pkg.title}</h5>
                            <p className="card-text">{pkg.description}</p>
                        </div>
                        <button onClick={() => setSelectedPackage(pkg)}>View Package</button>
                    </div>
                ))}
            </div>

            {selectedPackage && (
                <>
                    <div className="package-overlay" onClick={() => setSelectedPackage(null)}></div>
                    <div id="package-details2">
                        <div className="heading">
                            <span className="close-btn" onClick={() => setSelectedPackage(null)}>×</span>
                            <h2>{selectedPackage.title}</h2>
                        </div>
                        <ImagicaTable title={selectedPackage.title} data={selectedPackage.data} />
                        <div className="custom-btn">
                            <button className="book-btn" onClick={() => setShowPopup(true)}>Book Now</button>
                        </div>
                        {showPopup && <BookingForm2 onClose={() => setShowPopup(false)} />}
                    </div>
                </>
            )}
        </div>
    );
}
