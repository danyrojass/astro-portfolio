export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Daniel Rojas",
  jobDescription: "Full Stack Web Developer",
  about: `I'm Daniel Rojas, a software engineer based in Ypacaraí, Paraguay, with seven years of experience. 
  My journey has been a tech-fueled adventure, encompassing everything from Java-based backend work with tools like Spring and Hibernate, 
  to crafting engaging frontend experiences with AngularJS/Angular.  My career highlights encompass UI/UX design, robust testing, debugging, and database management. 
  I excel in solo and team projects and thrive on continuous learning, adding Node JS, Express JS, Mongo DB, Python, 
  Firebase, and React Native to my skills. 
  My insatiable curiosity drives my passion for innovation and creative problem-solving.
  `,

  experience: [
    {
      name: "Scanntech (Remote)",
      location: "Montevideo, Uruguay",
      startDate: "Nov 2021",
      endDate: "Present",
      description: [
        "- Design and development of web applications based on Java - Spring & Hibernate.",
        "- Development of user interfaces for a web system utilizing the Angular framework.",
        "- Documenting, testing, deployment, maintenance, support of platforms, applications, databases and solutions.",
        "- Code Improvements and Refactoring. ",
        "- Best Practices and Rules Maintainer.",
      ],
    },

    {
      name: "Konecta Software Factory",
      location: "Asunción, Paraguay",
      startDate: "Mar 2017",
      endDate: "Oct 2021",
      description: [
        "- Development of web systems utilizing technologies such as Java EE (MyBatis, Hibernate) and JavaScript (AngularJS, BackboneJS, Angular).",
        "- Developing code in accordance with appropriate design and architectural rules.",
        "- Migration and manipulation of Databases",
        "- Help and training of other colleagues.",
        "- Others tasks connected to the nature of the job.",
      ],
    },

    {
      name: "Internship CIA FPUNA",
      location: "San Lorenzo, Paraguay",
      startDate: "Jun 2016",
      endDate: "Dec 2016",
      description: [
        "- I started as an intern for approximately two months and was subsequently hired as a Jr. Java Developer.",
        "- Developing a web system using JSF PrimeFaces. Testing using Junit and Mockito.",
        "- Validation of requirements and modeling with the user."
      ],
    },
  ],

  education: [
    {
      name: "Facultad Politécnica - Universidad Nacional de Asunción",
      location: "San Lorenzo, Paraguay",
      startDate: "2020",
      endDate: "Present",
      description: [
        "Master in ICT with emphasis in Software Engineering",
      ],
    },
    {
      name: "Facultad Politécnica - Universidad Nacional de Asunción",
      location: "San Lorenzo, Paraguay",
      startDate: "2012",
      endDate: "2019",
      description: ["Computer Engineering"],
    },
  ],

  socialMedia: {
    twitter: "https://twitter.com/danyrs_",
    github: "https://github.com/danyrojass",
    email: "danyrojassimon@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-rojas-a10757135/",
  },

  projects: [
    {
      title: "CRUD y Estadísticas de Productos",
      isFeatured: true,
      thumbnail: "/assets/images/crud-productos-estadisticas.png",
      githubUrl: "https://github.com/danyrojass/crud-productos-estadisticas",
      liveUrl: "https://crud-productos-wu6s.onrender.com/productos-estadisticas/swagger-ui/index.html",
    },
    {
      title: "Daniel Rojas's Resume",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://github.com/danyrojass/astro-portfolio",
      liveUrl: "https://portfolio-rojas-daniel.vercel.app/",
    },
    {
      title: "Apuesta al Clic",
      isFeatured: true,
      thumbnail: "/assets/images/apuesta-al-clic.png",
      githubUrl: "https://github.com/danyrojass/tormenta-codigo-apuesta-al-clic",
      liveUrl: "https://apuesta-al-clic.vercel.app/",
    }, {
      title: "Agregar Numeración a PDF",
      isFeatured: true,
      thumbnail: "/assets/images/agregar-numeracion.png",
      githubUrl: "https://github.com/danyrojass/add-numeric-pagination",
      liveUrl: "https://add-numeric-pagination.vercel.app/",
    },
  ],

  blog: [
    {
      title: "Paginación eficiente en Spring Boot",
      publishedAt: 2023-10-10,
      description: "Explorando la interfaz Pageable y Alternativas",
      slug: "paginacion-eficiente-spring-boot",
      isPublish: true
    }
  ]
};
