const employees = [
  {
    id: 1,
    firstname: "Ahmed",
    email: "a@a.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        color: "oklch(79.2% 0.209 151.711)",
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login page UI",
        taskDate: "2026-05-23",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        color: "oklch(85.2% 0.199 91.936)",
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar alignment issue",
        taskDate: "2026-05-20",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        color: "oklch(70.7% 0.165 254.624)",
        taskTitle: "Update Documentation",
        taskDescription: "Add API usage examples",
        taskDate: "2026-05-25",
        category: "Documentation",
      },
    ],
  },

  {
    id: 2,
    firstname: "Bilal",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        color: "oklch(79.2% 0.209 151.711)",
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin dashboard layout",
        taskDate: "2026-05-24",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        color: "oklch(85.2% 0.199 91.936)",
        taskTitle: "Optimize Images",
        taskDescription: "Compress website assets",
        taskDate: "2026-05-18",
        category: "Optimization",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        color: "oklch(70.4% 0.191 22.216)",
        taskTitle: "Deploy Staging Server",
        taskDescription: "Deploy latest build to staging",
        taskDate: "2026-05-19",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        color: "oklch(70.7% 0.165 254.624)",
        taskTitle: "Test Payment Gateway",
        taskDescription: "Verify Stripe integration",
        taskDate: "2026-05-27",
        category: "Testing",
      },
    ],
  },

  {
    id: 3,
    firstname: "Hassan",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        color: "oklch(79.2% 0.209 151.711)",
        taskTitle: "Write Blog Post",
        taskDescription: "Create article for homepage",
        taskDate: "2026-05-23",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        color: "oklch(85.2% 0.199 91.936)",
        taskTitle: "SEO Optimization",
        taskDescription: "Improve meta titles and descriptions",
        taskDate: "2026-05-17",
        category: "SEO",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        color: "oklch(70.7% 0.165 254.624)",
        taskTitle: "Email Campaign",
        taskDescription: "Prepare weekly newsletter",
        taskDate: "2026-05-29",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        color: "oklch(70.4% 0.191 22.216)",
        taskTitle: "Client Meeting",
        taskDescription: "Present project progress",
        taskDate: "2026-05-15",
        category: "Management",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        color: "oklch(79.2% 0.209 151.711)",
        taskTitle: "Research Competitors",
        taskDescription: "Analyze competitor websites",
        taskDate: "2026-05-30",
        category: "Research",
      },
    ],
  },

  {
    id: 4,
    firstname: "Usman",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        color: "oklch(79.2% 0.209 151.711)",
        taskTitle: "Setup Database",
        taskDescription: "Configure MongoDB collections",
        taskDate: "2026-05-22",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        color: "oklch(85.2% 0.199 91.936)",
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend APIs",
        taskDate: "2026-05-16",
        category: "API",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        color: "oklch(70.7% 0.165 254.624)",
        taskTitle: "Bug Testing",
        taskDescription: "Test task management module",
        taskDate: "2026-05-28",
        category: "QA",
      },
    ],
  },

  {
    id: 5,
    firstname: "Zain",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        color: "oklch(79.2% 0.209 151.711)",
        taskTitle: "Create Landing Page",
        taskDescription: "Develop modern landing page",
        taskDate: "2026-05-26",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        color: "oklch(85.2% 0.199 91.936)",
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve spacing issues on mobile",
        taskDate: "2026-05-18",
        category: "CSS",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        color: "oklch(70.4% 0.191 22.216)",
        taskTitle: "Setup Analytics",
        taskDescription: "Integrate Google Analytics",
        taskDate: "2026-05-14",
        category: "Analytics",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        color: "oklch(70.7% 0.165 254.624)",
        taskTitle: "Create Forms",
        taskDescription: "Develop contact and signup forms",
        taskDate: "2026-05-31",
        category: "Forms",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        color: "oklch(79.2% 0.209 151.711)",
        taskTitle: "Accessibility Check",
        taskDescription: "Improve accessibility compliance",
        taskDate: "2026-06-01",
        category: "Accessibility",
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setItems = () => {
  if (!employees) {
    localStorage.setItem("Employess", JSON.stringify(employees));
  } else {
    return;
  }
  localStorage.setItem("Admin", JSON.stringify(admin));
};

export const getItems = () => {
  const employeesData = JSON.parse(localStorage.getItem("Employess"));
  const adminData = JSON.parse(localStorage.getItem("Admin"));
  
  return { employeesData, adminData };
};
