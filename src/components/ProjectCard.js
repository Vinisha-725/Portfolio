import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { ProjectDetails } from './ProjectDetails';

export const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => setShowDetails(true);
  const handleCloseDetails = () => setShowDetails(false);

  return (
    <Col xs={12} className="mb-4">
      <div 
        className="project-card-horizontal" 
        onClick={handleShowDetails}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleShowDetails()}
      >
        <div className="project-card-image">
          <img src={project.imgUrl} alt={project.title} />
        </div>
        <div className="project-card-content">
          <h3>{project.title}</h3>
          <p className="project-card-description">{project.shortDescription || 'Click to view project details'}</p>
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="tech-stack">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="tech-tag more">+{project.technologies.length - 4} more</span>
              )}
            </div>
          )}
        </div>
      </div>

      <ProjectDetails 
        show={showDetails} 
        onHide={handleCloseDetails} 
        project={project} 
      />
    </Col>
  );
};
