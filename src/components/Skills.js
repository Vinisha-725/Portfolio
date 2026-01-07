import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

const skillNames = [
  'AWS',
  'Anaconda',
  'Bootstrap',
  'C',
  'CSS3',
  'Git',
  'HTML5',
  'Java',
  'JavaScript',
  'Keras',
  'Matplotlib',
  'MySQL',
  'NumPy',
  'PyTorch',
  'Python',
  'R',
  'React',
  'TensorFlow',
  'Visual Studio Code (VS Code)',
  'scikit-learn'
];

// Function to import an SVG
const importIcon = (name) => {
  try {
    return require(`../assets/img/skills/${name}.svg`);
  } catch (err) {
    console.error(`Error loading icon: ${name}`, err);
    return null;
  }
};

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are the technologies and tools I work with</p>
              <div className="skills-grid">
                {skillNames.map((skill, index) => {
                  const icon = importIcon(skill);
                  if (!icon) return null;
                  
                  return (
                    <div key={index} className="skill-item" title={skill}>
                      <img src={icon} alt={skill} />
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

export default Skills;