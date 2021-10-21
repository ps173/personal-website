import { Rnd } from 'react-rnd';

const Posts = () => {
  return (
    <Rnd
      minWidth="500px"
      className="PostsContainer"
      default={{ x: 350, y: 400, height: '50%', width: '500px' }}
    >
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Posts</div>
        </div>
        <div className="window-body">
          <pre className="terminal-text">
            Microsoft Corp 1990-2001.
            <br />
            C:&#92;WINDOWS&#92;SYSTEM32{'>'}dir{' '}
            <i style={{ color: '#90D638' }}>blogs</i>
            <br />
            <br />
            Volume in drive C has no label.
            <br />
            Volume Serial Number is B86A-EF32
            <br />
            <br />
            Directory of C:\WINDOWS\SYSTEM32\blogs
            <br />
            <a href="https://dev.to/ps173/trying-out-svelte-for-first-time-223f">
              7/10/21 - Trying Out Svelte
            </a>
            <br />
            <a href="https://dev.to/ps173/discovering-vim-netrw-me8">
              2/10/21 - Discovering Vim : Netrw
            </a>
            <br />
            <a href="https://dev.to/ps173/vimgore-an-interactive-game-to-learn-vim-10kn">
              15/5/21 - Vimgore
            </a>
            <br />
            <br />
            C:&#92;WINDOWS&#92;SYSTEM32{'>'}
          </pre>
        </div>
      </div>
    </Rnd>
  );
};

export default Posts;
