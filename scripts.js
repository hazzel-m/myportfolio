// DOM Elements
const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const scrollBtn = document.getElementById('scrollBtn');
const navItems = document.querySelectorAll('.nav-link');
const educationSection = document.getElementById('education');
const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');

// Event Listeners
window.addEventListener('scroll', handleScroll);
menuBtn.addEventListener('click', toggleMenu);
scrollBtn.addEventListener('click', scrollToAbout);
navItems.forEach(item => item.addEventListener('click', setActiveNavItem));

// Initialize
loadEducationContent();
loadSkillsContent();
loadProjectsContent();
loadContactContent();

// Functions
function handleScroll() {
    // Add or remove header background when scrolling
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Update active nav item based on scroll position
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

function toggleMenu() {
    navLinks.classList.toggle('active');
    
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-feather', 'x');
    } else {
        icon.setAttribute('data-feather', 'menu');
    }
    feather.replace();
}

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function setActiveNavItem(e) {
    navItems.forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
    
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').setAttribute('data-feather', 'menu');
        feather.replace();
    }
}

function loadEducationContent() {
    const educationData = [
        {
            degree: "Bachelor of Science in Statistics",
            institution: "University of Embu",
            location: "Embu, Kenya",
            period: "Aug 2018 - Apr 2022"
        }
    ];

    const certificationsData = [
        {
            name: "Power Learn Project - Software Engineering",
            period: "27th Feb - Present",
            details: [
                "Software development",
                "Python",
                "Web development",
                "Database design and programming",
                "Startup building for developers"
            ]
        },
        {
            name: "365 Data Science",
            period: "25th Nov - Present",
            details: [
                "SQL",
                "Tableau",
                "Power BI"
            ]
        },
        {
            name: "Cisco Networking Academy",
            details: [
                "Data analytics essentials",
                "Data science"
            ],
            link: "https://www.credly.com/badges/9e83bf3d-9ae5-44b7-8e6f-65e83061373d/public_url"
        },
        {
            name: "Coursera Data Analytics",
            period: "Apr 17th - May 1st",
            details: [
                "Foundation certificate"
            ]
        }
    ];

    let educationHTML = `
        <div class="container">
            <h2 class="section-title">Education & Certifications</h2>
            <div class="title-line"></div>
            
            <div class="education-container">
                <div class="education-group">
                    <h3 class="education-group-title">
                        <i data-feather="graduation-cap" class="education-icon"></i>
                        Academic Background
                    </h3>
                    
                    <div class="education-cards">
    `;

    educationData.forEach(item => {
        educationHTML += `
            <div class="education-card">
                <div class="education-card-header">
                    <h4 class="education-card-title">${item.degree}</h4>
                    <span class="education-card-period">
                        <i data-feather="calendar" class="education-period-icon"></i>
                        ${item.period}
                    </span>
                </div>
                <p class="education-card-institution">${item.institution}</p>
                <p class="education-card-location">${item.location}</p>
            </div>
        `;
    });

    educationHTML += `
                    </div>
                    
                    <div class="download-cv-container">
                        <a href="/lovable-uploads/e527a376-2174-442d-beab-67c33df84642.png" download="Mochoge_Kemunto_Resume.png" class="download-link">
                            <i data-feather="download" class="download-icon"></i>
                            Download Complete CV
                        </a>
                    </div>
                </div>
                
                <div class="education-group">
                    <h3 class="education-group-title">
                        <i data-feather="award" class="education-icon"></i>
                        Professional Certifications
                    </h3>
                    
                    <div class="education-cards">
    `;

    certificationsData.forEach(cert => {
        educationHTML += `
            <div class="education-card">
                <div class="education-card-header">
                    <h4 class="education-card-title">${cert.name}</h4>
                    ${cert.period ? `
                    <span class="education-card-period">
                        <i data-feather="calendar" class="education-period-icon"></i>
                        ${cert.period}
                    </span>
                    ` : ''}
                </div>
                
                <ul class="education-details-list">
        `;

        cert.details?.forEach(detail => {
            educationHTML += `<li>${detail}</li>`;
        });

        educationHTML += `
                </ul>
                
                ${cert.link ? `
                <a href="${cert.link}" target="_blank" class="view-certificate">
                    View Certificate
                </a>
                ` : ''}
            </div>
        `;
    });

    educationHTML += `
                    </div>
                </div>
            </div>
        </div>
    `;

    educationSection.innerHTML = educationHTML;
    feather.replace();
}

