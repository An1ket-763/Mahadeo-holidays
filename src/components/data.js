export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" }
];

export const ABOUT_DATA = {
    title: "MAHADEO HOLIDAY TOUR & TRAVELERS",
    description: "We are an official booking partner for Wet N Joy and other leading water parks, offering customers the best deals on tickets and packages. Our goal is to make water park experiences more affordable and hassle-free by providing exclusive discounts and value-packed offers. Whether you're planning a fun family outing, a school trip, a corporate event, or a large group visit, we ensure you get the best rates available. Our customized group packages are designed to offer maximum benefits, including priority entry, meal inclusions, and special offers that enhance the overall experience.",
    image: "./images/img-2.jpg"
};

export const packagesData = [
    {
        id: 1,
        imgSrc: "/images/img-4.avif",
        altText: "Wet&Joy-Img",
        description: "Wet’nJoy Lonavala, located in the lush Western Ghats, is a popular destination for Mumbai and Pune residents, and for good reason! With its 25+ international rides, including India’s largest wave pool at 60,000 square feet, there’s something for everyone at Wet’nJoy.",
        link: "#package-1"
    },
    {
        id: 2,
        imgSrc: "/images/img-3.jpg",
        altText: "Imagica-Img",
        description: "Imagicaa is a themed entertainment destination featuring multiple themed experiences, an on-premise hotel, unique characters, innovative and unique attractions, thrilling rides and shows, meeting spaces, and major events – it’s a place for all seasons, all interests, and all ages.",
        link: "#package-2"
    }
];

export const amusementData = [
    { description: "4th to 12th Grade Students (Lunch + Tea)", rate: "1050" },
    { description: "Sr. College Students (Upto 22 yrs maximum, Lunch + Tea included)", rate: "1150" },
    { description: "Teachers (Lunch + Tea/300 Food Coupon) Free Teacher Ratio in case of Students Group", rate: "1250 (15:1)" },
];

export const waterParkData = [
    { description: "5th to 12th Grade Students (Lunch + Tea)", rate: "1050" },
    { description: "Sr. College Students (Upto 22 yrs maximum, Lunch + Tea included)", rate: "1150" },
    { description: "Teachers (Lunch + Tea/300 Food Coupon) Free Teacher Ratio in case of Students Group", rate: "1250 (15:1)" },
];

export const comboData = [
    { description: "5th to 12th Grade Students (Lunch + Tea)", rate: "1450" },
    { description: "Sr. College Students (Upto 22 yrs maximum, Lunch + Tea included)", rate: "1550" },
    { description: "Teachers (Lunch + Tea/300 Food Coupon) Free Teacher Ratio in case of Students Group", rate: "1550 (15:1)" },
];

export const packageData = [
    {
        key: "amusement",
        title: "Amusement Park",
        description: "Enjoy thrilling rides and a day full of excitement.",
        image: "/images/bgimg-3.jpg",
        data: amusementData,
    },
    {
        key: "water",
        title: "Water Park",
        description: "Cool off with water slides, water rides, and pools.",
        image: "/images/bgimg-2.jpeg",
        data: waterParkData,
    },
    {
        key: "combo",
        title: "Both (Combo Ticket)",
        description: "Get the best of both worlds with a combo ticket.",
        image: "/images/bgimg-1.jpg",
        data: comboData,
    },
];

export const imagicaPackages = {
    themePark: [
        { ticketType: "Regular Ticket", category: "General (5 yrs & above)", discount: "20%", price: "₹1421" },
        { ticketType: "Regular Ticket", category: "Sr. Citizen (60 yrs & above)", discount: "20%", price: "₹728" },
        { ticketType: "Regular Ticket", category: "Pre-Schooler (3-4 yrs)", discount: "-", price: "₹589" },
        { ticketType: "Regular Ticket", category: "College Special", discount: "-", price: "₹869" },
        { ticketType: "Express Ticket", category: "General (5 yrs & above)", discount: "20%", price: "₹2286" },
        { ticketType: "Express Ticket", category: "Sr. Citizen (60 yrs & above)", discount: "20%", price: "₹1594" },
        { ticketType: "Happy Tuesday (Regular Ticket)", category: "All Tier-1 (upto 1000 tickets)", discount: "-", price: "₹1031" },
        { ticketType: "Happy Tuesday (Regular Ticket)", category: "All Tier-2 (above 1000 tickets)", discount: "-", price: "₹1139" },
        { ticketType: "Happy Tuesday (Express Ticket)", category: "All Tier-2 (upto 1000 tickets)", discount: "-", price: "₹2113" },
        { ticketType: "Happy Tuesday (Express Ticket)", category: "All Tier-2 (above 1000 tickets)", discount: "-", price: "₹2221" },
    ],
    waterPark: [
        { ticketType: "Regular Ticket", category: "General (6 yrs & above)", discount: "20%", price: "₹1161" },
        { ticketType: "Regular Ticket", category: "Sr. Citizen (60 yrs & above)", discount: "20%", price: "₹728" },
        { ticketType: "Regular Ticket", category: "College Special", discount: "-", price: "₹858" },
        { ticketType: "Express Ticket", category: "General (6 yrs & above)", discount: "20%", price: "₹1767" },
        { ticketType: "Express Ticket", category: "Sr. Citizen (60 yrs & above)", discount: "20%", price: "₹1334" },
        { ticketType: "Wat a Wednesday (Regular Ticket)", category: "All Tier-1 (upto 250 tickets)", discount: "-", price: "₹706" },
        { ticketType: "Wat a Wednesday (Regular Ticket)", category: "All Tier-2 (above 250 tickets)", discount: "-", price: "₹815" },
        { ticketType: "Wat a Wednesday (Express Ticket)", category: "All Tier-1 (upto 250 tickets)", discount: "-", price: "₹1464" },
        { ticketType: "Wat a Wednesday (Express Ticket)", category: "All Tier-2 (upto 250 tickets)", discount: "-", price: "₹1572" },
    ],
    snowPark: [
        { ticketType: "Regular Ticket", category: "Snow Park Add on", discount: "-", price: "₹274" },
    ],
};

export const packages = [
    {
        id: "amusement",
        title: "Amusement Park",
        imgSrc: "/images/bgimg-4.avif",
        description: "Enjoy thrilling rides and a day full of excitement.",
        data: imagicaPackages.themePark
    },
    {
        id: "water",
        title: "Water Park",
        imgSrc: "/images/bgimg-5.jpg",
        description: "Cool off with water slides, water rides, and pools.",
        data: imagicaPackages.waterPark
    },
    {
        id: "snow",
        title: "Snow Park Add-on",
        imgSrc: "/images/bgimg-6.jpg",
        description: "Experience the joy of snow at -5°C with real snow!",
        data: imagicaPackages.snowPark
    }
];
