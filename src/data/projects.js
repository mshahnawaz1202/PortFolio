import tictactoeImg from '../assets/tictactoe.png'
import contactBookImg from '../assets/contact-book.jfif'
import instagramImg from '../assets/instagram.jfif'
import osImg from '../assets/os.jfif'
import powerBiImg from '../assets/power-bi.jfif'
import poetryImg from '../assets/poetry.jfif'
import logoImg    from '../assets/logo_pic.png'
import dalgonaImg from '../assets/dalgona.png'
import testopsImg from '../assets/testops.jfif'
import stayfinderImg from '../assets/stayfinder.jfif'

export const projects = [
    {
        id: 1,
        title: 'Tic Tac Toe',
        description: 'A console-based Tic-Tac-Toe game developed in C++. Allows two players to compete via a clean text-based interface, with persistent score tracking, match history storage, leaderboard functionality, and highest scorer statistics through file handling.',
        github: 'https://github.com/mshahnawaz1202/TicTacToe',
        techUsed: ['C++'],
        category: 'C++',
        image: tictactoeImg,
    },
    {
        id: 2,
        title: 'Contact Book Application',
        description: 'A robust console-based contact management system built in C++ using OOP principles. Supports CRUD operations, file persistence, and search functionality for managing personal and professional contacts.',
        github: 'https://github.com/mshahnawaz1202/Contact-Book-Application',
        techUsed: ['C++', 'OOP'],
        category: 'C++',
        image: contactBookImg,
    },
    {
        id: 3,
        title: 'Mini Instagram',
        description: 'A C++ terminal simulation of Instagram with user registration, login, messaging, posts management, and friend request handling. Uses Windows-specific libraries for enhanced UI in a terminal environment.',
        github: 'https://github.com/mshahnawaz1202/Mini-Instagram',
        techUsed: ['C++', 'Data Structures'],
        category: 'C++',
        image: instagramImg,
    },
    {
        id: 4,
        title: 'Mini Operating System',
        description: 'A console-based mini OS simulator in C++ covering core OS concepts: process creation & termination, memory management, scheduling algorithms, and various built-in utility applications.',
        github: 'https://github.com/mshahnawaz1202/Mini-Operating-System',
        techUsed: ['C++', 'OS Concepts'],
        category: 'C++',
        image: osImg,
    },
    {
        id: 5,
        title: 'Mini Power BI',
        description: 'A Power BI–style Data Analytics Dashboard built with Streamlit. Offers end-to-end workflow: Upload, Clean, Visualize, Train ML models, Predict, and Chat with your dataset — all in one interactive web app, no coding required.',
        github: 'https://github.com/mshahnawaz1202/MiniPowerBI',
        techUsed: ['Python', 'Streamlit', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
        category: 'Python',
        image: powerBiImg,
    },
    {
        id: 6,
        title: 'Arabic Poetry Management',
        description: 'A sophisticated multi-layered Desktop Application for managing, analyzing, and exploring Arabic poetry. Built with JavaFX and a robust 3-Tier Architecture, integrating advanced NLP capabilities for deep poetic structure insights.',
        github: 'https://github.com/mshahnawaz1202/Arabic-Poetry-Management-System',
        techUsed: ['Java', 'JavaFX', 'MySQL', 'Design Patterns'],
        category: 'Java',
        image: poetryImg,
    },
    {
        id: 7,
        title: 'BOS Optics',
        description: 'A full-stack Django e-commerce platform for an optical store. Customers can browse premium eyewear, search products, manage carts, place orders, book eye-care appointments, and read blog posts.',
        github: 'https://github.com/mshahnawaz1202/BOS-Optics',
        techUsed: ['Python', 'Django', 'JavaScript', 'SQLite', 'HTML5', 'CSS3'],
        category: 'Web',
        image: logoImg,
    },
    {
        id: 8,
        title: 'StayFinder',
        description: 'A full-featured Airbnb-inspired property booking Android app built with Kotlin and Jetpack Compose. Features Firebase authentication, real-time listings, Room/SQLite offline support, and rich UI components.',
        github: 'https://github.com/mshahnawaz1202/Stay-Finder-Airbnb-Inspired-Property-Rental-Application-',
        techUsed: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room/SQLite'],
        category: 'Mobile',
        image: stayfinderImg,
    },
    {
        id: 9,
        title: 'Dalgona Challenge',
        description: 'A terminal-based Dalgona (shape guessing) game implemented in Bash. Players identify ASCII shapes within a time limit and earn points. Features single-player, vs-computer, and multiplayer modes.',
        github: 'https://github.com/mshahnawaz1202/DALGONA-CHALLENGE',
        techUsed: ['Bash', 'WSL2'],
        category: 'Other',
        image: dalgonaImg,
    },
    {
        id: 10,
        title: 'TestOps & Automation Framework',
        description: 'A comprehensive BDD Test Automation Framework for Web UI testing. Built with Java, Selenium WebDriver, Cucumber, and Allure Reports — enabling clean, maintainable, and scalable automated test suites.',
        github: 'https://github.com/mshahnawaz1202/TestOps-andAutomation-Framework',
        techUsed: ['Java', 'Selenium', 'Cucumber', 'Allure'],
        category: 'Java',
        image: testopsImg,
    },
]