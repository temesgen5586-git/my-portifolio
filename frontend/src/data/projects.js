// export const projects = [
//   {
//     title: 'E-commerce Dashboard',
//     category: 'Web',
//     description:
//       'A comprehensive dashboard for managing online stores, with real-time analytics and inventory tracking.',
//     tech: ['React', 'Tailwind', 'TypeScript'],
//     color: '#5EEAD4',
//     github: 'https://github.com/yourusername/ecommerce-dashboard',
//     live: 'https://ecommerce-dashboard.example.com',
//     featured: true,
//   },
//   {
//     title: 'Web Blogs',
//     category: 'Web',
//     description:
//       'A modern blogging platform with markdown support, comments, and SEO optimization.',
//     tech: ['Next.js', 'Prisma', 'PostgreSQL'],
//     color: '#A78BFA',
//     github: 'https://github.com/yourusername/web-blogs',
//     live: 'https://web-blogs.example.com',
//     featured: true,
//   },
//   {
//     title: '3D Dev eBooks',
//     category: 'Design',
//     description:
//       'An interactive 3D book reader for developer eBooks with smooth page transitions.',
//     tech: ['Three.js', 'React', 'GSAP'],
//     color: '#F5C542',
//     github: 'https://github.com/yourusername/3d-ebooks',
//     live: 'https://3d-ebooks.example.com',
//     featured: true,
//   },
//   {
//     title: 'Task Management App',
//     category: 'Web',
//     description:
//       'Kanban-style task manager with drag-and-drop, real-time sync, and team collaboration.',
//     tech: ['React', 'Node.js', 'MongoDB'],
//     color: '#5EEAD4',
//     github: 'https://github.com/yourusername/task-manager',
//     live: 'https://task-manager.example.com',
//   },
//   {
//     title: 'Fitness Tracker',
//     category: 'Mobile',
//     description:
//       'Cross-platform mobile app for tracking workouts, nutrition, and daily progress.',
//     tech: ['React Native', 'Firebase'],
//     color: '#F472B6',
//     github: 'https://github.com/yourusername/fitness-tracker',
//     live: null,
//   },
//   {
//     title: 'Portfolio Template',
//     category: 'Design',
//     description:
//       'A premium portfolio template for developers with dark/light modes and smooth animations.',
//     tech: ['React', 'Tailwind', 'Framer'],
//     color: '#F5C542',
//     github: 'https://github.com/yourusername/portfolio-template',
//     live: 'https://portfolio-template.example.com',
//   },
//   // {
//   //   title: 'Weather Dashboard',
//   //   category: 'Web',
//   //   description:
//   //     'Real-time weather dashboard with 7-day forecast, maps, and location search.',
//   //   tech: ['React', 'OpenWeather API'],
//   //   color: '#60A5FA',
//   //   github: 'https://github.com/yourusername/weather-dashboard',
//   //   live: 'https://weather.example.com',
//   // },
//   // {
//   //   title: 'Blog REST API',
//   //   category: 'Web',
//   //   description:
//   //     'Production-ready REST API with authentication, CRUD, rate limiting, and tests.',
//   //   tech: ['Node.js', 'Express', 'MySQL', 'JWT'],
//   //   color: '#10B981',
//   //   github: 'https://github.com/yourusername/blog-api',
//   //   live: null,
//   // },
//   // {
//   //   title: 'Student Management System',
//   //   category: 'Web',
//   //   description:
//   //     'Full-stack system for managing students, courses, grades, and attendance.',
//   //   tech: ['React', 'Node.js', 'MySQL'],
//   //   color: '#F59E0B',
//   //   github: 'https://github.com/yourusername/student-system',
//   //   live: null,
//   // },
// ];

