import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <h1>Our Location</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3275551301413!2d73.74840029678954!3d18.604331199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97c7da6b76f%3A0x412a4352c33f2817!2sCOMMERCIAL%20BUILDING%2C%20VAASTU%20VIVA%2C%20Shankar%20Kalat%20Nagar%2C%20Wakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1742800375376!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="container" id="contact">
                <div className="row mx-auto">
                    <div className="col-sm-3">
                        <img src="/images/Mlogo.png" alt="Logo" />
                        <p className="info">Mahadeo Holidays</p>
                    </div>
                    <div className="col-sm-3">
                        <h2>Link</h2>
                        <p><a href="#home">Home</a></p>
                        <p><a href="#about">About us</a></p>
                        <p><a href="#packages">packages</a></p>
                    </div>
                    <div className="col-sm-3">
                        <h2>Popular Destination</h2>
                        <p><a href="#package-1">Wet 'n Joy</a></p>
                        <p><a href="#package-2">Imagica</a></p>
                    </div>
                    <div className="col-sm-3">
                        <h2>Contacts</h2>
                        <p className="number"><a href="tel:+91968908495">+91 968908495</a></p>
                        <p><a href="mailto:mahadeoholidays@gmail.com">mahadeoholidays@gmail.com</a></p>
                    </div>
                </div>
                <hr />
                <p className="copyright"> &copy; 2025<a href="https://interface11.org/">Mahadeo Holidays.</a>All Right Reserved </p>
            </div>
        </footer>
    );
}