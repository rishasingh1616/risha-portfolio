const projects = [
  {
    id: 'hr-analytics-dashboard',
    number: '01',
    title: 'HR Analytics Dashboard',
    category: 'People Analytics',

    shortDescription:
      'An interactive Power BI dashboard built to analyze employee attrition, workforce demographics, salary trends, and job satisfaction.',

    problem:
      'The HR team needed a simple way to identify employee attrition patterns and understand which workforce groups were most affected.',

    solution:
      'I created an interactive Power BI dashboard with KPI cards, filters, DAX measures, and demographic visualizations to make workforce trends easier to understand.',

    insights: [
      'Analyzed employee attrition across age groups and job roles',
      'Compared department-wise workforce distribution',
      'Tracked average income, age, and job satisfaction',
      'Identified employee groups with higher attrition levels',
    ],

    tools: ['Power BI', 'DAX', 'Power Query', 'Excel'],

image: '/projects/hr-dashboard-main.png',
    github:
      'https://github.com/rishasingh1616/HR-Analytics-Dashboard',
  },

  {
    id: 'ecommerce-sales-dashboard',
    number: '02',
    title: 'E-Commerce Sales Dashboard',
    category: 'Sales Analytics',

    shortDescription:
      'A sales analytics dashboard created to track revenue, profit, customer segments, product performance, and regional trends.',

    problem:
      'The business needed a clear overview of sales performance to identify profitable regions, strong product categories, and monthly business trends.',

    solution:
      'I used Power BI and SQL to transform sales data into an interactive dashboard with KPIs, monthly trends, product analysis, and regional comparisons.',

    insights: [
      'Tracked monthly sales and profit performance',
      'Identified top-performing categories and products',
      'Compared customer segment performance',
      'Analyzed regional sales and profitability',
    ],

    tools: ['Power BI', 'MySQL', 'SQL', 'Excel'],

    image: 'https://placehold.co/1200x700/0f172a/22d3ee?text=E-Commerce+Sales+Dashboard',

    github: 'https://github.com/rishasingh1616/Ecommerce-Sales-Analytics',
  },

  {
    id: 'flowpilot',
    number: '03',
    title: 'FlowPilot',
    category: 'Full-Stack Analytics',

    shortDescription:
      'A full-stack analytics platform with secure authentication, user management, REST APIs, and responsive dashboards.',

    problem:
      'Teams need one secure platform to view business metrics, manage users, and monitor activities through a responsive interface.',

    solution:
      'I developed a React dashboard connected to a Node.js and Express backend, secured with JWT authentication and integrated with MongoDB.',

    insights: [
      'Implemented secure JWT-based authentication',
      'Created API-powered user management',
      'Built responsive analytics dashboards',
      'Integrated MongoDB for persistent data storage',
    ],

    tools: ['React', 'Node.js', 'Express.js', 'MongoDB'],

    image: 'https://placehold.co/1200x700/0f172a/22d3ee?text=FlowPilot',

    github: 'https://github.com/rishasingh1616/Flowpilot',
  },
]

export default projects