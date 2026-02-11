import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
    enabled: false
};


const illustration = {
    animated: false
};

const greeting = {
    username: "Suyash Singh",
    title: "Suyash Singh",
    subTitle:
        "Software Engineer and Data Scientist with 4+ years of experience in Python, C#, ML, and Cloud (GCP, AWS). Building AI-powered logistics solutions at Teklog Srl, Milan.",
    resumeLink:
        "https://drive.google.com/uc?export=download&id=147ZGIFfwaYCcDEw0ExoNrgtONbK-x_2-",
    displayGreeting: true
};

const socialMediaLinks = {
    github: "https://github.com/suyash444",
    linkedin: "https://www.linkedin.com/in/suyash-singh-69541914b/",
    gmail: "singhsuyash444@gmail.com",
    display: true
};

const skillsSection = {
    title: "My Expertise",
    subTitle: "AI/ML Engineering | Full-Stack Development | Cloud Architecture",
    skills: [
        "🚀 Build AI-powered solutions for logistics & warehouse optimization",
        "💻 Develop robust APIs using Python & C# (.NET) with RESTful architecture",
        "☁️ Deploy scalable applications with Docker, Kubernetes & Cloud platforms",
        "📊 Design ML pipelines for real-time data processing & predictive analytics"
    ],
    softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
        { skillName: "C#/.NET", fontAwesomeClassname: "fab fa-microsoft" },
        { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
        { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
        { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-dharmachakra" },
        { skillName: "GCP", fontAwesomeClassname: "fab fa-google" },
        { skillName: "Azure", fontAwesomeClassname: "fab fa-windows" },
        { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
        { skillName: "REST API", fontAwesomeClassname: "fas fa-plug" },
        { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-brain" }
    ],
    display: true
};

const educationInfo = {
    display: true,
    schools: [
        {
            schoolName: "Politecnico di Torino",
            logo: require("./assets/images/polito.png"),
            subHeader: "MSc in Data Science & Engineering",
            duration: "2022 - 2025",
            desc: "Graduated with a thesis on automated functional testing of electric fan systems using ML and diagnostic data.",
            descBullets: [
                "Machine Learning, Cloud Computing, Data Engineering",
                "Thesis focused on anomaly detection using PCA, DBSCAN, and Random Forest"
            ]
        },
        {
            schoolName: "SRM University, Chennai",
            logo: require("./assets/images/srmLogo.png"),
            subHeader: "B.Tech in Computer Science & Engineering",
            duration: "2015 - 2019",
            desc: "Graduated with distinction and participated in multiple cloud/data science projects.",
            descBullets: [
                "Learned key concepts in computer science and engineering fundamentals.",
                "Developed practical skills in cloud computing, machine learning, and data analysis."
            ]
        }
    ]

};


const techStack = {
    viewSkillBars: false,
    experience: [],
    displayCodersrank: false
};

const twitterDetails = {
    userName: "suyash945",  
    display: true
};

export const openSource = {
    showGithubProfile: "true", 
    display: true
};

export const resumeSection = {
    display: true,
    resumeLink: "https://drive.google.com/uc?export=download&id=147ZGIFfwaYCcDEw0ExoNrgtONbK-x_2-"
};



const workExperiences = {
display: true,
experience: [
    {
        role: "AI/ML Engineer",
        company: "Teklog Srl",
        companylogo: require("./assets/images/teklogLogo.png"),
        date: "July 2025 – Present",
        location: "Milan, Italy",
        desc: "Building AI-powered logistics solutions using Python & C# (.NET). Developing ML models to optimize delivery routes and warehouse operations, reducing costs and improving efficiency. Deploying scalable applications with Docker & Kubernetes."
    },
    {
        role: "Data Scientist Intern",
        company: "Johnson Electric",
        companylogo: require("./assets/images/johnsonLogo.png"),
        date: "2024 – 2025",
        desc: "Developed ML pipelines for anomaly detection in automotive cooling systems using real-time sensor diagnostics."
    },
        {
            role: "Data Scientist Intern",
            company: "AlmaBetter",
            companylogo: require("./assets/images/almaLogo.png"), 
            date: " 2022 –  2024",
            desc: "Worked on end-to-end data analysis, visualization, and dashboarding using Python and Power BI."
        },

        {
            role: "Data Scientist Intern",
            company: "SoftOneTech Solutions",
            companylogo: require("./assets/images/softone.png"), 
            date: " 2023 –  2023",
            desc: "Performed EDA, SQL optimization, and applied ML for business insights. Scored 85/100 in internship evaluations."
        },

        {
            role: "Software Developer",
            company: "Tata Consultancy Services",
            companylogo: require("./assets/images/tcs.png"),
            date: "2019 – 2022",
            desc: "Worked on enterprise cloud migration projects, implemented CI/CD using Jenkins, Terraform, and GCP."
        },
        {
            role: "Software Engineer Intern",
            company: "Hewlett Packard Enterprise",
            companylogo: require("./assets/images/hpeLogo.png"), 
            date: "2017 – 2017",
            desc: "Built an e-commerce mobile app using Core Java and SQL. Applied principles of database management and testing."
        }
    ]
};

const bigProjects = {
    title: "Projects",
    subtitle: "Machine Learning & Cloud-Based Projects",
    projects: [
        {
            image: require("./assets/images/project1.png"),
            projectName: "Linear Algebra Visualizer",
            projectDesc:
                "Python-based toolkit to visualize matrix operations and concepts for beginners in ML and AI.",
            footerLink: [
                { name: "GitHub", url: "https://github.com/suyash444/Linear_Algebra" }
            ]
        },
        {
            image: require("./assets/images/project2.png"),
            projectName: "TinyML - Visual Wake Word Detection",
            projectDesc:
                "Deployed a lightweight CNN model for visual wake word detection on resource-constrained devices.",
            footerLink: [
                {
                    name: "GitHub",
                    url: "https://github.com/suyash444/MLDL_Tiny_Visual_Wake_Words"
                }
            ]
        },
        {
            image: require("./assets/images/project3.png"),
            projectName: "Precision Localization in Particle Detection",
            projectDesc:
                "Achieved high-accuracy particle tracking using OpenCV, ML, and noise filtering techniques.",
            footerLink: [
                {
                    name: "GitHub",
                    url: "https://github.com/suyash444/Precision-Localization-in-Particle-Detection"
                }
            ]
        },
        {
            image: require("./assets/images/project4.png"),
            projectName: "ML-Powered IoT Monitoring",
            projectDesc:
                "Machine learning integrated with IoT sensors to detect real-time activity and power levels.",
            footerLink: [
                {
                    name: "GitHub",
                    url: "https://github.com/suyash444/Machine_Learning_IOT"
                }
            ]
        }
    ],
    display: true
};

const certifications = {
    display: true,  // toggle visibility
    certifications: [
        {
            title: "SQL (Intermediate) Certificate",
            subtitle: "Issued by HackerRank in 2024",
            footerLink: [
                {
                    name: "View Certificate",
                    url: "https://www.hackerrank.com/certificates/c3cd2adb02cd"
                }
            ]
        },
        {
            title: "Spring Boot Microservices",
            subtitle: "Completed on Udemy",
            footerLink: [
                {
                    name: "View Certificate",
                    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-16abc2dd-12a8-4cbb-9973-505c75c140ac.pdf"
                }
            ]
        },
        {
            title: "Python for Everybody",
            subtitle: "Issued by Coursera (University of Michigan)",
            footerLink: [
                {
                    name: "View Certificate",
                    url: "https://coursera.org/share/f92822f05efe1d8fb0ab68352a534d9f"
                }
            ]
        },
        {
            title: "Business Analysis Foundations",
            subtitle: "Issued by LinkedIn Learning",
            footerLink: [
                {
                    name: "View Certificate",
                    url: "https://www.linkedin.com/learning/certificates/a372267542a8efe19153b93aab36c630816f4c2598131075a9b5766aa8435271"
                }
            ]
        }
    ]
};





const contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Looking to build something great together? I’d love to hear from you.",
    number: "+39 3517024503",
    email_address: "singhsuyash444@gmail.com"
};

const achievementSection = {
    title: "Awards & Achievements 🏆",
    subtitle:
        "Recognitions received during my tenure at Tata Consultancy Services for outstanding contributions and professional development.",
    achievementsCards: [
        {
            title: "Service and Commitment Award",
            subtitle:
                "Received for serving continuously for three years with excellent performance at TCS. Recognized for consistently meeting project goals and client satisfaction.",
            image: require("./assets/images/tcsLogo.png"),
            imageAlt: "TCS Logo",
            footerLink: []
        },
        {
            title: "On the Spot (Team) Award",
            subtitle:
                "Awarded for outstanding performance and dedication in delivering high-quality work. Acknowledged by TCS for meeting project objectives.",
            image: require("./assets/images/tcsLogo.png"),
            imageAlt: "TCS Logo",
            footerLink: []
        },
        {
            title: "Fresco Play Miles Award",
            subtitle:
                "Recognized for commitment to learning and completing TCS Fresco Play training courses.",
            image: require("./assets/images/tcsLogo.png"),
            imageAlt: "TCS Logo",
            footerLink: []
        }
        

    ],
    display: true
};



const isHireable = true;

export {
    splashScreen,
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    achievementSection,
    techStack,
    twitterDetails,
    workExperiences,
    bigProjects,
    contactInfo,
    isHireable,
    certifications
    
};
