import { Rnd } from 'react-rnd';

const About = () => {
  return (
    <>
      <Rnd
        minWidth="650px"
        className="AboutContainer"
        default={{ x: 50, y: 50, width: '80%' }}
      >
        <div
          className="window"
          style={{
            position: 'fixed',
            maxWidth: '50%',
            width: 'auto',
            fontSize: '0.8rem',
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">About Me</div>
          </div>
          <div
            className="window-body"
            style={{
              padding: '3%',
            }}
          >
            <h3>Hello, I am Pratham !!</h3>
            <h5>a fullstack webdeveloper</h5>
            <p id="text24">
              I am 18 and I really like to play with computers. You may find me
              making some game or maybe some cli or playing with some really old
              software from 90's. I really like reading books and interacting
              with people (sometimes).
            </p>
          </div>
        </div>
      </Rnd>
    </>
  );
};

export default About;
