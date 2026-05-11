const talentsData = [
  {
    id: 1,
    name: "Saydova AKP",
    role: "Software Engineer",
    experience: "3 Years",
    skills: ["Java Springboot", "React", "Automation Tools"],
    bio: "Software Engineer with 3 years of experience specializing in backend development using Java Spring Boot and frontend development with React. Strong background in automation testing, software quality assurance, and building scalable, production-ready applications.",
    contact: "https://dapedev.web.id"
  },
  {
    id: 2,
    name: "Andi Pratama",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["React", "Tailwind", "JavaScript"],
    bio: "Frontend developer with strong expertise in building responsive and accessible user interfaces using modern JavaScript frameworks and design systems.",
    contact: "https://github.com"
  },
  {
    id: 3,
    name: "Siti Rahma",
    role: "Fullstack Engineer",
    experience: "5 Years",
    skills: ["Node.js", "React", "MongoDB"],
    bio: "Fullstack engineer experienced in developing end-to-end web applications, from backend architecture to modern interactive frontend experiences.",
    contact: "https://github.com"
  },
  {
    id: 4,
    name: "Rizky Maulana",
    role: "DevOps Engineer",
    experience: "4 Years",
    skills: ["Docker", "Kubernetes", "AWS"],
    bio: "DevOps engineer focused on CI/CD automation, cloud infrastructure, and scalable deployment pipelines for modern applications.",
    contact: "https://github.com"
  },
  {
    id: 5,
    name: "Dewi Lestari",
    role: "UI/UX Designer",
    experience: "3 Years",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    bio: "Creative UI/UX designer passionate about crafting intuitive digital experiences and user-centered product designs.",
    contact: "https://github.com"
  },
  {
    id: 6,
    name: "Fajar Nugroho",
    role: "Backend Engineer",
    experience: "6 Years",
    skills: ["Java", "Spring Boot", "MySQL"],
    bio: "Backend engineer with strong expertise in enterprise-level applications, microservices architecture, and secure API development.",
    contact: "https://github.com"
  },
  {
    id: 7,
    name: "Nadia Putri",
    role: "Frontend Developer",
    experience: "2 Years",
    skills: ["Vue", "JavaScript", "CSS"],
    bio: "Frontend developer passionate about clean UI implementation, performance optimization, and responsive web design.",
    contact: "https://github.com"
  },
  {
    id: 8,
    name: "Agus Saputra",
    role: "Fullstack Engineer",
    experience: "5 Years",
    skills: ["Laravel", "Vue", "MySQL"],
    bio: "Fullstack developer experienced in building scalable SaaS platforms with strong backend logic and modern frontend frameworks.",
    contact: "https://github.com"
  },
  {
    id: 9,
    name: "Maya Sari",
    role: "Mobile Developer",
    experience: "4 Years",
    skills: ["Flutter", "Dart", "Firebase"],
    bio: "Mobile developer focused on building cross-platform applications with smooth performance and clean architecture.",
    contact: "https://github.com"
  },
  {
    id: 10,
    name: "Ilham Pratama",
    role: "Backend Engineer",
    experience: "3 Years",
    skills: ["Node.js", "Express", "MongoDB"],
    bio: "Backend developer specializing in RESTful APIs, authentication systems, and scalable backend services.",
    contact: "https://github.com"
  },

  {
    id: 11,
    name: "Rina Kurnia",
    role: "UI/UX Designer",
    experience: "5 Years",
    skills: ["Figma", "Sketch", "User Research"],
    bio: "UI/UX designer with deep experience in user research and crafting high-conversion digital product interfaces.",
    contact: "https://github.com"
  },
  {
    id: 12,
    name: "Teguh Santoso",
    role: "DevOps Engineer",
    experience: "6 Years",
    skills: ["AWS", "Terraform", "Docker"],
    bio: "DevOps engineer focused on infrastructure automation, cloud scaling, and system reliability engineering.",
    contact: "https://github.com"
  },
  {
    id: 13,
    name: "Dina Amelia",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["React", "TypeScript", "Tailwind"],
    bio: "Frontend engineer focused on building scalable UI systems with strong component architecture and design consistency.",
    contact: "https://github.com"
  },
  {
    id: 14,
    name: "Yusuf Hidayat",
    role: "Backend Engineer",
    experience: "7 Years",
    skills: ["Go", "PostgreSQL", "Redis"],
    bio: "Experienced backend engineer specializing in high-load systems, caching strategies, and microservice design.",
    contact: "https://github.com"
  },
  {
    id: 15,
    name: "Lina Marlina",
    role: "Fullstack Engineer",
    experience: "4 Years",
    skills: ["React", "Node.js", "MySQL"],
    bio: "Fullstack engineer building modern web applications with strong focus on performance and maintainability.",
    contact: "https://github.com"
  },
  {
    id: 16,
    name: "Reza Fahmi",
    role: "Mobile Developer",
    experience: "5 Years",
    skills: ["Kotlin", "Android", "Firebase"],
    bio: "Android developer experienced in building scalable mobile applications with smooth user experience.",
    contact: "https://github.com"
  },
  {
    id: 17,
    name: "Putri Handayani",
    role: "UI/UX Designer",
    experience: "2 Years",
    skills: ["Figma", "Prototyping", "UX Writing"],
    bio: "UI/UX designer passionate about creating intuitive interfaces and improving user journey through design thinking.",
    contact: "https://github.com"
  },
  {
    id: 18,
    name: "Eko Prasetyo",
    role: "Backend Engineer",
    experience: "5 Years",
    skills: ["Node.js", "NestJS", "PostgreSQL"],
    bio: "Backend engineer focused on scalable architectures, clean code principles, and system reliability.",
    contact: "https://github.com"
  },
  {
    id: 19,
    name: "Salsa Wijaya",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["React", "Next.js", "CSS"],
    bio: "Frontend developer building fast and SEO-friendly web applications using modern React ecosystem.",
    contact: "https://github.com"
  },
  {
    id: 20,
    name: "Hendra Gunawan",
    role: "DevOps Engineer",
    experience: "4 Years",
    skills: ["Docker", "CI/CD", "Linux"],
    bio: "DevOps engineer with strong background in automation, containerization, and deployment optimization.",
    contact: "https://github.com"
  },

  {
    id: 21,
    name: "Ayu Lestari",
    role: "UI/UX Designer",
    experience: "3 Years",
    skills: ["Figma", "Illustrator", "Design Systems"],
    bio: "Designer focused on building consistent design systems and user-friendly digital experiences.",
    contact: "https://github.com"
  },
  {
    id: 22,
    name: "Fikri Ramadhan",
    role: "Backend Engineer",
    experience: "6 Years",
    skills: ["Java", "Spring Boot", "Kafka"],
    bio: "Backend engineer experienced in event-driven architecture and scalable enterprise systems.",
    contact: "https://github.com"
  },
  {
    id: 23,
    name: "Novi Susanti",
    role: "Frontend Developer",
    experience: "2 Years",
    skills: ["Vue", "Nuxt", "JavaScript"],
    bio: "Frontend developer focused on building modern SSR applications and responsive UI components.",
    contact: "https://github.com"
  },
  {
    id: 24,
    name: "Bagas Pratama",
    role: "Fullstack Engineer",
    experience: "5 Years",
    skills: ["MERN Stack"],
    bio: "Fullstack engineer with experience building scalable web applications using modern JavaScript stack.",
    contact: "https://github.com"
  },
  {
    id: 25,
    name: "Intan Permata",
    role: "Mobile Developer",
    experience: "3 Years",
    skills: ["Flutter", "Dart", "REST API"],
    bio: "Mobile developer building cross-platform apps with focus on performance and clean architecture.",
    contact: "https://github.com"
  },

  {
    id: 26,
    name: "Yoga Saputra",
    role: "Backend Engineer",
    experience: "4 Years",
    skills: ["Go", "Microservices", "gRPC"],
    bio: "Backend engineer focused on distributed systems and efficient service communication.",
    contact: "https://github.com"
  },
  {
    id: 27,
    name: "Citra Dewi",
    role: "UI/UX Designer",
    experience: "4 Years",
    skills: ["Figma", "UX Research", "Wireframing"],
    bio: "UI/UX designer specializing in user research and designing conversion-focused interfaces.",
    contact: "https://github.com"
  },
  {
    id: 28,
    name: "Rangga Wijaya",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["React", "Tailwind", "Next.js"],
    bio: "Frontend developer passionate about performance optimization and modern UI development.",
    contact: "https://github.com"
  },
  {
    id: 29,
    name: "Vina Amelia",
    role: "Fullstack Engineer",
    experience: "6 Years",
    skills: ["Laravel", "React", "MySQL"],
    bio: "Fullstack engineer experienced in building scalable business applications and APIs.",
    contact: "https://github.com"
  },
  {
    id: 30,
    name: "Dimas Prakoso",
    role: "DevOps Engineer",
    experience: "5 Years",
    skills: ["AWS", "Docker", "Terraform"],
    bio: "DevOps engineer focused on infrastructure as code and cloud-native architecture.",
    contact: "https://github.com"
  },

  {
    id: 31,
    name: "Sinta Wulandari",
    role: "Frontend Developer",
    experience: "2 Years",
    skills: ["React", "CSS", "JavaScript"],
    bio: "Frontend developer building clean and responsive interfaces with modern UI practices.",
    contact: "https://github.com"
  },
  {
    id: 32,
    name: "Arif Rahman",
    role: "Backend Engineer",
    experience: "7 Years",
    skills: ["Node.js", "PostgreSQL", "Redis"],
    bio: "Backend engineer specializing in high-performance APIs and scalable backend systems.",
    contact: "https://github.com"
  },
  {
    id: 33,
    name: "Mega Sari",
    role: "UI/UX Designer",
    experience: "3 Years",
    skills: ["Figma", "Prototyping", "UX Design"],
    bio: "UI/UX designer passionate about creating seamless user experiences and visual clarity.",
    contact: "https://github.com"
  },
  {
    id: 34,
    name: "Rudi Hartono",
    role: "Fullstack Engineer",
    experience: "4 Years",
    skills: ["Node.js", "Vue", "MongoDB"],
    bio: "Fullstack developer building scalable applications with modern JavaScript stack.",
    contact: "https://github.com"
  },
  {
    id: 35,
    name: "Nanda Putra",
    role: "Mobile Developer",
    experience: "5 Years",
    skills: ["Flutter", "Firebase", "Dart"],
    bio: "Mobile developer focused on building high-performance cross-platform applications.",
    contact: "https://github.com"
  },

  {
    id: 36,
    name: "Lutfi Hakim",
    role: "Backend Engineer",
    experience: "5 Years",
    skills: ["Go", "PostgreSQL", "Docker"],
    bio: "Backend engineer specializing in scalable microservices and cloud infrastructure.",
    contact: "https://github.com"
  },
  {
    id: 37,
    name: "Shinta Maharani",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["React", "TypeScript", "Tailwind"],
    bio: "Frontend engineer building scalable UI systems with strong design consistency.",
    contact: "https://github.com"
  },
  {
    id: 38,
    name: "Wahyu Setiawan",
    role: "DevOps Engineer",
    experience: "6 Years",
    skills: ["AWS", "Kubernetes", "CI/CD"],
    bio: "DevOps engineer focused on scalable cloud infrastructure and automation pipelines.",
    contact: "https://github.com"
  },
  {
    id: 39,
    name: "Dinda Ayu",
    role: "UI/UX Designer",
    experience: "2 Years",
    skills: ["Figma", "UX Writing", "Wireframing"],
    bio: "UI/UX designer focused on clarity, usability, and user-centered design principles.",
    contact: "https://github.com"
  },
  {
    id: 40,
    name: "Bayu Saputra",
    role: "Fullstack Engineer",
    experience: "5 Years",
    skills: ["React", "Node.js", "PostgreSQL"],
    bio: "Fullstack engineer experienced in building scalable SaaS and enterprise systems.",
    contact: "https://github.com"
  },

  {
    id: 41,
    name: "Tia Permata",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["Vue", "JavaScript", "CSS"],
    bio: "Frontend developer focused on building responsive and modern web interfaces.",
    contact: "https://github.com"
  },
  {
    id: 42,
    name: "Iqbal Maulana",
    role: "Backend Engineer",
    experience: "6 Years",
    skills: ["Node.js", "Microservices", "Kafka"],
    bio: "Backend engineer specializing in distributed systems and scalable architecture.",
    contact: "https://github.com"
  },
  {
    id: 43,
    name: "Nina Kurnia",
    role: "UI/UX Designer",
    experience: "4 Years",
    skills: ["Figma", "Design Systems", "UX Research"],
    bio: "UI/UX designer focused on building consistent and user-friendly product experiences.",
    contact: "https://github.com"
  },
  {
    id: 44,
    name: "Ferry Pratama",
    role: "DevOps Engineer",
    experience: "5 Years",
    skills: ["Docker", "AWS", "Terraform"],
    bio: "DevOps engineer experienced in cloud infrastructure and automation systems.",
    contact: "https://github.com"
  },
  {
    id: 45,
    name: "Salsa Nabila",
    role: "Fullstack Engineer",
    experience: "3 Years",
    skills: ["Laravel", "Vue", "MySQL"],
    bio: "Fullstack developer building scalable and maintainable web applications.",
    contact: "https://github.com"
  },

  {
    id: 46,
    name: "Rifki Ananda",
    role: "Backend Engineer",
    experience: "4 Years",
    skills: ["Go", "PostgreSQL", "Redis"],
    bio: "Backend engineer focused on high-performance APIs and scalable backend systems.",
    contact: "https://github.com"
  },
  {
    id: 47,
    name: "Vivi Lestari",
    role: "Frontend Developer",
    experience: "2 Years",
    skills: ["React", "Tailwind", "JavaScript"],
    bio: "Frontend developer passionate about building clean and responsive UI.",
    contact: "https://github.com"
  },
  {
    id: 48,
    name: "Agung Prasetyo",
    role: "Mobile Developer",
    experience: "5 Years",
    skills: ["Kotlin", "Android", "Firebase"],
    bio: "Mobile developer building robust Android applications with modern architecture.",
    contact: "https://github.com"
  },
  {
    id: 49,
    name: "Nadia Aulia",
    role: "UI/UX Designer",
    experience: "3 Years",
    skills: ["Figma", "UX Research", "Prototyping"],
    bio: "UI/UX designer focused on improving usability and crafting intuitive interfaces.",
    contact: "https://github.com"
  },
  {
    id: 50,
    name: "Zaki Ramadhan",
    role: "Fullstack Engineer",
    experience: "6 Years",
    skills: ["MERN Stack"],
    bio: "Fullstack engineer experienced in building scalable and modern web applications.",
    contact: "https://github.com"
  },

  {
    id: 51,
    name: "Lia Salsabila",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["Vue", "Nuxt", "CSS"],
    bio: "Frontend developer focused on SSR applications and UI performance optimization.",
    contact: "https://github.com"
  },
  {
    id: 52,
    name: "Hafiz Pratama",
    role: "Backend Engineer",
    experience: "5 Years",
    skills: ["Node.js", "Express", "MongoDB"],
    bio: "Backend engineer specializing in REST APIs and scalable backend systems.",
    contact: "https://github.com"
  },
  {
    id: 53,
    name: "Mira Lestari",
    role: "UI/UX Designer",
    experience: "4 Years",
    skills: ["Figma", "UX Writing", "Design Systems"],
    bio: "UI/UX designer focused on building intuitive and visually consistent interfaces.",
    contact: "https://github.com"
  },
  {
    id: 54,
    name: "Yoga Prakoso",
    role: "DevOps Engineer",
    experience: "6 Years",
    skills: ["AWS", "Docker", "Kubernetes"],
    bio: "DevOps engineer experienced in cloud scaling and infrastructure automation.",
    contact: "https://github.com"
  },
  {
    id: 55,
    name: "Dewangga Putra",
    role: "Fullstack Engineer",
    experience: "4 Years",
    skills: ["React", "Node.js", "PostgreSQL"],
    bio: "Fullstack engineer building scalable web applications with modern architecture.",
    contact: "https://github.com"
  },

  {
    id: 56,
    name: "Intan Lestari",
    role: "Frontend Developer",
    experience: "2 Years",
    skills: ["React", "Tailwind", "JavaScript"],
    bio: "Frontend developer focused on responsive and modern UI development.",
    contact: "https://github.com"
  },
  {
    id: 57,
    name: "Fahmi Ridwan",
    role: "Backend Engineer",
    experience: "7 Years",
    skills: ["Go", "Microservices", "gRPC"],
    bio: "Backend engineer specializing in distributed systems and scalable architectures.",
    contact: "https://github.com"
  },
  {
    id: 58,
    name: "Cindy Amelia",
    role: "UI/UX Designer",
    experience: "3 Years",
    skills: ["Figma", "Prototyping", "UX Research"],
    bio: "UI/UX designer passionate about user-centered and data-driven design.",
    contact: "https://github.com"
  },
  {
    id: 59,
    name: "Rehan Saputra",
    role: "Fullstack Engineer",
    experience: "5 Years",
    skills: ["Laravel", "React", "MySQL"],
    bio: "Fullstack engineer building scalable SaaS and enterprise applications.",
    contact: "https://github.com"
  },
  {
    id: 60,
    name: "Saskia Putri",
    role: "Mobile Developer",
    experience: "3 Years",
    skills: ["Flutter", "Dart", "Firebase"],
    bio: "Mobile developer focused on cross-platform applications with smooth UX.",
    contact: "https://github.com"
  },

  {
    id: 61,
    name: "Ardiansyah",
    role: "Backend Engineer",
    experience: "4 Years",
    skills: ["Node.js", "PostgreSQL", "Redis"],
    bio: "Backend engineer focused on high-performance APIs and system reliability.",
    contact: "https://github.com"
  },
  {
    id: 62,
    name: "Melinda Sari",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["Vue", "JavaScript", "Tailwind"],
    bio: "Frontend developer building modern and responsive web applications.",
    contact: "https://github.com"
  },
  {
    id: 63,
    name: "Rio Pratama",
    role: "DevOps Engineer",
    experience: "5 Years",
    skills: ["AWS", "CI/CD", "Docker"],
    bio: "DevOps engineer focused on automation and cloud infrastructure scaling.",
    contact: "https://github.com"
  },
  {
    id: 64,
    name: "Alya Rahma",
    role: "UI/UX Designer",
    experience: "2 Years",
    skills: ["Figma", "Wireframing", "UX Design"],
    bio: "UI/UX designer focused on simplicity, usability, and user experience improvement.",
    contact: "https://github.com"
  },
  {
    id: 65,
    name: "Rizal Maulana",
    role: "Fullstack Engineer",
    experience: "6 Years",
    skills: ["MERN Stack"],
    bio: "Fullstack engineer experienced in building scalable and maintainable web systems.",
    contact: "https://github.com"
  },

  {
    id: 66,
    name: "Nabila Salsabila",
    role: "Frontend Developer",
    experience: "3 Years",
    skills: ["React", "Next.js", "CSS"],
    bio: "Frontend developer focused on SEO-friendly and high-performance web applications.",
    contact: "https://github.com"
  },
  {
    id: 67,
    name: "Taufik Hidayat",
    role: "Backend Engineer",
    experience: "7 Years",
    skills: ["Java", "Spring Boot", "Kafka"],
    bio: "Backend engineer specializing in enterprise systems and event-driven architecture.",
    contact: "https://github.com"
  },
  {
    id: 68,
    name: "Putra Saputra",
    role: "Mobile Developer",
    experience: "4 Years",
    skills: ["Kotlin", "Android", "Firebase"],
    bio: "Mobile developer building scalable Android applications with clean architecture.",
    contact: "https://github.com"
  },
  {
    id: 69,
    name: "Sinta Maharani",
    role: "UI/UX Designer",
    experience: "4 Years",
    skills: ["Figma", "UX Research", "Design Systems"],
    bio: "UI/UX designer focused on building consistent and intuitive digital experiences.",
    contact: "https://github.com"
  },
  {
    id: 70,
    name: "Gilang Prakoso",
    role: "Fullstack Engineer",
    experience: "5 Years",
    skills: ["Node.js", "React", "PostgreSQL"],
    bio: "Fullstack engineer experienced in building scalable applications from backend to frontend.",
    contact: "https://github.com"
  }
];