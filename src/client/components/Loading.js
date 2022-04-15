import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Player
        autoplay
        loop={true}
        src='https://assets5.lottiefiles.com/packages/lf20_bhndnjoa.json'
        style={{ height: '300px', width: '300px' }}
      ></Player>
    </div>
  );
};

export default Loading;
