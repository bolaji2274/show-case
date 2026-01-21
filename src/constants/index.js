export const myProjects = [
  {
    id: 1,
    title: "Infrastructure as Code - Terraform",
    description:
      "Enterprise-grade Infrastructure as Code (IaC) solution using Terraform to automate AWS cloud provisioning, ensuring consistency and high availability.",
    subDescription: [
      "Architected scalable AWS infrastructure using Terraform with modular design patterns for multi-environment consistency.",
      "Implemented VPC architecture with secure multi-tier networking, security groups, and private subnets.",
      "Automated infrastructure provisioning using GitOps and CI/CD deployment pipelines.",
      "Created highly reusable HCL modules for EC2, RDS, S3, and IAM to standardize cloud resources.",
    ],
    href: "https://github.com/bolaji2274/IaC-Terraform",
    logo: "",
    image: "/images/projects/terraform.webp",
    target: "_blank",
    tags: [
      { id: 1, name: "Terraform", path: "/images/logos/terraform.svg" },
      { id: 2, name: "AWS", path: "/images/logos/aws.svg" },
      { id: 3, name: "DevOps", path: "/images/logos/devops.svg" },
    ],
  },
  {
    id: 2,
    title: "AWS Disaster Recovery Workload",
    description:
      "Resilient Disaster Recovery (DR) architecture designed with Terraform to ensure business continuity and low RTO/RPO for AWS workloads.",
    subDescription: [
      "Designed multi-region disaster recovery architecture utilizing AWS Route 53 and Pilot Light strategies.",
      "Implemented automated RDS cross-region snapshots and S3 bucket replication for data durability.",
      "Created automated backup-and-restore mechanisms to protect critical business data.",
      "Built CloudWatch monitoring and SNS alerting systems for real-time disaster recovery health checks.",
    ],
    href: "https://github.com/bolaji2274/AwsDisasterRecoveryWorkloadTerraform",
    logo: "",
    image: "/images/projects/disaster_recovery.webp",
    target: "_blank",
    tags: [
      { id: 1, name: "AWS", path: "/images/logos/aws.webp" },
      { id: 2, name: "Terraform", path: "/images/logos/terraform.webp" },
      { id: 3, name: "DevOps", path: "/images/logos/devops.webp" },
    ],
  },
  {
    id: 3,
    title: "Honeypot Security System",
    description:
      "Advanced cybersecurity honeypot system built with Terraform for proactive threat detection and network security monitoring.",
    subDescription: [
      "Deployed high-interaction decoy systems using Terraform to identify and analyze unauthorized access attempts.",
      "Implemented centralized logging for intrusion detection and forensic analysis of attack vectors.",
      "Created automated threat intelligence gathering tools to identify malicious IP addresses.",
      "Built isolated network environments to safely monitor and contain potential security threats.",
    ],
    href: "https://github.com/bolaji2274/honeypot-terraform",
    logo: "",
    image: "/images/projects/honeypot.webp",
    target: "_blank",
    tags: [
      { id: 1, name: "Terraform", path: "/images/logos/terraform.webp" },
      { id: 2, name: "AWS", path: "/images/logos/aws.webp" },
      { id: 3, name: "Cybersecurity", path: "/images/logos/security.webp" },
      { id: 4, name: "Monitoring", path: "/images/logos/monitoring.webp" },
    ],
  },
  {
    id: 4,
    title: "Auto-Scaling Infrastructure",
    description:
      "Self-healing, dynamic auto-scaling infrastructure using Terraform for cost-optimized and performance-driven cloud resource management.",
    subDescription: [
      "Built Auto-Scaling Groups (ASG) with dynamic scaling policies based on CPU and memory metrics.",
      "Implemented Application Load Balancers (ALB) with sophisticated health check mechanisms.",
      "Optimized cloud spend using Spot Instances and scheduled scaling for off-peak workloads.",
      "Integrated CloudWatch monitoring for real-time performance-based infrastructure scaling.",
    ],
    href: "https://github.com/bolaji2274/terraform-autoscaling",
    logo: "",
    image: "/images/projects/autoscaling.webp",
    target: "_blank",
    tags: [
      { id: 1, name: "AWS", path: "/images/logos/aws.webp" },
      { id: 2, name: "Terraform", path: "/images/logos/terraform.webp" },
      { id: 3, name: "Auto-Scaling", path: "/images/logos/autoscaling.webp" },
      { id: 4, name: "CloudWatch", path: "/images/logos/aws-cloudwatch.webp" },
    ],
  },
  {
    id: 5,
    title: "Livestock Inventory Management System",
    description:
      "Full-stack AgTech solution for livestock inventory, leveraging Node.js and MongoDB to track animal health, feeding, and sales.",
    subDescription: [
      "Built a robust RESTful API to manage thousands of livestock records and health history data.",
      "Implemented secure customer management and transactional processing for livestock sales.",
      "Created automated scheduling for feeding and vaccination alerts using Node-cron.",
      "Developed a data-driven reporting dashboard for farm productivity and financial forecasting.",
    ],
    href: "https://nasfarm.com",
    target: "_blank",
    logo: "",
    image: "/images/projects/livestock.webp",
    tags: [
      { id: 1, name: "Node.js", path: "/images/logos/nodejs.webp" },
      { id: 2, name: "MongoDB", path: "/images/logos/mongodb.webp" },
      { id: 3, name: "Express.js", path: "/images/logos/express.webp" },
      { id: 4, name: "REST API", path: "/images/logos/api.webp" },
    ],
  },
  {
    id: 6,
    title: "Telegram Bot Application",
    description:
      "Automated Telegram Bot utilizing Python and NLP for user management, notifications, and intelligent response automation.",
    subDescription: [
      "Developed an asynchronous Telegram bot using Python with natural language processing (NLP).",
      "Implemented secure user authentication and persistent session management using SQLite.",
      "Created event-driven notification systems for real-time user reminders.",
      "Integrated external APIs to provide live data including weather, news, and financial updates.",
    ],
    href: "",
    target: "_blank",
    logo: "",
    image: "/images/projects/telegram_bot1.webp",
    tags: [
      { id: 1, name: "Python", path: "/images/logos/python.webp" },
      { id: 2, name: "Telegram API", path: "/images/logos/telegram.webp" },
      { id: 3, name: "NLP", path: "/images/logos/nlp.webp" },
      { id: 4, name: "SQLite", path: "/images/logos/sqlite.webp" },
    ],
  },
  {
    id: 7,
    title: "Python Sentiment Analysis Tool",
    description:
      "Machine Learning application using Python and NLP to analyze textual data for emotional tone and market sentiment insights.",
    subDescription: [
      "Built a sentiment analysis engine using Scikit-learn and machine learning classification libraries.",
      "Implemented text preprocessing pipelines (tokenization, stemming) for high-accuracy feature extraction.",
      "Developed a web-based interface using Flask for real-time sentiment analysis of social media feeds.",
      "Created a data visualization dashboard to track sentiment trends over time.",
    ],
    href: "",
    target: "_blank",
    logo: "",
    image: "/images/projects/python_sentiment.webp",
    tags: [
      { id: 1, name: "Python", path: "/images/logos/python.webp" },
      { id: 2, name: "Machine Learning", path: "/images/logos/ml.webp" },
      { id: 3, name: "Flask", path: "/images/logos/flask.webp" },
    ],
  },
  {
    id: 8,
    title: "VPC Architecture with Terraform",
    description:
      "Production-ready AWS VPC architecture designed with 'Zero Trust' security principles using Terraform for isolated cloud networking.",
    subDescription: [
      "Designed multi-tier VPC network topology featuring Public, Private, and Database subnets.",
      "Implemented NAT Gateways, Internet Gateways, and custom route tables for traffic isolation.",
      "Enforced granular security through layered Security Groups and Network ACLs.",
      "Integrated VPC Peering and VPN solutions for secure hybrid-cloud and cross-account connectivity.",
    ],
    href: "https://github.com/bolaji2274/vpc-Architecture-with-Terraform",
    target: "_blank",
    logo: "",
    image: "/images/projects/vpc_terraform.webp",
    tags: [
      { id: 1, name: "AWS VPC", path: "/images/logos/aws-vpc.webp" },
      { id: 2, name: "Terraform", path: "/images/logos/terraform.webp" },
      { id: 3, name: "Networking", path: "/images/logos/networking.webp" },
      { id: 4, name: "Security", path: "/images/logos/security.webp" },
    ],
  },
  {
    id: 9,
    title: "DevOps System Engineering Scripts",
    description:
      "A comprehensive automation toolkit of Shell scripts for Linux system administration, security hardening, and DevOps workflows.",
    subDescription: [
      "Engineered advanced Shell scripts to automate server provisioning and application configuration.",
      "Implemented automated off-site backup strategies and system monitoring tools.",
      "Developed custom CI/CD deployment scripts for seamless application delivery.",
      "Built automated system health checks and alerting mechanisms for server reliability.",
    ],
    href: "https://github.com/bolaji2274/alx-system_engineering-devops",
    logo: "",
    image: "/images/projects/script.webp",
    tags: [
      { id: 1, name: "Shell Script", path: "/images/logos/bash.webp" },
      { id: 2, name: "Linux", path: "/images/logos/linux.webp" },
      { id: 3, name: "DevOps", path: "/images/logos/devops.webp" },
      { id: 4, name: "Automation", path: "/images/logos/automation.webp" },
    ],
  },
  {
    id: 10,
    title: "CI/CD Pipeline with Docker",
    description:
      "End-to-end automated CI/CD pipeline leveraging Docker, Jenkins, and Kubernetes for containerized microservices deployment.",
    subDescription: [
      "Containerized modern applications using Docker and optimized Dockerfile multi-stage builds.",
      "Built declarative Jenkins pipelines for automated testing, building, and artifact management.",
      "Implemented container orchestration and management using Kubernetes and Docker Swarm.",
      "Designed Blue-Green deployment strategies to ensure zero-downtime application updates.",
    ],
    href: "",
    logo: "",
    image: "/images/projects/cicd_with_docker.webp",
    tags: [
      { id: 1, name: "Docker", path: "/images/logos/docker.webp" },
      { id: 2, name: "Jenkins", path: "/images/logos/jenkins.webp" },
      { id: 3, name: "Kubernetes", path: "/images/logos/kubernetes.webp" },
      { id: 4, name: "CI/CD", path: "/images/logos/jenkins.webp" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/2349155113797?text=Hi%20Bolaji%2C%20I%20found%20your%20profile%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20project.",
    icon: "/images/socials/whatsApp.webp",
    target: "_blank"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bolaji-hammed-aa9010234/",
    icon: "/images/socials/linkedIn.webp",
    target: "_blank"
  },
  {
    name: "Instagram",
    href: "",
    icon: "/images/socials/instagram.webp",
    target: "_blank"
  },
  {
    name: "GitHub",
    href: "https://github.com/bolaji2274",
    icon: "/images/socials/github.webp",
    target: "_blank"
  },
  {
    name: "Twitter",
    href: "",
    icon: "/images/socials/twitter.webp",
    target: "_blank"
  },
];

export const experiences = [
  {
    title: "DevOps Engineer",
    job: "Cloud Infrastructure & Automation Architect",
    date: "2021-Present",
    contents: [
      "Designed and implemented high-availability Infrastructure as Code (IaC) using Terraform for AWS, reducing deployment latency by 70%.",
      "Architected enterprise CI/CD pipelines using Jenkins, Docker, and Kubernetes for zero-downtime application delivery.",
      "Deployed comprehensive observability stacks using CloudWatch, Prometheus, and Grafana for full-stack monitoring.",
      "Engineered robust Disaster Recovery (DR) and backup solutions, maintaining 99.9% SLA for mission-critical apps.",
      "Automated complex configuration management and server provisioning using Ansible and Terraform modules.",
    ],
  },
  {
    title: "Backend Developer",
    job: "Full-Stack Software Engineering",
    date: "2020-2023",
    contents: [
      "Developed high-performance REST APIs using Node.js, Express.js, and Python Flask for scalable web ecosystems.",
      "Built a secure MERN-based livestock management system with advanced MongoDB data modeling and sales analytics.",
      "Created AI-driven Telegram bots featuring natural language processing (NLP) for automated customer engagement.",
      "Developed sentiment analysis tools using Python (NLTK) and ML libraries to extract actionable emotional insights.",
      "Optimized SQL/NoSQL database schemas to improve query performance and data integrity for high-traffic apps.",
    ],
  },
  {
    title: "System Administrator",
    job: "Linux Systems & Security Hardening",
    date: "2020-2022",
    contents: [
      "Optimized enterprise Linux server environments through automated provisioning and advanced configuration scripts.",
      "Implemented 'Zero Trust' security hardening and continuous monitoring for sensitive server infrastructures.",
      "Created expert-level Shell/Bash scripts for system automation, secure backups, and real-time health monitoring.",
      "Maintained 24/7 high-availability systems using advanced load balancing (ELB) and failover mechanisms.",
      "Provided L3 technical support and troubleshooting for mission-critical production environments.",
    ],
  },
  {
    title: "Software Developer",
    job: "Agile Application Development",
    date: "2020-2024",
    contents: [
      "Engineered modern web applications using advanced JavaScript frameworks and responsive design principles.",
      "Created dynamic, mobile-first user interfaces with a focus on performance and accessibility (WCAG).",
      "Integrated complex third-party REST APIs and microservices for enhanced application functionality.",
      "Lead code reviews and implemented automated unit testing to ensure high-quality software delivery.",
      "Collaborated in high-velocity Agile teams to deliver features in rapid sprint cycles.",
    ],
  },
];

export const reviews = [
  {
    name: "Sarah J.",
    username: "@sarah_tech",
    body: "Exceptional DevOps skills! Bolaji's infrastructure automation saved our team hundreds of manual hours.",
    img: "https://robohash.org/sarah",
  },
  {
    name: "Michael C.",
    username: "@m_chen_dev",
    body: "Outstanding Terraform expertise. The AWS cloud architecture was secure, scalable, and perfectly implemented.",
    img: "https://robohash.org/michael",
  },
  {
    name: "Emily R.",
    username: "@emily_cloud",
    body: "The CI/CD pipeline implementation was flawless. Our deployment process is now faster and more reliable.",
    img: "https://robohash.org/emily",
  },
  {
    name: "David K.",
    username: "@david_devops",
    body: "Impressive backend engineering. The API designs were clean, secure, and performed exceptionally under load.",
    img: "https://robohash.org/david",
  },
  {
    name: "Lisa W.",
    username: "@lisa_admin",
    body: "Great problem-solving. The disaster recovery solution Bolaji built exceeded all our technical expectations.",
    img: "https://robohash.org/lisa",
  },
  {
    name: "James M.",
    username: "@j_miller",
    body: "A true professional in DevOps practices. Our cloud infrastructure is significantly more stable now.",
    img: "https://robohash.org/james",
  },
  {
    name: "Anna T.",
    username: "@anna_scripts",
    body: "Perfectly crafted automation scripts. Bolaji made our system administration completely effortless.",
    img: "https://robohash.org/anna",
  },
  {
    name: "Robert L.",
    username: "@r_lee_cloud",
    body: "Excellent cloud architecture. The focus on security and scalability was visible in every part of the design.",
    img: "https://robohash.org/robert",
  },
];

export const skills = [
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "AWS", level: "Expert" },
      { name: "Terraform", level: "Expert" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "Jenkins", level: "Advanced" },
      { name: "Ansible", level: "Intermediate" },
    ],
  },
  {
    category: "Programming Languages",
    technologies: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Shell Scripting", level: "Expert" },
      { name: "HCL", level: "Advanced" },
      { name: "YAML", level: "Advanced" },
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Flask", level: "Intermediate" },
      { name: "REST APIs", level: "Expert" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  },
  {
    category: "Monitoring & Security",
    technologies: [
      { name: "CloudWatch", level: "Advanced" },
      { name: "Prometheus", level: "Intermediate" },
      { name: "Grafana", level: "Intermediate" },
      { name: "Security Hardening", level: "Advanced" },
      { name: "Network Security", level: "Advanced" },
    ],
  },
];