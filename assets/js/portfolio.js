/**
 * Portfolio JavaScript - Main Scripts
 * Author: Enoch Epekipolu
 * Modern portfolio with GSAP animations, parallax effects, and smooth interactions
 */

// ==================== Projects Data ====================
const projectsData = [
    {
        title: "Retailloop AI Platform",
        description: "AI-powered enterprise commerce platform with inventory management, POS transactions, and instant loan functionality. Built with React, Node.js, and FastAPI.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        tags: ["React", "Node.js", "FastAPI", "PostgreSQL", "AI/ML"],
        liveLink: "https://retailloop.co",
        githubLink: null,
        featured: true,
        category: "fullstack"
    },
    {
        title: "First Fidelity Broker",
        description: "Professional brokerage platform with real-time trading features, portfolio management, and secure financial transactions.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
        tags: ["Next.js", "TypeScript", "TailwindCSS", "REST API"],
        liveLink: "https://ffbroker.cam",
        githubLink: "https://github.com/freshpex/ffb",
        featured: true,
        category: "fullstack"
    },
    {
        title: "Unity Estate Security",
        description: "Comprehensive estate security management system with real-time monitoring, access control, and incident reporting features.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        liveLink: "https://unityestatesecurity.vercel.app",
        githubLink: null,
        featured: true,
        category: "fullstack"
    },
    {
        title: "Crypto Launchpad",
        description: "Cryptocurrency token launchpad platform with smart contract integration, staking features, and real-time price tracking.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
        tags: ["React", "Web3.js", "Solidity", "TailwindCSS"],
        liveLink: "https://cryptol.vercel.app",
        githubLink: "https://github.com/HackerEEO/launchpad",
        featured: true,
        category: "blockchain"
    },
    {
        title: "Restaurant",
        description: "Modern restaurant platform featuring online ordering, table reservations, and real-time kitchen management.",
        image: "assets/images/project-page/restaurant.png",
        tags: ["React", "Node.js", "MongoDB"],
        liveLink: "https://preview-timskitchen.vercel.app",
        githubLink: "https://github.com/freshpex/timkitchenFrontend",
        featured: true,
        category: "fullstack"
    },
    {
        title: "PostOnce - Social Media Manager",
        description: "Multi-platform social media posting tool that allows users to publish content across different social networks simultaneously.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
        tags: ["React", "Social Media API", "Node.js", "Multi-Platform"],
        liveLink: "https://postsonce.vercel.app/",
        githubLink: "https://github.com/freshpex/postonce-frontend",
        featured: true,
        category: "fullstack"
    },
    {
        title: "AgriMarket - Offline Marketplace",
        description: "An offline-to-online marketplace connecting farmers with urban buyers, designed to work with minimal internet connectivity.",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
        tags: ["React", "Offline-First", "PWA", "Agriculture"],
        liveLink: "https://agrimarkethack.vercel.app/",
        githubLink: "https://github.com/freshpex/fail-forward-2025-offline-marketplace",
        featured: true,
        category: "fullstack"
    },
    {
        title: "ScamFinder - Fraud Reporting Platform",
        description: "A platform where scam victims can report fraud incidents and track their reporting progress for better accountability.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
        tags: ["React", "Fraud Prevention", "Reporting System", "Security"],
        liveLink: "https://scam-finder-sigma.vercel.app/",
        githubLink: null,
        featured: true,
        category: "fullstack"
    },
    {
        title: "NIMELSSA - University Portal",
        description: "A comprehensive university website featuring an online voting system for student positions and a news portal for campus updates.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        tags: ["React", "Voting System", "News Portal", "Education"],
        liveLink: "https://pnimelssa.vercel.app/",
        githubLink: "https://github.com/freshpex/nimelssa",
        featured: true,
        category: "fullstack"
    },
    {
        title: "Cars Hub",
        description: "Advanced car dealership platform with vehicle listings, comparison tools, and financing calculator.",
        image: "assets/images/project-page/cars.png",
        tags: ["Next.js", "TailwindCSS", "REST API"],
        liveLink: "https://carzones.vercel.app",
        githubLink: "https://github.com/freshpex/cars",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Fashion Designer",
        description: "Elegant portfolio website showcasing fashion collections, lookbooks, and booking system for consultations.",
        image: "assets/images/project-page/fashion.png",
        tags: ["React", "CSS3", "Responsive Design"],
        liveLink: "https://johnfashion.vercel.app",
        githubLink: "https://github.com/freshpex/fashion-portfolio",
        featured: false,
        category: "frontend"
    },
    {
        title: "Global Parcel Tracker",
        description: "Real-time package tracking system with global shipping calculator and delivery status notifications.",
        image: "assets/images/project-page/parcel1.png",
        tags: ["React", "Node.js", "REST API"],
        liveLink: "https://par-eight.vercel.app",
        githubLink: "https://github.com/freshpex/parcel",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Account Marketplace",
        description: "Secure social media account marketplace with escrow system, verification process, and transaction management.",
        image: "assets/images/project-page/accounts.png",
        tags: ["React", "Node.js", "MongoDB", "Payment Integration"],
        liveLink: "https://scottech.vercel.app/",
        githubLink: "https://github.com/freshpex/accountSalesFrontend",
        featured: true,
        category: "fullstack"
    },

    {
        title: "Express Shipping Solutions",
        description: "Comprehensive shipping management system with rate comparison, label generation, and customs documentation.",
        image: "assets/images/project-page/parcel2.png",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        liveLink: "https://franch-express.onrender.com/",
        githubLink: "https://github.com/freshpex/Franch-Express-Courier",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Melodify - Music Streaming Platform",
        description: "Spotify-inspired music streaming application with personalized playlists, artist profiles, and social features.",
        image: "assets/images/project-page/music.png",
        tags: ["React", "Node.js", "Audio API", "MongoDB"],
        liveLink: "https://music-two-ecru.vercel.app",
        githubLink: "https://github.com/freshpex/music",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Influence Hub",
        description: "Platform connecting brands with influencers, featuring campaign management, analytics, and payment processing.",
        image: "assets/images/project-page/influencer.png",
        tags: ["React", "Node.js", "Analytics", "Payment Integration"],
        liveLink: "https://influencer-gamma.vercel.app",
        githubLink: "https://github.com/freshpex/influencer-marketing",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Secure Online Banking Platform",
        description: "A full-featured banking platform built with Flask, featuring secure transactions, account management, and real-time balance updates.",
        image: "assets/images/project-page/bankwebsite.png",
        tags: ["Flask", "Python", "SQLite", "Authentication"],
        liveLink: "https://bdclient.vercel.app/",
        githubLink: "https://github.com/freshpex/online-bank-of-bd-client-test/tree/master",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Construction Equipment Marketplace",
        description: "E-commerce platform for construction equipment with advanced filtering, equipment comparison, and secure checkout.",
        image: "assets/images/project-page/construction1.png",
        tags: ["React", "E-commerce", "Payment Integration"],
        liveLink: "https://touchconstruction.vercel.app/",
        githubLink: "https://github.com/freshpex/Construction-Company-Site-Template/tree/main",
        featured: false,
        category: "fullstack"
    },
    {
        title: "HealthCare Plus",
        description: "Comprehensive healthcare platform with appointment scheduling, patient records, and pharmacy management system.",
        image: "assets/images/project-page/healthcare.png",
        tags: ["React", "Node.js", "MongoDB", "Healthcare"],
        liveLink: "https://youtu.be/E9DQf-_dwPw",
        githubLink: "https://youtu.be/E9DQf-_dwPw",
        featured: true,
        category: "fullstack"
    },
    {
        title: "Contractor Hiring Platform",
        description: "Platform connecting contractors with clients, featuring project bidding, contractor profiles, and review system.",
        image: "assets/images/project-page/contractor.png",
        tags: ["React", "Node.js", "MongoDB", "Review System"],
        liveLink: "https://evomconstruction.vercel.app/",
        githubLink: "https://github.com/freshpex/Construction-Website",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Digital Banking Solution",
        description: "Modern banking platform with Flask backend, featuring secure authentication, transaction management, and real-time account updates.",
        image: "https://th.bing.com/th/id/OIP.zAAnpaDUPzK3uctbvLU82QHaEH?w=182&h=101&c=7&r=0&o=5&dpr=1.2&pid=1.7",
        tags: ["Flask", "Python", "Authentication", "Banking"],
        liveLink: "https://banklinees.vercel.app",
        githubLink: "https://github.com/freshpex/Bankist-Web-App",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Bank Website",
        description: "Created a secure bank website using Flask for transactions and account management.",
        image: "assets/images/project-page/bankWeb.png",
        tags: ["Flask", "Python", "SQLite", "Banking"],
        liveLink: "https://bankiste.vercel.app/",
        githubLink: "https://github.com/freshpex/Flask-Bank-line",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Eudaimonia - Student Wellness Platform",
        description: "Comprehensive wellness application designed to help university students maintain healthy lifestyles through personalized tracking and recommendations.",
        image: "assets/images/project-page/eudaimonia.png",
        tags: ["Python", "Flask", "Health Tech", "Analytics"],
        liveLink: "https://eudaimonia.onrender.com/",
        githubLink: "https://github.com/iamfaqeehhokyky/Eudaimonia",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Utravel - Modern Flight Booking System",
        description: "A React-based flight booking platform with real-time search, interactive booking flow, and responsive design for seamless user experience.",
        image: "assets/images/project-page/p1.png",
        tags: ["React", "REST API", "Booking System"],
        liveLink: "https://skiways.vercel.app/",
        githubLink: "https://github.com/freshpex/airplane-flight",
        featured: false,
        category: "fullstack"
    },
    {
        title: "Interactive Rewards Dashboard",
        description: "Dynamic rewards tracking system featuring real-time earnings updates, cashback history, and multiple redemption options.",
        image: "assets/images/project-page/p2.png",
        tags: ["JavaScript", "CSS3", "Dashboard", "Analytics"],
        liveLink: "https://reward-beryl.vercel.app/",
        githubLink: "https://github.com/freshpex/Reward",
        featured: false,
        category: "frontend"
    },
    {
        title: "Smart Travel Planner Suite",
        description: "Comprehensive travel planning tool integrating multiple APIs for real-time hotel bookings, attraction discovery, and weather forecasting.",
        image: "assets/images/project-page/p3.png",
        tags: ["React", "API Integration", "Travel", "Weather API"],
        liveLink: "https://travel-planner-two.vercel.app/",
        githubLink: "https://github.com/freshpex/Travel-planner",
        featured: false,
        category: "fullstack"
    },
    {
        title: "ML Stock Market Predictor",
        description: "Machine learning-powered platform for stock market analysis and prediction using advanced algorithms.",
        image: "https://th.bing.com/th?q=Stock+Market+Line+Graph&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247",
        tags: ["Python", "Machine Learning", "Data Science", "Flask"],
        liveLink: "https://prediction-z6zg.onrender.com/",
        githubLink: "https://github.com/freshpex/stock-prediction",
        featured: false,
        category: "ml"
    },
    {
        title: "AI-Powered Tic Tac Toe",
        description: "Advanced implementation of the classic game using MiniMax Algorithm for unbeatable AI opponent.",
        image: "assets/images/project-page/tic-tac-toe.png",
        tags: ["React", "AI", "MiniMax Algorithm", "Game Dev"],
        liveLink: null,
        githubLink: "https://github.com/freshpex/minimax",
        featured: false,
        category: "ai"
    }
];

