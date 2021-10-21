import { Rnd } from 'react-rnd';

const Projects = () => {
  return (
    <Rnd
      minWidth="400px"
      className="ProjectsContainer"
      default={{ x: 40, y: 300, height: '50%', width: '40%' }}
    >
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Projects</div>
        </div>
        <div className="window-body">
          <pre className="projects-terminal terminal-text">
            <i style={{ color: '#90D638' }}>Projects</i>
            <br />
            -----------------------
            <ProjectDisplay
              projectName="Vimgore"
              codeLink="https://github.com/ps173/vimgore"
              liveLink="https://vimgore.netlify.app"
            />
            <ProjectDisplay
              projectName="mkd-editor"
              codeLink="https://github.com/ps173/mkd-editor"
              liveLink="https://ps173.github.io/mkd-editor"
            />
            <ProjectDisplay
              projectName="tnews-bot"
              codeLink="https://github.com/ps173/tnews-bot"
            />
            <br />
            <br />
            <br />
            <i style={{ color: '#90D638' }}>Other Stuff</i>
            <br />
            -----------------------
            <ProjectDisplay
              projectName="Asteroid Clone"
              codeLink="https://github.com/ps173/asteroids"
            />
            <ProjectDisplay
              projectName="DDOS-d"
              codeLink="https://github.com/ps173/DDOS-d"
            />
            <ProjectDisplay
              projectName="Dadara"
              codeLink="https://github.com/ps173/dadara"
            />
            <ProjectDisplay
              projectName="dotfiles"
              codeLink="https://github.com/ps173/dotfiles"
            />
          </pre>
        </div>
      </div>
    </Rnd>
  );
};

const ProjectDisplay = ({ projectName, codeLink, liveLink }) => {
  return (
    <li>
      <b>{projectName} - </b>
      <a href={codeLink}>
        <b>Code </b>
      </a>
      {liveLink ? (
        <a href={liveLink}>
          <b>| Live </b>
        </a>
      ) : (
        <></>
      )}
    </li>
  );
};

export default Projects;
