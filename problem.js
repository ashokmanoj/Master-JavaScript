//solve map and filter problem
employees = [
  {
    id: "E1001",
    personalDetails: {
      firstName: "Alex",
      lastName: "Johnson",
      age: 32,
      nationality: "Canadian",
      contact: {
        email: "alex.j@example.com",
        phone: "+1 234 567 8901",
      },
      experience: 10,
    },
    professionalDetails: {
      role: "Data Scientist",
      department: "Analytics",
      isFullTime: true,
      technologies: ["Python", "TensorFlow", "SQL", "Spark"],
      certifications: ["Meta Certified", "IBM Certified", "Azure Certified"],
    },
    workPreferences: {
      remoteWork: true,
      workHours: "Flexible",
      timezone: "EST",
    },
  },
  {
    id: "E1002",
    personalDetails: {
      firstName: "Sophia",
      lastName: "Martinez",
      age: 27,
      nationality: "Mexican",
      contact: {
        email: "sophia.m@example.com",
        phone: "+52 55 1234 5678",
      },
      experience: 5,
    },
    professionalDetails: {
      role: "UX Designer",
      department: "Product",
      isFullTime: false,
      technologies: ["Figma", "Adobe XD", "User Research"],
      certifications: ["NN/g UX Certification"],
    },
    workPreferences: {
      remoteWork: false,
      workHours: "9-5",
      timezone: "CST",
    },
  },
  {
    id: "E1003",
    personalDetails: {
      firstName: "Kwame",
      lastName: "Osei",
      age: 41,
      nationality: "Ghanaian",
      contact: {
        email: "kwame.o@example.com",
        phone: "+233 24 456 7890",
      },
      experience: 15,
    },
    professionalDetails: {
      role: "DevOps Engineer",
      department: "Infrastructure",
      isFullTime: true,
      technologies: ["Docker", "Kubernetes", "Azure", "CI/CD"],
      certifications: ["Certified Kubernetes Administrator"],
    },
    workPreferences: {
      remoteWork: true,
      workHours: "Flexible",
      timezone: "GMT",
    },
  },
  {
    id: "C1001",
    personalDetails: {
      firstName: "Shan",
      lastName: "Varun",
      age: 32,
      nationality: "Indian",
      contact: {
        email: "alex.j@example.com",
        phone: "+1 234 567 8901",
      },
      experience: 0,
    },
    professionalDetails: {
      role: "Data Scientist",
      department: "Infrastructure",
      isFullTime: true,
      technologies: ["Python", "TensorFlow", "SQL", "Spark", "Jest"],
      certifications: ["AWS Certified", "Google Data Analytics"],
    },
    workPreferences: {
      remoteWork: false,
      workHours: "Flexible",
      timezone: "EST",
    },
  },
];

const fulltimeemployees = employees
  .filter((employee) => employee.professionalDetails.isFullTime === true)
  .map(
    (employee) =>
      employee.personalDetails.firstName +
      " " +
      employee.personalDetails.lastName
  );
console.log("Full-time Employees:", fulltimeemployees);

const fullname = employees.map((emp)=>
  emp.personalDetails.firstName + " " + emp.personalDetails.lastName
);
console.log("All Employees:", fullname);