// ==================== Experience Data ====================
const experienceData = [
    {
        company: "Retailloop",
        companyTag: "AI-Powered Enterprise Commerce",
        icon: "fas fa-shopping-cart",
        role: "Junior Backend Developer",
        date: "Jul 2025 - Jan 2026",
        description: [
            "Developed and scaled backend services using Node.js and Python (FastAPI), building secure, high-performance REST APIs and event-driven background jobs",
            "Designed and optimized data architecture with PostgreSQL, integrating AI agents and ML workflows",
            "Collaborated in cross-functional agile teams to deploy production-ready services and improve CI/CD pipelines"
        ],
        tech: ["Node.js", "FastAPI", "PostgreSQL", "AI/ML"]
    },
    {
        company: "SkyeStudio",
        companyTag: "Creative Digital Agency",
        icon: "fas fa-paint-brush",
        role: "Full-Stack Developer",
        date: "Jan 2025 - Jun 2025",
        description: [
            "Built interactive web and mobile applications using React.js, React Native, Konva.js, and Fabric.js",
            "Developed backend services with Node.js, Express, and MongoDB, including media processing with FFmpeg",
            "Delivered production-ready features, optimizing performance and supporting digital marketing initiatives"
        ],
        tech: ["React", "React Native", "MongoDB", "FFmpeg"]
    },
    {
        company: "Retailloop",
        companyTag: "Commerce Platform",
        icon: "fas fa-store",
        role: "Junior Frontend Developer",
        date: "Jan 2024 - Aug 2024",
        description: [
            "Developed core features for inventory management, POS transactions, and instant loan functionality",
            "Integrated backend services with React frontend using Redux and real-time AJAX updates",
            "Collaborated in agile team for cross-browser testing and rapid feature delivery"
        ],
        tech: ["React", "Redux", "Bootstrap", "REST API"]
    },
    {
        company: "CodeDay Labs",
        companyTag: "Open Source Program",
        icon: "fas fa-graduation-cap",
        role: "Software Engineer Intern",
        date: "Jun 2023 - Aug 2023",
        description: [
            "Contributed to Zulip open-source project by enhancing avatar UI to differentiate user types",
            "Designed and implemented triangle indicator system within large-scale codebase",
            "Collaborated through GitHub using pull requests and iterative feedback"
        ],
        tech: ["Python", "JavaScript", "Open Source", "Git"]
    },
    {
        company: "Kibo School",
        companyTag: "EdTech Organization",
        icon: "fas fa-chalkboard-teacher",
        role: "Teaching Assistant",
        date: "Mar 2023 - May 2023",
        description: [
            "Supported 50+ students in Programming 1, Web Development, and Communicating for Success courses",
            "Provided code reviews, debugging assistance, and one-on-one mentoring",
            "Created supplementary learning resources and conducted weekly office hours"
        ],
        tech: ["Python", "JavaScript", "HTML/CSS", "Mentoring"]
    },
    {
        company: "Open Source Community",
        companyTag: "Global Developer Community",
        icon: "fas fa-code-branch",
        role: "Open Source Contributor",
        date: "2022 - Present",
        description: [
            "Active contributor to multiple open-source projects including Zulip and various web frameworks",
            "Participated in Hacktoberfest, contributing quality PRs to community projects",
            "Maintained personal open-source projects with comprehensive documentation"
        ],
        tech: ["Git", "GitHub", "Python", "JavaScript"]
    }
];

