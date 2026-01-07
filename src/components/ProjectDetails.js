import { Modal } from "react-bootstrap";
import { X, Github } from 'react-bootstrap-icons';

export const ProjectDetails = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="project-modal"
    >
      <Modal.Header className="position-relative">
        <Modal.Title id="contained-modal-title-vcenter" className="w-75">
          {project.title}
        </Modal.Title>
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="position-absolute end-5 top-2 btn btn-outline-dark btn-sm d-flex align-items-center"
            style={{ right: '60px' }}
          >
            <Github className="me-1" /> Code
          </a>
        )}
        <button 
          type="button" 
          className="btn-close position-absolute end-0 me-3" 
          onClick={onHide} 
          aria-label="Close"
        >
          <X />
        </button>
      </Modal.Header>
      <Modal.Body className="p-4">
        <div className="project-modal-content">
          <div className="project-modal-image mb-4">
            <img 
              src={project.imgUrl} 
              alt={project.title} 
              className="img-fluid rounded"
              style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
            />
          </div>
          
          <div className="mb-4">
            <h5 className="fw-bold mb-2">Objective</h5>
            <p className="mb-0">{project.objective || 'No objective provided.'}</p>
          </div>
          
          <div>
            <h5 className="fw-bold mb-3">Technologies & Libraries</h5>
            <div className="d-flex flex-wrap gap-2">
              {project.technologies?.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="badge bg-primary bg-opacity-10 text-primary px-3 py-2"
                >
                  {tech}
                </span>
              )) || <p className="text-muted">No technologies listed.</p>}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectDetails;
