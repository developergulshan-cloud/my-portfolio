// src/data/portfolioData.js

export const personalInfo = {
    name: "Gulshan Marandi",
    title: "Full Stack Developer",
    email: "developergulshan@gmail.com",
    phone: "+91 9110121620",
    linkedin: "https://linkedin.com/in/dev-gulshan-marandi",
    github: "https://github.com/gulshan-marandi",
    location: "Available for remote",
    initials: "GM"
};

export const about = {
    summary: "Results-driven Full-Stack Developer with 4+ years of experience building scalable web and GIS-based applications using Angular, Node.js, and modern JavaScript frameworks. Strong expertise in REST APIs, databases, Docker, and cloud deployment. Passionate about delivering high-performance, user-centric solutions."
};

export const skills = [
    {
        icon: 'code',
        title: 'Programming Languages',
        items: ['Node.js', 'JavaScript (ES6+)', 'TypeScript']
    },
    {
        icon: 'language',
        title: 'Web Technologies',
        items: ['HTML5, CSS3', 'WebSockets', 'AJAX & Async Programming', 'Media Queries']
    },
    {
        icon: 'widgets',
        title: 'Frameworks & Libraries',
        items: ['Angular', 'React.js', 'Express.js', 'Tailwind CSS']
    },
    {
        icon: 'build',
        title: 'Tools & Platforms',
        items: ['Linux, Git, GitHub', 'Docker & Docker-Compose', 'AWS (EC2, S3)', 'JIRA']
    },
    {
        icon: 'map',
        title: 'GIS Technologies',
        items: ['Leaflet', 'Maplibre', 'OpenLayers']
    },
    {
        icon: 'storage',
        title: 'Databases',
        items: ['MySQL', 'PostgreSQL', 'MongoDB']
    }
];

export const experience = [
    {
        title: "Software Engineer",
        company: "MapMyIndia",
        companyFull: "CE Info Systems Ltd.",
        period: "Oct 2021 - Present",
        responsibilities: [
            "Developed multiple GIS-based and web applications using Angular and Node.js for government, finance, logistics, and manufacturing sectors",
            "Built platforms including Property Tax Management System, Digital Sky (Drone Airspace Management), Bajaj Finserv GIS App, CONCOR Rake Monitoring Dashboard, and Hero Motors Geospatial Analysis Tool",
            "Implemented features such as property workflows, airspace mapping, flight plan submission, branch management, rake tracking, and dealer-customer analysis",
            "Integrated role-based access, real-time dashboards, interactive GIS maps, automated workflows, and data analytics to improve operational efficiency and decision-making",
            "Strong expertise in Angular, TypeScript, GIS visualization, REST APIs, and building scalable, user-friendly web applications"
        ]
    }
];

export const projects = [
    {
        title: "Ticket-Based Movie Streaming Application",
        icon: "movie",
        technologies: ['Angular', 'Node.js', 'Express', 'DASH.js', 'FFmpeg', 'MySQL', 'JWT'],
        description: "Designed a secure ticket-based movie streaming platform where users can purchase a ticket and watch a movie once per ticket. Implemented DASH adaptive bitrate streaming using Node.js and Angular to deliver smooth video playback across varying network conditions. Built a robust backend with secure APIs, token-based access control, and time-limited streaming authorization. Integrated FFmpeg for MP4 segmentation, generated manifest files, and optimized video delivery for performance."
    }
];

export const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Dumka Engineering College (SKMU), Dumka",
    period: "Aug 2018 - Jun 2021",
    grade: "SGPA: 9.0/10"
};

export const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' }
];

export const socialLinks = [
    {
        href: "https://linkedin.com/in/dev-gulshan-marandi",
        icon: "business",
        label: "LinkedIn"
    },
    {
        href: "https://github.com/gulshan-marandi",
        icon: "code",
        label: "GitHub"
    },
    {
        href: "mailto:developergulshan@gmail.com",
        icon: "email",
        label: "Email"
    },
    {
        href: "tel:+919110121620",
        icon: "phone",
        label: "Phone"
    }
];