import product from '../assets/product_inventory.png'
import spotify_clone from '../assets/spotify.jpg'
import mini_blog from "../assets/mini_Blog.jpg"
import logoImg from '../assets/logo_pic.png'
import stayfinderImg from '../assets/stayfinder.jfif'
import testopsImg from '../assets/testops.jfif'
import powerBiImg from '../assets/power-bi.jfif'
import poetryImg from '../assets/poetry.jfif'
import osImg from '../assets/os.jfif'
import instagramImg from '../assets/instagram.jfif'
import contactBookImg from '../assets/contact-book.jfif'
import tictactoeImg from '../assets/tictactoe.png'
import dalgonaImg from '../assets/dalgona.png'


export const projects = [
    {
        id: 1,
        title: "Product Inventory Management",
        description:
            "Product Inventory Management System is a production-ready, full-stack web application built on the MERN stack (MongoDB, Express.js, React, Node.js). It provides businesses with a centralized platform to manage their product catalog, monitor real-time stock levels, track stock movements with an atomic audit trail, and gain inventory insights through an interactive analytics dashboard.",
        github:
            "https://github.com/mshahnawaz1202/Product-Inventory-Management-System",
        techUsed: [
            "Node JS",
            "Express JS",
            "Mongo DB",
            "JWT",
            "Bcrypt",
            "Jest",
            "Tailwind CSS"
        ],
        category: "Web",
        image: product,
    },

    {
        id: 2,
        title: "Spotify-Clone Backend",
        description:
            "Spotify Clone Backend is a robust, scalable REST API that powers a music streaming platform similar to Spotify. Built as a full-stack learning project, it demonstrates real-world backend engineering patterns including JWT-based cookie authentication, role-based access control, cloud media storage, and a clean MVC architecture with Express and MongoDB.",
        github:
            "https://github.com/mshahnawaz1202/Spotify-Clone-Backend",
        techUsed: [
            "React JS",
            "Vite",
            "Node JS",
            "Express JS",
            "Mongo DB",
            "JWT",
            "Bcrypt",
            "Jest",
            "Tailwind CSS"
        ],
        category: "Web",
        image: spotify_clone,
    },

    {
        id: 3,
        title: "Mini Blog",
        description:
            "A full-stack implemented Mini Blog website where users can create, update, and delete posts with a modern frontend and backend architecture.",
        github:
            "https://github.com/mshahnawaz1202/Backend/tree/main/04_Fullstack",
        techUsed: [
            "React JS",
            "Vite",
            "Node JS",
            "Express JS",
            "Mongo DB",
            "Tailwind CSS",
            "ImageKit"
        ],
        category: "Web",
        image: mini_blog,
    },

    {
        id: 4,
        title: "BOS Optics",
        description:
            "A full-stack Django e-commerce platform for an optical store. Customers can browse premium eyewear, search products, manage carts, place orders, book eye-care appointments, and read blog posts.",
        github:
            "https://github.com/mshahnawaz1202/BOS-Optics",
        techUsed: [
            "Python",
            "Django",
            "JavaScript",
            "SQLite",
            "HTML5",
            "CSS3"
        ],
        category: "Web",
        image: logoImg,
    },

    {
        id: 5,
        title: "StayFinder",
        description:
            "A full-featured Airbnb-inspired property booking Android app built with Kotlin and Jetpack Compose. Features Firebase authentication, real-time listings, Room/SQLite offline support, and rich UI components.",
        github:
            "https://github.com/mshahnawaz1202/Stay-Finder-Airbnb-Inspired-Property-Rental-Application-",
        techUsed: [
            "Kotlin",
            "Jetpack Compose",
            "Firebase",
            "Room/SQLite"
        ],
        category: "Mobile",
        image: stayfinderImg,
    },

    {
        id: 6,
        title: "TestOps & Automation Framework",
        description:
            "A comprehensive BDD Test Automation Framework for Web UI testing. Built with Java, Selenium WebDriver, Cucumber, and Allure Reports enabling clean, maintainable, and scalable automated test suites.",
        github:
            "https://github.com/mshahnawaz1202/TestOps-andAutomation-Framework",
        techUsed: [
            "Java",
            "Selenium",
            "Cucumber",
            "Allure"
        ],
        category: "Java",
        image: testopsImg,
    },

    {
        id: 7,
        title: "Mini Power BI",
        description:
            "A Power BI-style Data Analytics Dashboard built with Streamlit. Offers workflow to upload, clean, visualize, train ML models, predict, and chat with datasets.",
        github:
            "https://github.com/mshahnawaz1202/MiniPowerBI",
        techUsed: [
            "Python",
            "Streamlit",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "Matplotlib"
        ],
        category: "Python",
        image: powerBiImg,
    },

    {
        id: 8,
        title: "Arabic Poetry Management",
        description:
            "A sophisticated multi-layered Desktop Application for managing, analyzing, and exploring Arabic poetry. Built with JavaFX and 3-Tier Architecture.",
        github:
            "https://github.com/mshahnawaz1202/Arabic-Poetry-Management-System",
        techUsed: [
            "Java",
            "JavaFX",
            "MySQL",
            "Design Patterns"
        ],
        category: "Java",
        image: poetryImg,
    },

    {
        id: 9,
        title: "Mini Operating System",
        description:
            "A console-based mini OS simulator in C++ covering process management, memory management, scheduling algorithms, and utilities.",
        github:
            "https://github.com/mshahnawaz1202/Mini-Operating-System",
        techUsed: [
            "C++",
            "OS Concepts"
        ],
        category: "C++",
        image: osImg,
    },

    {
        id: 10,
        title: "Mini Instagram",
        description:
            "A C++ terminal simulation of Instagram with user registration, login, messaging, posts management, and friend requests.",
        github:
            "https://github.com/mshahnawaz1202/Mini-Instagram",
        techUsed: [
            "C++",
            "Data Structures"
        ],
        category: "C++",
        image: instagramImg,
    },

    {
        id: 11,
        title: "Contact Book Application",
        description:
            "A console-based contact management system built in C++ using OOP principles. Supports CRUD operations, file persistence, and searching.",
        github:
            "https://github.com/mshahnawaz1202/Contact-Book-Application",
        techUsed: [
            "C++",
            "OOP"
        ],
        category: "C++",
        image: contactBookImg,
    },

    {
        id: 12,
        title: "Tic Tac Toe",
        description:
            "A console-based Tic-Tac-Toe game developed in C++. Includes score tracking, match history storage, leaderboard functionality, and file handling.",
        github:
            "https://github.com/mshahnawaz1202/TicTacToe",
        techUsed: [
            "C++"
        ],
        category: "C++",
        image: tictactoeImg,
    },

    {
        id: 13,
        title: "Dalgona Challenge",
        description:
            "A terminal-based Dalgona shape guessing game implemented in Bash with single-player, multiplayer, and computer modes.",
        github:
            "https://github.com/mshahnawaz1202/DALGONA-CHALLENGE",
        techUsed: [
            "Bash",
            "WSL2"
        ],
        category: "Other",
        image: dalgonaImg,
    }
];