export const teamMembers = [
  {
    "id": 1,
    "name": "Ahmad Joba",
    "role": "Computer Science Intern",
    "bio": "Works across the stack, from API design to interface polish.",
    "skills": ["React", "Node.js", "TypeScript", "Docker"],
    "github": "https://github.com/ahmadjoba96",
    "linkedin": "https://www.linkedin.com/in/ahmadjoba",
    "cv": "https://docs.google.com/document/d/1hD8tZ963FP_IEvgBgPQJSmTvl9jsJUtloBWQBvR4wyk/edit?usp=sharing"
  },
  {
    "id": 2,
    "name": "Jana Murrar",
    "role": "Computer Engineering Intern",
    "bio": "Focused on data modelling, REST services and making sure things are reliable.",
    "skills": ["Node.js", "Express", "MongoDB"],
    "github": "https://github.com/janamurrar",
    "linkedin": "https://www.linkedin.com/in/jana-murrar-/",
    "cv": "#"
  },
  {
    "id": 3,
    "name": "Dina Al-badarin",
    "role": "Computer Engineering Intern",
    "bio": "Builds accessible, responsive interfaces and cares about design systems.",
    "skills": ["React", "MUI", "CSS"],
    "github": "https://github.com/Dina1A",
    "linkedin": "https://www.linkedin.com/in/dina-albadarin-0a74392b5/",
    "cv": "#"
  },
  {
    "id": 4,
    "name": "Ameed Al-sharif",
    "role": "Computer Engineering Intern",
    "bio": "Interested in tooling, automation and testing.",
    "skills": ["Docker", "CI/CD", "Testing"],
    "github": "https://github.com/3meedwadah",
    "linkedin": "#",
    "cv": "#"
  }
];

export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    "id": 1,
    "name": "Internship Hub",
    "description": "A comprehensive web application designed for Palestine University to manage and organize the internship process between students, companies, and supervisors. It features role-based access control, complex workflows for internship requests, hours tracking, and end-to-end approval processes.",
    "techStack": [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary"
    ],
    "githubUrl": "https://github.com/AHL-Group2-project/training-opportunities-website"
  },
  {
    "id": 2,
    "name": "AHL Logics Team Portfolio",
    "description": "Our collaborative portfolio project at AHL Logics — built end to end by the four of us. Implements a full CI/CD pipeline and Dockerization.",
    "techStack": [
      "React",
      "TypeScript",
      "MUI",
      "Node.js",
      "Express",
      "Docker",
      "GitHub Actions"
    ],
    "githubUrl": "https://github.com/ahmadjoba96/AHL-Internship-Team-Group2-Portfolio"
  }
];

export const sessions = [
  { id: 1, name: "SESSION 1 - Introduction to the internship (orientation)", date: "June 16, 2026" },
  { id: 2, name: "SESSION 2 - Team work", date: "June 23, 2026" },
  { id: 3, name: "SESSION 3 - Idea Validation", date: "June 23, 2026" },
  { id: 4, name: "SESSION 4 - Communicating on Slack", date: "June 23, 2026" },
  { id: 5, name: "SESSION 4 - Time Management", date: "June 25, 2026" },
  { id: 6, name: "SESSION 5 - Agil", date: "June 28, 2026" },
  { id: 7, name: "SESSION 6 - Frontend 1", date: "June 29, 2026" },
  { id: 8, name: "SESSION 7 - Frontend 2", date: "June 30, 2026" },
  { id: 9, name: "SESSION 8 - Git and Github", date: "Jul 2, 2026" },
  { id: 10, name: "SESSION 9 - Backend", date: "Jul 5, 2026" },
  { id: 11, name: "SESSION 10 - Security 1", date: "Jul 7, 2026" },
  { id: 12, name: "SESSION 11 - Docker & Containerization", date: "Jul 9, 2026" },
  { id: 13, name: "SESSION 12 - QA Testing 1", date: "Jul 14, 2026" },
  { id: 14, name: "SESSION 13 - Clean Code & GH best practices", date: "Jul 21, 2026" },
  { id: 15, name: "SESSION 14 - Professional Work Environment", date: "Jul 22, 2026" },
  { id: 16, name: "SESSION 15 - APIs", date: "Jul 26, 2026" },
  { id: 17, name: "SESSION 16 - Security 2", date: "aug 2, 2026" },
  { id: 18, name: "SESSION 17 - QA Testing 2", date: "aug 4, 2026" },
  { id: 19, name: "SESSION 18 - CI/CD pipeline", date: "aug 16, 2026" },
  { id: 20, name: "SESSION 19 - session finish!! - evaluate and feedback to the internship", date: "aug 19, 2026" }
];