// ==================== Education Data ====================
const educationData = [
    {
        school: "University of the People",
        degree: "Bachelor of Science in Computer Science",
        date: "2024 - 2026",
        description: "Pursuing advanced computer science studies with focus on software engineering, algorithms, and distributed systems.",
        icon: "fas fa-university",
        location: "Online, California, USA"
    },
    {
        school: "Kibo School of Technology",
        degree: "Software Engineering Certificate",
        date: "2022 - 2024",
        description: "Intensive software engineering program covering full-stack development, algorithms, data structures, and professional skills.",
        icon: "fas fa-laptop-code",
        location: "Online, New York, USA"
    },
    {
        school: "Ambrose Alli University",
        degree: "Bachelor of Science in Computer Science",
        date: "2020 - 2025",
        description: "Comprehensive computer science curriculum including programming, databases, networking, and software engineering.",
        icon: "fas fa-graduation-cap",
        location: "Ekpoma, Nigeria"
    },
    {
        school: "Redeemers High School",
        degree: "Secondary School Certificate",
        date: "2013 - 2019",
        description: "Foundation education with focus on sciences and mathematics, developing early interest in technology and programming.",
        icon: "fas fa-school",
        location: "Ogun State, Nigeria"
    }
];

// ==================== DOM Ready ====================
document.addEventListener('DOMContentLoaded', () => {    
    initPreloader();
    initNavigation();
    initAnimations();
    initExperience();
    initEducation();
    initProjects();
    initContactForm();
    initScrollToTop();
    initCounters();
    initParallax();
    // Initialize scroll effects AFTER dynamic content is loaded
    initScrollEffects();
    
    console.log('All init functions completed');
});

