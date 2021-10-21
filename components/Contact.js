import { Rnd } from 'react-rnd';

const Contact = () => {
  return (
    <>
      <Rnd
        minWidth="500px"
        className="ContactContainer"
        default={{
          x: 420,
          y: 120,
          width: '80%',
        }}
      >
        <div
          className="window"
          style={{
            position: 'fixed',
            fontSize: '0.9rem',
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">Links</div>
          </div>
          <div
            className="window-body"
            style={{
              padding: '3%',
            }}
          >
            <div id="text24">
              I am on Internet
              <li>
                <a href="https://github.com/ps173">github</a>
              </li>
              <li>
                <a href="https://twitter.com/mehmehsloth"> twitter</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC39Mu5Lmn5DFlw6cnr-Hm2g">
                  youtube
                </a>
              </li>
              <li>
                <a href="mailto:prathamsharma173@gmail.com"> mail me</a>
              </li>
            </div>
          </div>
        </div>
      </Rnd>
    </>
  );
};

export default Contact;
