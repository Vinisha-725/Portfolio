import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import crmImage from "../assets/img/projects/CRM.png";
import bankImage from "../assets/img/projects/Bank.jpeg";
import titanicImage from "../assets/img/projects/Titanic.jpg";
import resumeImage from "../assets/img/projects/Resume.jpg";
import bookImage from "../assets/img/projects/Book.jpg";
import infixImage from "../assets/img/projects/Infix.jpg";
import imperial from "../assets/img/projects/imperial.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "CRM Data Analytics",
      shortDescription:
        "Customer insights dashboard with data cleaning and visualization",
      imgUrl: crmImage,
      objective:
        "Built a CRM analytics system for customer insights with data cleaning, SQL querying, and dashboards in Excel, Power BI, and Tableau.",
      technologies: [
        "Excel",
        "MySQL",
        "Tableau",
        "Power BI",
        "Data Cleaning",
        "SQL",
      ],
      githubUrl: "https://github.com/Vinisha-Sahoo/CRM-Analytics",
    },
    {
      title: "Bank Data Analytics",
      shortDescription: "Banking transaction analysis and visualization",
      imgUrl: bankImage,
      objective:
        "Developed a banking data analysis workflow for transactions with preprocessing, SQL-based reports, and interactive dashboards.",
      technologies: ["Excel", "MySQL", "Tableau", "Power BI", "Data Analysis"],
      githubUrl: "https://github.com/Vinisha-Sahoo/Bank-Data-Analytics",
    },
    {
      title: "Titanic Survival Prediction",
      shortDescription:
        "Machine learning model to predict survival on the Titanic",
      imgUrl: titanicImage,
      objective:
        "Implemented Logistic Regression with EDA, feature engineering, and evaluation using cross-validation, confusion matrix, and ROC-AUC.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/Vinisha-Sahoo/StreamlitFiles",
    },
    {
      title: "Resume Classification",
      shortDescription: "NLP-based resume classification system",
      imgUrl: resumeImage,
      objective:
        "Created an NLP resume classifier using preprocessing, tokenization, TF-IDF, and models like Naive Bayes, SVM, and Random Forest.",
      technologies: [
        "Python",
        "Scikit-learn",
        "NLP",
        "TF-IDF",
        "Machine Learning",
      ],
      githubUrl: "https://github.com/Vinisha-Sahoo/Resume-Classification",
    },
    {
      title: "Book Recommendation System",
      shortDescription: "Collaborative filtering book recommender",
      imgUrl: bookImage,
      objective:
        "Developed a collaborative filtering–based book recommender using KNN and cosine similarity on user-item data. Implemented a Streamlit interface for real-time recommendations with visual similarity insights.",
      technologies: [
        "Python",
        "Scikit-learn",
        "KNN",
        "Streamlit",
        "Recommendation Systems",
      ],
      githubUrl: "https://github.com/Vinisha-Sahoo/Book-Recommendation-System",
    },
    {
      title: "Infix to Assembly Generator",
      shortDescription:
        "Compiler for converting infix expressions to assembly code",
      imgUrl: infixImage,
      objective:
        "Developed a compiler that converts mathematical infix expressions into assembly language instructions. The system parses and evaluates expressions, then generates optimized assembly code for a custom instruction set architecture.",
      technologies: [
        "C++",
        "Assembly",
        "Lexical Analysis",
        "Parsing",
        "Code Generation",
        "Computer Architecture",
      ],
      githubUrl: "https://github.com/Vinisha-Sahoo/COA-Infix-Prefix-Simulation",
    },
  {
    title: "Imperial Air - Flight Booking System",
    shortDescription: "Full-stack web application for flight reservations",
    imgUrl: imperial,
    objective: "Developed a comprehensive flight booking system with user authentication, real-time seat selection, and payment processing. The application enables users to search for flights, book tickets, and manage reservations through an intuitive interface.",
    technologies: [
      "Java", 
      "Spring Boot",
      "MySQL", 
      "HTML", 
      "CSS", 
      "Javascript",
      "JWT Authentication"
    ],
    githubUrl: "https://github.com/Vinisha-Sahoo/Imperialair-Fullstack"
  }
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of my recent projects. Click on any project to
                    learn more.
                  </p>
                  <div className="projects-container">
                    {projects.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

export default Projects;