// ==================== Preloader ====================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progress = document.querySelector('.preloader-progress');
    
    let loadProgress = 0;
    const interval = setInterval(() => {
        loadProgress += Math.random() * 15;
        if (loadProgress >= 100) {
            loadProgress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = 'auto';
                
                // Trigger entrance animations after preloader
                triggerEntranceAnimations();
            }, 500);
        }
        progress.style.width = loadProgress + '%';
    }, 100);
}

// ==================== Navigation ====================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Scroll effect for navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ==================== Scroll Effects ====================
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add stagger delay for children
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`;
                        child.classList.add('visible');
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-children').forEach(el => {
        observer.observe(el);
    });
}

// ==================== GSAP Animations ====================
function initAnimations() {
    // Wait for GSAP to load
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded yet');
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Set default for all GSAP animations - don't leave elements invisible
    gsap.defaults({ overwrite: 'auto' });
    
    // Hero section animations
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7
    });
    
    gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.9
    });
    
    gsap.from('.hero-stats', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.1
    });
    
    gsap.from('.hero-visual', {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        delay: 0.3,
        ease: 'back.out(1.7)'
    });
    
    // Floating icons animation
    gsap.to('.floating-icon-1', {
        y: -15,
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    gsap.to('.floating-icon-2', {
        y: 15,
        rotation: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    gsap.to('.floating-icon-3', {
        y: -20,
        rotation: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    // Gradient orbs animation
    gsap.to('.gradient-orb-1', {
        x: 50,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.gradient-orb-2', {
        x: -50,
        y: 50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.gradient-orb-3', {
        x: 30,
        y: 40,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Timeline animations - use ScrollTrigger to animate elements when they enter viewport
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        // Set initial visible state
        gsap.set(item, { opacity: 1, x: 0 });
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -30,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
    
    // Skills cards animation
    gsap.utils.toArray('.skill-category').forEach((card, index) => {
        gsap.set(card, { opacity: 1, y: 0 });
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.set(card, { opacity: 1, y: 0, scale: 1 });
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            scale: 0.98,
            duration: 0.5,
            delay: (index % 3) * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Section title animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.set(title, { opacity: 1, y: 0 });
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
    
    // Blog cards
    gsap.utils.toArray('.blog-card').forEach((card, index) => {
        gsap.set(card, { opacity: 1, y: 0 });
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Education cards
    gsap.utils.toArray('.education-card').forEach((card, index) => {
        gsap.set(card, { opacity: 1, y: 0 });
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
}

// ==================== Entrance Animations ====================
function triggerEntranceAnimations() {
    // Trigger hero animations after preloader
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta, .hero-stats');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// ==================== Experience ====================
function initExperience() {
    const experienceTimeline = document.getElementById('experienceTimeline');
    console.log('initExperience - element found:', !!experienceTimeline);
    if (!experienceTimeline) return;
    
    // Show only first 4 experiences on index.html
    const displayExperiences = experienceData.slice(0, 4);
    console.log('Experience items to display:', displayExperiences.length);
    
    displayExperiences.forEach((exp, index) => {
        const item = createExperienceItem(exp, index);
        experienceTimeline.appendChild(item);
    });
    console.log('Experience items added');
}

function createExperienceItem(exp, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
    
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <div class="timeline-header">
                <div class="timeline-company">
                    <div class="timeline-logo">
                        <i class="${exp.icon}"></i>
                    </div>
                    <div class="timeline-company-info">
                        <h4>${exp.company}</h4>
                        <span>${exp.companyTag}</span>
                    </div>
                </div>
                <span class="timeline-date">${exp.date}</span>
            </div>
            <p class="timeline-role">${exp.role}</p>
            <div class="timeline-description">
                <ul>
                    ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
            <div class="timeline-tech">
                ${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `;
    
    return item;
}