function loadSkillsContent() {
    const programmingLanguages = [
        { name: "Python", proficiency: 85 },
        { name: "SQL", proficiency: 90 },
        { name: "Excel/VBA", proficiency: 95 },
        { name: "SPSS", proficiency: 80 },
        { name: "SAS", proficiency: 75 }
    ];

    const dataAnalysisTools = [
        { name: "Tableau", proficiency: 85 },
        { name: "Power BI", proficiency: 80 },
        { name: "Statistical Modeling", proficiency: 90 },
        { name: "Data Mining", proficiency: 85 },
        { name: "Machine Learning", proficiency: 75 }
    ];

    const softSkills = [
        "Data Analysis & Visualization",
        "Statistical Modeling",
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Project Management",
        "Process Optimization",
        "Research & Analysis"
    ];

    let skillsHTML = `
        <div class="container">
            <h2 class="section-title">Skills & Expertise</h2>
            <div class="title-line"></div>
            
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-header">
                        <i data-feather="code" class="skill-icon"></i>
                        <h3 class="skill-title">Programming Languages</h3>
                    </div>
                    
                    <div class="skill-items">
    `;

    programmingLanguages.forEach(lang => {
        skillsHTML += `
            <div class="skill-item">
                <div class="skill-item-header">
                    <span class="skill-name">${lang.name}</span>
                    <span class="skill-level">${lang.proficiency}%</span>
                </div>
                <div class="skill-progress-bg">
                    <div class="skill-progress-bar" style="width: ${lang.proficiency}%;"></div>
                </div>
            </div>
        `;
    });

    skillsHTML += `
                    </div>
                </div>
                
                <div class="skill-card">
                    <div class="skill-header">
                        <i data-feather="bar-chart-2" class="skill-icon"></i>
                        <h3 class="skill-title">Data Analysis Tools</h3>
                    </div>
                    
                    <div class="skill-items">
    `;

    dataAnalysisTools.forEach(tool => {
        skillsHTML += `
            <div class="skill-item">
                <div class="skill-item-header">
                    <span class="skill-name">${tool.name}</span>
                    <span class="skill-level">${tool.proficiency}%</span>
                </div>
                <div class="skill-progress-bg">
                    <div class="skill-progress-bar" style="width: ${tool.proficiency}%;"></div>
                </div>
            </div>
        `;
    });

    skillsHTML += `
                    </div>
                </div>
                
                <div class="skill-card">
                    <div class="skill-header">
                        <i data-feather="lightbulb" class="skill-icon"></i>
                        <h3 class="skill-title">Professional Skills</h3>
                    </div>
                    
                    <div class="skill-items">
    `;

    softSkills.forEach(skill => {
        skillsHTML += `
            <div class="soft-skill-item">
                <div class="soft-skill-bullet"></div>
                <span>${skill}</span>
            </div>
        `;
    });

    skillsHTML += `
                    </div>
                </div>
            </div>
            
            <div class="database-skills-grid">
                <div class="skill-card database-skill-card">
                    <h4 class="database-skill-title">SQL & Databases</h4>
                    <p class="database-skill-desc">Proficient in SQL queries, database design, and management of relational databases.</p>
                </div>
                
                <div class="skill-card database-skill-card">
                    <h4 class="database-skill-title">Data Cleaning</h4>
                    <p class="database-skill-desc">Expert in cleaning, transforming, and preparing data for analysis and reporting.</p>
                </div>
                
                <div class="skill-card database-skill-card">
                    <h4 class="database-skill-title">Statistical Analysis</h4>
                    <p class="database-skill-desc">Skilled in applying statistical methods to extract insights from complex datasets.</p>
                </div>
            </div>
        </div>
    `;

    skillsSection.innerHTML = skillsHTML;
    feather.replace();
}