// export const projectCategories = ['All', 'Web', 'Mobile', 'Design'];
export const projects = [
  {
    title: "ExamSystem – Online Examination Platform",
    tagline: "Learn · Practice · Succeed",
    category: "Web",
    description:
      "Secure online exams with instant results and progress tracking for students.",
    features: [
      "Student registration and secure login",
      "Multiple subjects and exam categories",
      "Instant scoring with result history",
      "Progress tracking and performance overview",
      "Fully responsive on phone, tablet and desktop",
    ],
    roadmap: [
      "Exam timer with auto-submit",
      "Question bank",
      "Anti-cheat tab detection",
      "PDF result certificates",
    ],
    tech: ["React", "Node.js", "Express", "REST API"],
    color: "#38BDF8",
    image: "examsystem.png",
    github: "https://github.com/temesgen5586-git/exam_system",
    live: null,
    featured: true,
  },
  {
    title: "Abie Garage System",
    tagline: "Your Vehicle, Our Priority",
    category: "Web",
    description:
      "Garage website for browsing services, booking repairs and managing customers.",
    features: [
      "Online service booking",
      "Service catalogue: general repair, oil change, tires, engine diagnostics",
      "Photo gallery and intro video",
      "Customer registration and login",
      "Contact page and 24/7 support information",
    ],
    roadmap: [
      "Booking calendar with SMS and email reminders",
      "Vehicle service history",
      "Admin dashboard and invoices",
    ],
    tech: ["React", "Node.js", "Express", "REST API"],
    color: "#3B82F6",
    image: "abiegarage.png",
    github: "https://github.com/temesgen5586-git/abiegarage",
    live: null,
    featured: true,
  },
  {
    title: "RestoDelight – Food Ordering App",
    tagline: "Good Food, Great Mood",
    category: "Web",
    description:
      "Food ordering app with menu search, cart, favourites and order tracking.",
    features: [
      "Category filters and live dish search",
      "Ratings, favourites and shopping cart",
      "Offers and deals, with a first-order discount",
      "Order tracking and saved address book",
      "Light and dark mode with notifications",
    ],
    roadmap: [
      "Online payment (Chapa / Stripe)",
      "Real-time order status with Socket.io",
      "Admin menu and order management",
    ],
    tech: ["React", "Node.js", "Express", "REST API"],
    color: "#10B981",
    image: "restorantsystem.jpg",
    github: "https://github.com/temesgen5586-git/Restaurant-Management-System",
    live: null,
    featured: true,
  },
  {
    title: " – Transport Management System",
    tagline: "Smarter Transport · Better Tomorrow",
    category: "Web",
    description:
      "Manage fleets, drivers and shipments with live tracking and reports.",
    features: [
      "Fleet management for vehicles and their status",
      "Shipment scheduling, assignment and tracking",
      "Driver profiles, routes and performance",
      "Live tracking of cargo and vehicles",
      "Reports and analytics dashboard",
    ],
    roadmap: [
      "Live GPS map with Socket.io",
      "Route optimization",
      "Invoices and PDF reports",
      "Role-based access (admin, dispatcher, driver)",
    ],
    tech: ["React", "Node.js", "Express", "REST API"],
    color: "#2563EB",
    image: "transportsystem.png",
    github: "https://github.com/temesgen5586-git/transport-management",
    live: null,
    featured: true,
  },
//   {
//     title: "Fitness Tracker",
//     category: "Mobile",
//     description:
//       "Cross-platform mobile app for tracking workouts, nutrition, and daily progress.",
//     features: [],
//     roadmap: [],
//     tech: ["React Native", "Firebase"],
//     color: "#F472B6",
//     github: "https://github.com/yourusername/fitness-tracker",
//     live: null,
//   },
//   {
//     title: "Portfolio Template",
//     category: "Design",
//     description:
//       "A premium portfolio template for developers with dark/light modes and smooth animations.",
//     features: [],
//     roadmap: [],
//     tech: ["React", "Tailwind", "Framer"],
//     color: "#F5C542",
//     github: "https://github.com/yourusername/portfolio-template",
//     live: "https://portfolio-template.example.com",
//   },
 ];

export const projectCategories = ["All", "Web", "Mobile", "Design"];