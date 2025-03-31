import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./form.css";

export default function BookingForm({ onClose }) {
    const [selectedDestination, setSelectedDestination] = useState("Select the destination");
    const [visitDate, setVisitDate] = useState(new Date().toISOString().split("T")[0]);
    const [mobileNumber, setMobileNumber] = useState("");

    const handleSelect = (eventKey) => {
        setSelectedDestination(eventKey);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedDestination === "Select the destination" || mobileNumber.trim() === "") {
            alert("Please fill all details before continuing.");
            return;
        }

        const whatsappNumber = "919689084295";

        const message = `Hello! I want to book a visit to Wet'n Joy\n\n Destination: ${selectedDestination}\n Visit Date: ${visitDate}\n Mobile no.: ${mobileNumber}`;

        const encodedMessage = encodeURIComponent(message);

        window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <span className="close-btn" onClick={onClose}>x</span>
                <h3>Details</h3>
                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Destination:
                            <div className="dropdown-container">
                                <DropdownButton id="dropdown-basic-button" title={selectedDestination} onSelect={handleSelect}>
                                    <Dropdown.Item eventKey="Water Park">Water Park</Dropdown.Item>
                                    <Dropdown.Item eventKey="Amusement Park">Amusement Park</Dropdown.Item>
                                    <Dropdown.Item eventKey="Both (Combo Ticket)">Both (Combo Ticket)</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Visit Date:
                            <input type="date" value={visitDate} onChange={(e) => setVisitDate(e.target.value)} required />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Mobile Number:
                            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Contact number" required />
                        </label>
                    </div>

                    <button className="submit-btn" type="submit">Continue</button>
                </form>
            </div>
        </div>
    );
}



