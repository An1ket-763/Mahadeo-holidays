import './App.css';
import Navbar from "./components/navbar.jsx";
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Packages from './components/packages.jsx';
import Package1 from './components/package1.jsx';
import Package2 from './components/package2.jsx';
import Footer from './components/footer.jsx';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Packages />
            <Package1 />
            <Package2 />
            <Footer />
        </>
    );
}

export default App;