// ==================== Education ====================
function initEducation() {
    const educationGrid = document.getElementById('educationGrid');
    if (!educationGrid) return;
    
    educationData.forEach((edu, index) => {
        const card = createEducationCard(edu, index);
        educationGrid.appendChild(card);
    });
}

function createEducationCard(edu, index) {
    const card = document.createElement('div');
    card.className = 'education-card glass-card';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    
    card.innerHTML = `
        <div class="education-icon">
            <i class="${edu.icon}"></i>
        </div>
        <div class="education-info">
            <h3>${edu.school}</h3>
            <p class="degree">${edu.degree}</p>
            <span class="date">${edu.date}</span>
            <p class="description">${edu.description}</p>
            <span class="location"><i class="fas fa-map-marker-alt"></i> ${edu.location}</span>
        </div>
    `;
    
    return card;
}

// ==================== Projects ====================
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    console.log('initProjects - element found:', !!projectsGrid);
    if (!projectsGrid) return;
    
    // Show only featured projects on index.html (limit to 6)
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 6);
    console.log('Featured projects to display:', featuredProjects.length);
    
    featuredProjects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        projectsGrid.appendChild(card);
    });
    console.log('Project cards added');
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = `project-card ${project.featured ? 'featured' : ''}`;
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-overlay">
                <div class="project-links">
                    ${project.liveLink && project.liveLink !== '#' ? 
                        `<a href="${project.liveLink}" target="_blank" class="project-link" aria-label="View Live">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                    ${project.githubLink ? 
                        `<a href="${project.githubLink}" target="_blank" class="project-link" aria-label="View Code">
                            <i class="fab fa-github"></i>
                        </a>` : ''}
                </div>
            </div>
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
        card.querySelector('.project-overlay').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.project-overlay').style.opacity = '0';
    });
    
    return card;
}

// ==================== Contact Form ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // EmailJS send
            await emailjs.sendForm(
                'service_dzzqpfn', // Service ID
                'template_owhbdhi', // Template ID
                form
            );
            
            // Success
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.classList.add('success');
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('success');
                submitBtn.disabled = false;
            }, 3000);
            
        } catch (error) {
            console.error('Email failed:', error);
            submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
            submitBtn.classList.add('error');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('error');
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

// ==================== Scroll to Top ====================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTop');
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== Animated Counters ====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

// ==================== Parallax Effects ====================
function initParallax() {
    const heroImage = document.querySelector('.hero-bg img');
    const gradientOrbs = document.querySelectorAll('.gradient-orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero background
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
        }
        
        // Parallax for gradient orbs
        gradientOrbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Mouse move parallax for hero
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        gradientOrbs.forEach((orb, index) => {
            const depth = (index + 1) * 20;
            orb.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
        });
        
        const floatingIcons = document.querySelectorAll('.floating-icon');
        floatingIcons.forEach((icon, index) => {
            const depth = (index + 1) * 10;
            icon.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
        });
    });
}

// ==================== Typing Effect ====================
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const phrases = [
        'Full Stack Developer',
        'React Specialist',
        'Node.js Expert',
        'UI/UX Enthusiast'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    type();
}

// ==================== Magnetic Buttons ====================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ==================== Tilt Effect for Cards ====================
document.querySelectorAll('.project-card, .skill-category').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ==================== Cursor Trail Effect (Optional) ====================
function initCursorTrail() {
    const trailer = document.createElement('div');
    trailer.className = 'cursor-trailer';
    document.body.appendChild(trailer);
    
    let mouseX = 0, mouseY = 0;
    let trailerX = 0, trailerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        const dx = mouseX - trailerX;
        const dy = mouseY - trailerY;
        
        trailerX += dx * 0.1;
        trailerY += dy * 0.1;
        
        trailer.style.left = trailerX + 'px';
        trailer.style.top = trailerY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Uncomment to enable cursor trail
// initCursorTrail();

// ==================== Performance Optimization ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for animations
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// ==================== Console Easter Egg ====================
console.log('%c Hey there! 👋', 'font-size: 24px; font-weight: bold; color: #bb86fc;');
console.log('%c Interested in the code? Check out my GitHub: https://github.com/freshpex', 'font-size: 14px; color: #03dac6;');
console.log('%c Let\'s connect! 🚀', 'font-size: 14px; color: #fff;');