function loadProjectsContent() {
    const projects = [
        {
            title: "Production Data Analysis Dashboard",
            description: "Developed an interactive dashboard to track machine breakdowns and implement preventive maintenance schedules. The solution improved overall equipment effectiveness (OEE) by analyzing patterns in equipment usage data.",
            skills: ["Excel", "Power BI", "Data Analysis"],
            image: "bg-gradient-blue"
        },
        {
            title: "Energy Usage Optimization System",
            description: "Created a data analysis system that identified trends and patterns in energy usage, leading to optimized production processes and reduced energy-intensive operations.",
            skills: ["Python", "Statistical Analysis", "Visualization"],
            image: "bg-gradient-green"
        },
        {
            title: "Climate Smart Agriculture Analysis",
            description: "Conducted data mining and analysis on climate data for the Kenya Climate Smart Agriculture Project (KSCAP), providing actionable insights for agricultural planning and decision-making.",
            skills: ["SPSS", "SAS", "Data Mining", "Field Research"],
            image: "bg-gradient-orange"
        },
        {
            title: "Production Resource Allocation Tool",
            description: "Collaborated with supervisors to develop a data-driven tool for assessing staffing levels and optimizing resource allocation based on production demands.",
            skills: ["Excel", "Statistical Modeling", "Resource Optimization"],
            image: "bg-gradient-purple"
        }
    ];

    const workExperience = [
        {
            position: "Production Data Analyst",
            company: "Ashut Engineers - Production Department",
            period: "Feb 26th - Nov 2024",
            responsibilities: [
                "Tracked machine breakdowns and implemented preventive maintenance schedules based on equipment usage and manufacturer recommendations to minimize downtime thereby improving overall equipment effectiveness (OEE).",
                "Collaborated with supervisors to assess staffing levels, optimize resource allocation based on production demands and using this data to identify areas for improvement in workforce efficiency.",
                "Monitored production output and throughput rates to ensure that targeted tonnage levels are achieved On-Time-In-Full (OTIF) within their specified time frames.",
                "Analyzed historical electricity consumption data to identify trends and patterns in energy usage that have helped to optimize production and to minimize energy intensive processes."
            ]
        },
        {
            position: "Biometrician (Intern)",
            company: "Kenya Agricultural and Livestock and Research Institute - Embu, Kenya",
            department: "Food Crop Research Institute - Biometrics and Socio Economics Department",
            period: "May 2021 - Aug 2021",
            responsibilities: [
                "Conducted data mining, modelling and analysis on data converting it into actionable insights that helped in forecasting.",
                "Identified trends and relationships in data and communicated findings to the supervisor and also raised issues to be resolved.",
                "Utilized advanced Excel, SPSS and SAS statistical packages to analyze data and generated reports on a weekly basis.",
                "Conducted field enumeration where I collected first-hand information from farmers on the Kenya Climate Smart Agriculture Project (KSCAP)."
            ]
        }
    ];

    let projectsHTML = `
        <div class="container">
            <h2 class="section-title">Projects & Work</h2>
            <div class="title-line"></div>
            
            <div class="projects-grid">
    `;
    
    projects.forEach((project, index) => {
        projectsHTML += `
            <div class="project-card">
                <div class="project-image ${project.image}">
                    <i data-feather="bar-chart-2" class="project-icon"></i>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-skills">
        `;
        
        project.skills.forEach(skill => {
            projectsHTML += `<span class="skill-tag">${skill}</span>`;
        });
        
        projectsHTML += `
                    </div>
                    <div class="project-link">
                        <a href="#" class="view-project">
                            <span>View Project</span>
                            <i data-feather="external-link" class="link-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    projectsHTML += `
            </div>
            
            <div class="work-experience">
                <h3 class="work-experience-title">Work Experience</h3>
                
                <div class="experience-list">
    `;
    
    workExperience.forEach((job, index) => {
        projectsHTML += `
            <div class="experience-card">
                <div class="experience-header">
                    <div class="experience-header-left">
                        <h4 class="experience-position">${job.position}</h4>
                        <p class="experience-company">${job.company}</p>
                        ${job.department ? `<p class="experience-department">${job.department}</p>` : ''}
                    </div>
                    <div class="experience-period">${job.period}</div>
                </div>
                
                <ul class="experience-responsibilities">
        `;
        
        job.responsibilities.forEach(item => {
            projectsHTML += `<li>${item}</li>`;
        });
        
        projectsHTML += `
                </ul>
            </div>
        `;
    });
    
    projectsHTML += `
                </div>
            </div>
        </div>
    `;
    
    projectsSection.innerHTML = projectsHTML;
    feather.replace();
}

function loadContactContent() {
    let contactHTML = `
        <div class="container">
            <h2 class="section-title">Contact Me</h2>
            <div class="title-line"></div>
            <p class="contact-subtitle">
                Have a question or want to work together? Feel free to reach out!
            </p>
            
            <div class="contact-container">
                <div class="contact-info">
                    <div class="info-card">
                        <h3 class="info-title">Contact Information</h3>
                        
                        <div class="contact-detail">
                            <i data-feather="mail" class="contact-icon"></i>
                            <div>
                                <span class="detail-label">Email</span>
                                <a href="mailto:mochogehazzel@gmail.com" class="detail-value">mochogehazzel@gmail.com</a>
                            </div>
                        </div>
                        
                        <div class="contact-detail">
                            <i data-feather="phone" class="contact-icon"></i>
                            <div>
                                <span class="detail-label">Phone</span>
                                <span class="detail-value">0704779997</span>
                            </div>
                        </div>
                        
                        <div class="contact-detail">
                            <i data-feather="map-pin" class="contact-icon"></i>
                            <div>
                                <span class="detail-label">Location</span>
                                <span class="detail-value">P.O. Box, 4012-30200, Kitale | Kenya</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="connect-card">
                        <h3>Let's Connect</h3>
                        <p>
                            I'm always open to discussing new projects, data analysis opportunities, or potential collaborations.
                        </p>
                        <p>
                            Whether you have a question or just want to say hello, I'll do my best to get back to you as soon as possible.
                        </p>
                    </div>
                </div>
                
                <div class="contact-form-container">
                    <div class="form-card">
                        <h3 class="form-title">Send a Message</h3>
                        
                        <form id="contactForm" class="contact-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="name" class="form-label">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        class="form-input" 
                                        placeholder="John Doe" 
                                        required
                                    >
                                </div>
                                
                                <div class="form-group">
                                    <label for="email" class="form-label">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        class="form-input" 
                                        placeholder="john@example.com" 
                                        required
                                    >
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="subject" class="form-label">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    class="form-input" 
                                    placeholder="How can I help you?" 
                                    required
                                >
                            </div>
                            
                            <div class="form-group">
                                <label for="message" class="form-label">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    class="form-textarea" 
                                    rows="5" 
                                    placeholder="Write your message here..." 
                                    required
                                ></textarea>
                            </div>
                            
                            <div class="form-submit">
                                <button type="submit" class="submit-btn">
                                    <i data-feather="send" class="send-icon"></i>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    contactSection.innerHTML = contactHTML;
    
    // Add form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    feather.replace();
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        Sending...
    `;
    
    // Simulate form submission (would be replaced with actual AJAX in production)
    setTimeout(() => {
        // Show success message
        const formContainer = contactForm.parentElement;
        formContainer.innerHTML = `
            <div class="success-message">
                <i data-feather="check-circle" class="success-icon"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
        `;
        feather.replace();
    }, 1500);
}

// Initialize feather icons
feather.replace();

// Create animated background elements for hero section
function createBackgroundElements() {
    const backgroundContainer = document.querySelector('.background-elements');
    
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.classList.add('bg-element');
        
        // Random size, position, and animation delay
        const size = Math.random() * 300 + 50;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.animationDelay = `${i * 0.5}s`;
        element.style.animationDuration = `${Math.random() * 8 + 5}s`;
        
        backgroundContainer.appendChild(element);
    }
}

// Call this function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', createBackgroundElements);
