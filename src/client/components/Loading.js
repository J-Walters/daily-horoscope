import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        height: '100vh',
      }}
    >
      <Player
        autoplay
        loop={true}
        src='https://assets5.lottiefiles.com/packages/lf20_bhndnjoa.json'
        style={{ height: '200px', width: '200px' }}
      ></Player>
    </div>
  );
};

export default Loading;
