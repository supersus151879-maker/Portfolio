/**
 * Portfolio Central Data Store for Pritam Mondal
 * Cyber Security Student, Ethical Hacking & AI Innovator
 */

const portfolioData = {
  personal: {
    name: "Pritam Mondal",
    title: "Third-Year Cyber Security Student & Tool Builder",
    statusBadge: "🛡️ Cyber Security & AI Explorer",
    avatar: "assets/pritam-profile.jpg",
    headline: "Learn. Build. Experiment. Secure. Repeat.",
    dynamicTitles: [
      "Cyber Security & Ethical Hacking",
      "Linux & Red Hat Administration",
      "Networking & Network Security",
      "Python & Security Automation",
      "AI & Smart Productivity Tools"
    ],
    shortBio: "Third-year Cyber Security student exploring technology, building practical tools, and understanding how systems can be attacked, protected, and improved.",
    detailedAbout: `My approach to learning is simple: **learn the fundamentals, experiment with them, and build something useful**. 
    I enjoy working with Linux systems, networking environments, cybersecurity tools, CTFs, and practical security labs. 
    Beyond cybersecurity, I'm also excited about **AI and software development**. I like creating projects that solve real problems — from cybersecurity tools and AI-powered ideas to small utilities that make everyday tasks easier and more efficient.`,
    buildingMindset: `I don't want to limit myself to only learning existing technologies. I enjoy asking: 
    "Can I build something that makes this easier, smarter, or more secure?" 
    That mindset motivates me to experiment with AI, cybersecurity, automation, and personal productivity tools.`,
    goalStatement: `I'm working toward becoming a skilled cybersecurity professional and practical problem solver with strong foundations in security, networking, Linux, Python, and emerging technologies.`,
    location: "India",
    email: "pritammondal151879@gmail.com",
    phone: "+91 8910530176",
    github: "https://github.com/supersus151879-maker",
    linkedin: "https://www.linkedin.com/in/pritam-mondal-9b4a0033a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    website: "https://pritam-mondal.dev",
    resumeLink: "#"
  },

  stats: [
    { label: "Academic Standing", value: "3rd Year", icon: "award" },
    { label: "Security Labs & CTFs", value: "200+ Rooms", icon: "briefcase" },
    { label: "Global THM Rank", value: "Top 36K", icon: "code" },
    { label: "RHEL, Arch & Kali Linux", value: "3 OS", icon: "smile" }
  ],

  tryhackme: {
    username: "pritammondal151879",
    titleBadge: "GURU",
    country: "🇮🇳 India",
    userType: "Student",
    followers: 1,
    following: 1,
    rank: "36,335",
    numericRank: 36335,
    badges: 25,
    streak: 0,
    roomsCompleted: 200,
    percentile: "Top 1%",
    profileUrl: "https://tryhackme.com/p/pritammondal151879",
    featuredBadges: [
      { name: "Jr Penetration Tester", icon: "⚔️", category: "Pentesting", date: "Unlocked" },
      { name: "Web Fundamentals", icon: "🌐", category: "Web Hacking", date: "Unlocked" },
      { name: "Pre-Security", icon: "🛡️", category: "Foundations", date: "Unlocked" },
      { name: "Linux Fundamentals", icon: "🐧", category: "Systems", date: "Unlocked" },
      { name: "Network Defense", icon: "📡", category: "Networking", date: "Unlocked" },
      { name: "SOC Level 1", icon: "🔍", category: "Blue Team", date: "Unlocked" }
    ],
    categories: [
      { name: "Web Hacking & OWASP Top 10", rooms: 55, percent: 88, color: "#10b981", icon: "🌐" },
      { name: "Network Security & Traffic Analysis", rooms: 50, percent: 80, color: "#06b6d4", icon: "📡" },
      { name: "Linux Hardening & Privilege Escalation", rooms: 45, percent: 72, color: "#ef4444", icon: "🐧" },
      { name: "Digital Forensics & Incident Response", rooms: 30, percent: 62, color: "#8b5cf6", icon: "🔍" },
      { name: "Cryptography & Binary Exploitation", rooms: 20, percent: 50, color: "#f59e0b", icon: "🔐" }
    ],
    recentLogs: [
      { room: "RootMe - Linux Privilege Escalation", points: "+100 pts", time: "Recent", status: "FLAG CAPTURED 🚩" },
      { room: "OWASP Top 10 - Web Vulnerabilities", points: "+150 pts", time: "Recent", status: "ROOM CLEARED ✅" },
      { room: "Network Traffic Analysis - Wireshark", points: "+120 pts", time: "Recent", status: "ROOM CLEARED ✅" }
    ]
  },

  services: [
    {
      id: "cybersecurity",
      title: "Cyber Security & Ethical Hacking",
      description: "Exploring vulnerability discovery, penetration testing concepts, system auditing, and participating in CTF security challenges.",
      icon: "cpu",
      highlights: ["Pentesting Fundamentals", "CTF Challenges", "Vulnerability Discovery"]
    },
    {
      id: "linux-admin",
      title: "Linux & System Administration",
      description: "Managing and configuring Red Hat Enterprise Linux (RHEL), Arch Linux, Kali Linux, system hardening, and bash automation.",
      icon: "server",
      highlights: ["RHEL Administration", "Arch & Kali Setup", "Shell & Hardening"]
    },
    {
      id: "networking",
      title: "Networking & Network Security",
      description: "Designing and inspecting network topologies, traffic packet analysis, Apache & DNS configuration, and firewalls.",
      icon: "cloud",
      highlights: ["Wireshark Traffic Analysis", "Cisco Packet Tracer", "DNS & Apache Config"]
    },
    {
      id: "ai-automation",
      title: "AI & Python Tool Building",
      description: "Developing custom Python utilities, automation scripts, and exploring AI-powered security & productivity solutions.",
      icon: "zap",
      highlights: ["Python Automation", "AI Security Ideas", "Productivity Utilities"]
    }
  ],

  skillCategories: [
    { id: "all", name: "All Technologies" },
    { id: "security", name: "Security & CTFs" },
    { id: "linux", name: "Linux & OS" },
    { id: "networking", name: "Networking" },
    { id: "programming", name: "Python & AI" }
  ],

  skills: [
    // Security & Core Systems
    { name: "Cybersecurity & Ethical Hacking", level: 95, category: "security", icon: "cpu" },
    { name: "Kali Linux / Pentesting Tools", level: 90, category: "security", icon: "terminal" },
    { name: "Nmap Network Reconnaissance", level: 92, category: "security", icon: "search" },
    { name: "Metasploit Framework", level: 85, category: "security", icon: "code" },
    { name: "Wireshark Packet Analysis", level: 88, category: "security", icon: "activity" },
    { name: "CTF & Security Lab Challenges", level: 85, category: "security", icon: "award" },

    // Linux & Systems
    { name: "Linux (Arch / RHEL / Kali)", level: 94, category: "linux", icon: "server" },
    { name: "Red Hat Enterprise Linux (RHEL)", level: 88, category: "linux", icon: "server" },
    { name: "Arch Linux Customization", level: 90, category: "linux", icon: "layers" },
    { name: "Linux Administration & Bash Shell", level: 92, category: "linux", icon: "terminal" },

    // Networking
    { name: "Cisco Packet Tracer / Topology", level: 88, category: "networking", icon: "grid" },
    { name: "DNS / Apache Web Server", level: 85, category: "networking", icon: "cloud" },
    { name: "TCP/IP & Network Security Protocols", level: 90, category: "networking", icon: "box" },

    // Programming & Tooling
    { name: "Python", level: 92, category: "programming", icon: "code" },
    { name: "Socket Programming", level: 90, category: "programming", icon: "activity" },
    { name: "Client-Server Architecture", level: 90, category: "programming", icon: "server" },
    { name: "Multithreading & Concurrency", level: 88, category: "programming", icon: "cpu" },
    { name: "Data Analysis & Optimization", level: 88, category: "programming", icon: "activity" },
    { name: "AI-Powered Security Tooling", level: 85, category: "programming", icon: "sparkles" },
    { name: "Security Tool Development", level: 88, category: "programming", icon: "settings" }
  ],

  experience: [
    {
      id: "exp-1",
      title: "Third-Year Cyber Security Student",
      company: "University Degree Program",
      period: "2023 - Present",
      location: "India",
      type: "Student",
      description: "Mastering core cybersecurity concepts, network defense strategies, operating system internals, and ethical hacking fundamentals.",
      achievements: [
        "Conducted multi-stage network vulnerability analysis using Nmap and Wireshark in simulated lab networks.",
        "Built automated Python security scripts to streamline log parsing and port discovery.",
        "Configured hardened Linux environments (RHEL, Arch, Kali) for lab research and testing."
      ],
      tags: ["Cyber Security", "Networking", "Linux Admin", "Python", "Ethical Hacking"]
    },
    {
      id: "exp-2",
      title: "Independent Security Researcher & Tool Builder",
      company: "Personal Lab & CTF Projects",
      period: "2024 - Present",
      location: "Hands-on Labs",
      type: "Self-Driven",
      description: "Experimenting with CTF challenges, AI integrations, network topology simulations, and security utilities.",
      achievements: [
        "Designed custom Python tools for quick system inspection and network monitoring.",
        "Explored AI-assisted log analysis and threat triage workflows."
      ],
      tags: ["Kali Linux", "Wireshark", "Metasploit", "Cisco Packet Tracer", "AI"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bsc(H) Advance Networking & Cyber Security",
      institution: "Brainware University",
      period: "2023 - 2026 (3rd Year)",
      details: "Focusing on Network Security, Operating Systems, Cryptography, System Hardening, and Practical Ethical Hacking Labs.",
      score: "Active Student"
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Client–Server Remote Monitoring System",
      subtitle: "Multi-featured remote device administration & security monitoring suite",
      category: "security",
      status: "completed",
      statusText: "✅ Completed",
      image: "assets/project-remote-monitoring.png",
      description: "A client–server remote monitoring system developed for authorized device administration, cybersecurity experimentation, and educational lab research. Combines live telemetry, keystroke logging, screen streaming, and audio capture into a unified socket architecture.",
      keyFeatures: [
        "Keystroke logging with timestamped log storage & management",
        "Live screen monitoring & real-time screenshot capture and sharing",
        "Live audio and voice recording stream capabilities",
        "Centralized monitoring dashboard and log management",
        "Custom client–server socket communication architecture"
      ],
      techStack: ["Python", "Socket Programming", "Client-Server", "Multithreading", "Cybersecurity", "Linux"],
      githubUrl: "https://github.com/supersus151879-maker",
      liveUrl: "https://github.com/supersus151879-maker",
      featured: true
    },
    {
      id: "proj-2",
      title: "Personal AI Desktop Assistant",
      subtitle: "Voice & hand-gesture desktop controller with zero-trust permission boundary",
      category: "ai",
      status: "completed",
      statusText: "✅ Completed",
      image: "assets/project-ai-assistant.png",
      description: "An AI-powered desktop assistant enabling natural voice commands and computer vision hand gestures to control laptop operations. Incorporates a security permission boundary (Voice/Gesture → AI → Intent → Permission Check → Allowed Action → Execution) to prevent unauthorized OS command execution.",
      keyFeatures: [
        "🎙️ Wake-word detection & continuous speech intent recognition",
        "✋ Computer vision hand-gesture shortcut controls (OpenCV / MediaPipe)",
        "🤖 AI reasoning engine for natural language task decision making",
        "🔐 Security Permission Boundary preventing unauthorized OS action execution",
        "🔊 Synthesized voice feedback & privacy-centric system control (lock, shutdown, apps)",
        "⚡ Automated daily workflow triggers & custom Python task scripts"
      ],
      techStack: ["Python", "OpenCV", "SpeechRecognition", "AI Reasoning", "Security Architecture", "Linux Admin"],
      githubUrl: "https://github.com/supersus151879-maker",
      liveUrl: "https://github.com/supersus151879-maker",
      featured: true
    },
    {
      id: "proj-3",
      title: "AI-Based Class & Timetable Optimizer",
      subtitle: "Intelligent scheduling tool for workload analysis & conflict-free timetable optimization",
      category: "ai",
      status: "completed",
      statusText: "✅ Completed",
      image: "assets/project-timetable-optimizer.png",
      description: "An intelligent scheduling platform designed for teachers and educational institutions. Analyzes constraints, teacher workload preferences, and class difficulty through data visualization graphs, using optimization algorithms to generate balanced, conflict-free timetables.",
      keyFeatures: [
        "📅 Automatic conflict-free timetable & schedule generation",
        "👨‍🏫 Teacher workload analysis (consecutive class pressure & fatigue scoring)",
        "📊 Interactive workload visualization charts & graphical breakdown",
        "⚖️ Balanced teacher scheduling & difficulty distribution across days",
        "🚫 Automated collision detection (room, subject, and instructor overlaps)",
        "📈 Pipeline: Teacher Data → Workload Analysis → Pressure ID → Optimization → Recommended Timetable"
      ],
      techStack: ["AI", "Python", "Data Analysis", "Optimization", "Data Visualization", "Algorithms"],
      githubUrl: "https://github.com/supersus151879-maker",
      liveUrl: "https://github.com/supersus151879-maker",
      featured: true
    },
    {
      id: "proj-4",
      title: "AI Python Code Explainer",
      subtitle: "Developer tool for instant line-by-line & overall Python code explanation",
      category: "ai",
      status: "completed",
      statusText: "✅ Completed",
      image: "assets/project-code-explainer.png",
      description: "An AI-powered developer tool designed to explain complex Python code quickly and clearly. Generates beginner-friendly explanations, structural analysis, and line-by-line breakdowns within seconds to accelerate learning, debugging, and code reviews.",
      keyFeatures: [
        "🐍 Automated Python code structure analysis & syntax evaluation",
        "⚡ Sub-second fast explanation generation",
        "🧠 AI-powered code logic & algorithm understanding",
        "📖 Beginner-friendly explanations simplifying complex functions & OOP logic",
        "🔍 Dual Granularity: Line-by-line walkthroughs and high-level summaries",
        "🛠️ Pipeline: Python Code → AI Analysis → Explanation → User"
      ],
      techStack: ["AI", "Python", "LLM APIs", "Developer Tools", "Code Parsing", "Productivity"],
      githubUrl: "https://github.com/supersus151879-maker",
      liveUrl: "https://github.com/supersus151879-maker",
      featured: true
    },
    {
      id: "proj-5",
      title: "🔒 Classified Project #01",
      subtitle: "Confidential Security Research & Development",
      category: "security",
      status: "processing",
      statusText: "🔒 Processing...",
      image: "assets/project-locked-1.png",
      description: "Confidential project under active engineering and security research.",
      keyFeatures: [
        "🔒 Classified research phase",
        "⚙️ Processing system architecture",
        "🛡️ Zero-trust boundary evaluation"
      ],
      techStack: ["Processing...", "Cybersecurity", "Python"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: "proj-6",
      title: "🔒 Classified Project #02",
      subtitle: "Confidential Linux Systems Hardening",
      category: "linux",
      status: "processing",
      statusText: "🔒 Processing...",
      image: "assets/project-locked-2.png",
      description: "Confidential project under active engineering and Linux kernel hardening.",
      keyFeatures: [
        "🔒 Classified research phase",
        "⚙️ Processing system architecture",
        "🐧 Red Hat & Arch Linux kernel optimization"
      ],
      techStack: ["Processing...", "Linux Admin", "RHEL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: "proj-7",
      title: "🔒 Classified Project #03",
      subtitle: "Confidential Network Defense & Inspection",
      category: "networking",
      status: "processing",
      statusText: "🔒 Processing...",
      image: "assets/project-locked-1.png",
      description: "Confidential project under active network traffic analysis research.",
      keyFeatures: [
        "🔒 Classified research phase",
        "⚙️ Processing network capture streams",
        "🌐 Subnet anomaly inspection"
      ],
      techStack: ["Processing...", "Networking", "Wireshark"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: "proj-8",
      title: "🔒 Classified Project #04",
      subtitle: "Confidential AI Tooling & Intelligence",
      category: "ai",
      status: "processing",
      statusText: "🔒 Processing...",
      image: "assets/project-locked-2.png",
      description: "Confidential project under active AI model engineering.",
      keyFeatures: [
        "🔒 Classified research phase",
        "⚙️ Processing AI models & algorithms",
        "🤖 Automated risk scoring"
      ],
      techStack: ["Processing...", "AI", "Python"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    }
  ],

  testimonials: [
    {
      id: "test-1",
      quote: "Pritam brings a strong problem-solving mindset to cybersecurity. His dedication to learning fundamentals and building practical tools sets him apart.",
      name: "Peer / Mentor",
      role: "Security Community",
      company: "Cyber Security Lab"
    }
  ],

  certificates: [
    {
      id: "cert-01",
      title: "Practical Ethical Hacking & Pentesting",
      issuer: "TCM Security Academy",
      date: "Verified",
      badge: "Ethical Hacking",
      icon: "cpu",
      image: "assets/certificate/1-practical-ethical-hacking-the-complete-course-page-00001.jpg",
      description: "Official verified certificate document for Practical Ethical Hacking & Pentesting. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-02",
      title: "Network Security Audit & Defense",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/1028d7f3-5860-4796-ba86-b6fad89f870f.webp",
      description: "Official verified certificate document for Network Security Audit & Defense. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-03",
      title: "Cyber Security Participation Credential",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/24103480044-participation_certificate-page-00001.jpg",
      description: "Official verified certificate document for Cyber Security Participation Credential. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-04",
      title: "Cybersecurity Incident Operations",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/2ZFnEGEDKTQMtEv9C_4nAmAbTbHbnGMNSyo_696115d92ba25d20e355f75a_1768122397271_completion_certi-page-00001.jpg",
      description: "Official verified certificate document for Cybersecurity Incident Operations. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-05",
      title: "ARCX Digital Defense & Security Certificate",
      issuer: "ARCX Cyber Academy",
      date: "Verified",
      badge: "ARCX Security",
      icon: "award",
      image: "assets/certificate/arcx-digital-defense-certificate.jpg",
      description: "Official verified certificate document for ARCX Digital Defense & Security Certificate. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-06",
      title: "Cyber Security Certificate of Excellence",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/Certificate.png",
      description: "Official verified certificate document for Cyber Security Certificate of Excellence. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-07",
      title: "Introduction to Red Team Operation Management",
      issuer: "Red Team Operations",
      date: "Verified",
      badge: "Red Teaming",
      icon: "cpu",
      image: "assets/certificate/Course Completion_ Introduction to Red Team Operation Management - Google Chrome 1_17_2026 -page-00001.jpg",
      description: "Official verified certificate document for Introduction to Red Team Operation Management. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-08",
      title: "Red Team Operational Strategy",
      issuer: "Red Team Operations",
      date: "Verified",
      badge: "Red Teaming",
      icon: "cpu",
      image: "assets/certificate/Course Completion_ Introduction to Red Team Operation Management - Google Chrome 1_17_2026 5_15_55 PM.png",
      description: "Official verified certificate document for Red Team Operational Strategy. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-09",
      title: "Network Threat Analysis & Mitigation",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_696115d92ba25d20e355f75a_1767971223316_completion_certi-page-00001.jpg",
      description: "Official verified certificate document for Network Threat Analysis & Mitigation. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-10",
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "Verified",
      badge: "Cisco Networking",
      icon: "cloud",
      image: "assets/certificate/Exploring_Networking_with_Cisco_Packet_Tracer_certificate_pritammondal151879-gmail-com_8d1d-page-00001.jpg",
      description: "Official verified certificate document for Exploring Networking with Cisco Packet Tracer. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-11",
      title: "Cyber Defense Operations & SOC Fundamentals",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/GYcpProEZQFCiSmT6_2sNmYuurxgpFYawco_696115d92ba25d20e355f75a_1767983620518_completion_certi-page-00001.jpg",
      description: "Official verified certificate document for Cyber Defense Operations & SOC Fundamentals. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-12",
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "Verified",
      badge: "Cisco Networking",
      icon: "cloud",
      image: "assets/certificate/Getting_Started_with_Cisco_Packet_Tracer_certificate_pritammondal151879-gmail-com_363bdab4--page-00001.jpg",
      description: "Official verified certificate document for Getting Started with Cisco Packet Tracer. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-13",
      title: "Introduction to Cybersecurity",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/Introduction_to_Cybersecurity_certificate_pritammondal151879-gmail-com_7d653a40-8c45-4792-9-page-00001.jpg",
      description: "Official verified certificate document for Introduction to Cybersecurity. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-14",
      title: "Network Technician Career Path Certificate",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/Network_Technician_Career_Path_certificate_pritammondal151879-gmail-com_8b92d6d8-e8b7-4159--page-00001.jpg",
      description: "Official verified certificate document for Network Technician Career Path Certificate. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-15",
      title: "Pritam Mondal Cyber Security Credential #1",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/Pritam Mondal (1)-page-00001.jpg",
      description: "Official verified certificate document for Pritam Mondal Cyber Security Credential #1. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-16",
      title: "Pritam Mondal Cyber Security Credential #2",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/Pritam Mondal-page-00001.jpg",
      description: "Official verified certificate document for Pritam Mondal Cyber Security Credential #2. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-17",
      title: "Vulnerability Discovery & Exploit Assessment",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/RNhbu8QnDzthwynEf_M6JGAwZ52SMusMEcK_696115d92ba25d20e355f75a_1768123181118_completion_certi-page-00001.jpg",
      description: "Official verified certificate document for Vulnerability Discovery & Exploit Assessment. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-18",
      title: "TryHackMe Cyber Security Mastery #1",
      issuer: "TryHackMe",
      date: "Verified",
      badge: "TryHackMe CTF",
      icon: "terminal",
      image: "assets/certificate/THM-RFBAWDVBPF-page-00001.jpg",
      description: "Official verified certificate document for TryHackMe Cyber Security Mastery #1. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-19",
      title: "TryHackMe Cyber Security Mastery #2",
      issuer: "TryHackMe",
      date: "Verified",
      badge: "TryHackMe CTF",
      icon: "terminal",
      image: "assets/certificate/THM-TSEUC3IKVO-page-00001.jpg",
      description: "Official verified certificate document for TryHackMe Cyber Security Mastery #2. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-23",
      title: "Certified Ransomware Protection Officer (CRPO)",
      issuer: "Cyber Security Certification Board",
      date: "Verified",
      badge: "Ransomware Defense",
      icon: "award",
      image: "assets/certificate/certificate-crpo-certified-ransomware-protection-officer-90-days-64d63660ac9488bbf50f3e76-page-00001.jpg",
      description: "Official verified certificate document for Certified Ransomware Protection Officer (CRPO). Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-24",
      title: "Certified SME Cyber Security Officer (CSCSO)",
      issuer: "Cyber Security Certification Board",
      date: "Verified",
      badge: "Security Officer",
      icon: "award",
      image: "assets/certificate/certificate-cscso-certified-sme-cyber-security-officer-90-days-64d27672fd3cdf761404c8c5-page-00001.jpg",
      description: "Official verified certificate document for Certified SME Cyber Security Officer (CSCSO). Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-25",
      title: "AI-100 Fundamentals Certification",
      issuer: "Tech Academy",
      date: "Verified",
      badge: "AI & Python",
      icon: "zap",
      image: "assets/certificate/certificate-of-completion-for-ai-100-fundamentals-page-00001.jpg",
      description: "Official verified certificate document for AI-100 Fundamentals Certification. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-26",
      title: "Practical IT Help Desk & Systems Support",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/certificate-of-completion-for-practical-help-desk-page-00001.jpg",
      description: "Official verified certificate document for Practical IT Help Desk & Systems Support. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-27",
      title: "Practical Security Fundamentals",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/certificate-of-completion-for-practical-security-fundamentals-page-00001.jpg",
      description: "Official verified certificate document for Practical Security Fundamentals. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-28",
      title: "Programming 100 Fundamentals",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/certificate-of-completion-for-programming-100-fundamentals-page-00001.jpg",
      description: "Official verified certificate document for Programming 100 Fundamentals. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-29",
      title: "Soft Skills for Technical Career Success",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/certificate-of-completion-for-soft-skills-for-the-job-market-page-00001.jpg",
      description: "Official verified certificate document for Soft Skills for Technical Career Success. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-30",
      title: "Certified Cybersecurity Professional",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/certified_certificate-page-00001.jpg",
      description: "Official verified certificate document for Certified Cybersecurity Professional. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-33",
      title: "Blue Team Incident Response & Forensics",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_696115d92ba25d20e355f75a_1767981848232_completion_certi-page-00001.jpg",
      description: "Official verified certificate document for Blue Team Incident Response & Forensics. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-36",
      title: "Web Application Vulnerability Scanning",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_696115d92ba25d20e355f75a_1768121924656_completion_certi-page-00001.jpg",
      description: "Official verified certificate document for Web Application Vulnerability Scanning. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-37",
      title: "Linux Systems Hardening & Security Audit",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/x52Jy9s26xNbZkTQ7_2sNmYuurxgpFYawco_696115d92ba25d20e355f75a_1767985832912_completion_certi-page-00001.jpg",
      description: "Official verified certificate document for Linux Systems Hardening & Security Audit. Click to inspect full-resolution picture preview."
    },
    {
      id: "cert-38",
      title: "Cloud Infrastructure Security & Compliance",
      issuer: "Cyber Security Institute",
      date: "Verified",
      badge: "Cyber Security",
      icon: "award",
      image: "assets/certificate/yTszJTvkHFBH6zAn3_gCW7Xki5Y3vNpBmnn_696115d92ba25d20e355f75a_1768122719169_completion_certi-page-00001.jpg",
      description: "Official verified certificate document for Cloud Infrastructure Security & Compliance. Click to inspect full-resolution picture preview."
    }
  ]
};