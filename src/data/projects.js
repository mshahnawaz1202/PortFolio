import product from "../assets/product_inventory.png";
import spotify_clone from "../assets/spotify.jpg";
import mini_blog from "../assets/mini_Blog.jpg";
import logoImg from "../assets/logo_pic.png";
import stayfinderImg from "../assets/stayfinder.jfif";
import testopsImg from "../assets/testops.jfif";
import powerBiImg from "../assets/power-bi.jfif";
import poetryImg from "../assets/poetry.jfif";
import osImg from "../assets/os.jfif";
import instagramImg from "../assets/instagram.jfif";
import contactBookImg from "../assets/contact-book.jfif";
import tictactoeImg from "../assets/tictactoe.png";
import dalgonaImg from "../assets/dalgona.png";
import nyc from "../assets/nyc.jfif";
import smartCity from "../assets/smartCity.jfif";
import cse from "../assets/cse.jfif";
import api_banking from '../assets/api_banking.jfif'

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
            "Tailwind CSS",
            "React JS"
        ],
        category: "Web",
        image: product,
    },
    {
        id:2,
        title: "Banking System API",
        description: "A secure, production-ready REST API for a full-featured Banking System, built with Node.js, Express 5, MongoDB + Mongoose, JWT authentication, bcrypt password hashing, a token blacklist for logout security, a ledger system for audit trails, idempotency keys to prevent duplicate transactions, and Nodemailer email notifications.",
        github : "https://github.com/mshahnawaz1202/Banking-System",
        techUsed: ["Node JS","Express JS","Node Mailer","JWT","Mongoose","cookie-parser","bcryptjs"],
        category: "Web",
        image:api_banking,
    },
    {
        id: 3,
        title: "Spotify-Clone Backend",
        description:
            "Spotify Clone Backend is a robust, scalable REST API that powers a music streaming platform similar to Spotify. Built as a full-stack learning project, it demonstrates real-world backend engineering patterns including JWT-based cookie authentication, role-based access control, cloud media storage, and a clean MVC architecture with Express and MongoDB.",
        github: "https://github.com/mshahnawaz1202/Spotify-Clone-Backend",
        techUsed: [
            
            "Node JS",
            "Express JS",
            "Mongo DB",
            "JWT",
            "Bcrypt",
        ],
        category: "Web",
        image: spotify_clone,
    },
    {
        id: 4,
        title: "Smart City Diagnostic Engine",
        description:
            "The Smart City Diagnostic Engine is a modular environmental analytics system designed to detect pollution anomalies, model extreme hazard events, and analyze high-dimensional urban air quality data.This project simulates a real-world Smart City initiative where multi-gigabyte air quality data from 100 global sensor nodes (hourly recordings for 2025) is processed to extract actionable environmental insights.The system is built as a fully reproducible Python pipeline and deployed via an interactive Streamlit dashboard.",
        github: "https://github.com/mshahnawaz1202/Smart-City-Diagnostic-Engine",
        techUsed: [
            "Python",
            "NumPy",
            "Pandas",
            "Scikit-Learn",
            "Matplotlib",
            "Streamlit",
        ],
        category: "Data-Science",
        image: smartCity,
    },
    {
        id: 5,
        title: "Customer Segmentation & Recommendation Engine",
        description:
            "Developed an e-commerce customer intelligence system using transactional data to segment customers via RFM analysis and K-Means clustering, generate customer personas, and provide behavior-based product recommendations through an interactive Streamlit dashboard.",
        github: "https://github.com/mshahnawaz1202/Customer-Segmentation-Recommendation-Engine",
        techUsed: [
            "Python",
            "NumPy",
            "Pandas",
            "Scikit-Learn",
            "Matplotlib",
            "Streamlit",
        ],
        category: "Data-Science",
        image: cse,
    },
    {
        id: 6,
        title: "NYC Congestion Pricing Audit 2025",
        description:
            "A comprehensive data analysis pipeline to assess the impact of the Manhattan Congestion Relief Zone Toll (implemented January 5, 2025) on NYC's taxi industry.",
        github: "https://github.com/mshahnawaz1202/NYC-Congestion-Pricing-Audit",
        techUsed: ["DuckDB", "Python", "Matplotlib", "Streamlit"],
        category: "Data-Science",
        image: nyc,
    },
    {
        id: 7,
        title: "StayFinder",
        description:
            "A full-featured Airbnb-inspired property booking Android app built with Kotlin and Jetpack Compose. Features Firebase authentication, real-time listings, Room/SQLite offline support, and rich UI components.",
        github:
            "https://github.com/mshahnawaz1202/Stay-Finder-Airbnb-Inspired-Property-Rental-Application-",
        techUsed: ["Kotlin", "Jetpack Compose", "Firebase", "Room/SQLite"],
        category: "Mobile",
        image: stayfinderImg,
    },
    {
        id: 8,
        title: "BOS Optics",
        description:
            "A full-stack Django e-commerce platform for an optical store. Customers can browse premium eyewear, search products, manage carts, place orders, book eye-care appointments, and read blog posts.",
        github: "https://github.com/mshahnawaz1202/BOS-Optics",
        techUsed: ["Python", "Django", "JavaScript", "SQLite", "HTML5", "CSS3"],
        category: "Web",
        image: logoImg,
    },
    {
        id: 9,
        title: "TestOps & Automation Framework",
        description:
            "A comprehensive BDD Test Automation Framework for Web UI testing. Built with Java, Selenium WebDriver, Cucumber, and Allure Reports enabling clean, maintainable, and scalable automated test suites.",
        github: "https://github.com/mshahnawaz1202/TestOps-andAutomation-Framework",
        techUsed: ["Java", "Selenium", "Cucumber", "Allure"],
        category: "Java",
        image: testopsImg,
    },
    {
        id: 10,
        title: "Arabic Poetry Management",
        description:
            "A sophisticated multi-layered Desktop Application for managing, analyzing, and exploring Arabic poetry. Built with JavaFX and 3-Tier Architecture.",
        github: "https://github.com/mshahnawaz1202/Arabic-Poetry-Management-System",
        techUsed: ["Java", "JavaFX", "MySQL", "Design Patterns"],
        category: "Java",
        image: poetryImg,
    },
    {
        id: 11,
        title: "Mini Blog",
        description:
            "A full-stack implemented Mini Blog website where users can create, update, and delete posts with a modern frontend and backend architecture.",
        github: "https://github.com/mshahnawaz1202/Backend/tree/main/04_Fullstack",
        techUsed: [
            "React JS",
            "Vite",
            "Node JS",
            "Express JS",
            "Mongo DB",
            "Tailwind CSS",
            "ImageKit",
        ],
        category: "Web",
        image: mini_blog,
    },
    {
        id: 12,
        title: "Mini Power BI",
        description:
            "A Power BI-style Data Analytics Dashboard built with Streamlit. Offers workflow to upload, clean, visualize, train ML models, predict, and chat with datasets.",
        github: "https://github.com/mshahnawaz1202/MiniPowerBI",
        techUsed: [
            "Python",
            "Streamlit",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "Matplotlib",
        ],
        category: "Python",
        image: powerBiImg,
    },
    {
        id: 13,
        title: "Mini Operating System",
        description:
            "A console-based mini OS simulator in C++ covering process management, memory management, scheduling algorithms, and utilities.",
        github: "https://github.com/mshahnawaz1202/Mini-Operating-System",
        techUsed: ["C++", "OS Concepts"],
        category: "C++",
        image: osImg,
    },
    {
        id: 14,
        title: "Mini Instagram",
        description:
            "A C++ terminal simulation of Instagram with user registration, login, messaging, posts management, and friend requests.",
        github: "https://github.com/mshahnawaz1202/Mini-Instagram",
        techUsed: ["C++", "Data Structures"],
        category: "C++",
        image: instagramImg,
    },
    {
        id: 15,
        title: "Contact Book Application",
        description:
            "A console-based contact management system built in C++ using OOP principles. Supports CRUD operations, file persistence, and searching.",
        github: "https://github.com/mshahnawaz1202/Contact-Book-Application",
        techUsed: ["C++", "OOP"],
        category: "C++",
        image: contactBookImg,
    },
    {
        id: 16,
        title: "Tic Tac Toe",
        description:
            "A console-based Tic-Tac-Toe game developed in C++. Includes score tracking, match history storage, leaderboard functionality, and file handling.",
        github: "https://github.com/mshahnawaz1202/TicTacToe",
        techUsed: ["C++"],
        category: "C++",
        image: tictactoeImg,
    },
    {
        id: 17,
        title: "Dalgona Challenge",
        description:
            "A terminal-based Dalgona shape guessing game implemented in Bash with single-player, multiplayer, and computer modes.",
        github: "https://github.com/mshahnawaz1202/DALGONA-CHALLENGE",
        techUsed: ["Bash", "WSL2"],
        category: "Other",
        image: dalgonaImg,
    },

    

];