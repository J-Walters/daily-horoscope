import { useState, useEffect } from 'react';

const DownloadButton = ({ horoscope, params }) => {
  const [downloadLink, setDownloadLink] = useState('');

  const makeTextFile = () => {
    const data = new Blob([horoscope.description], { type: 'text/plain' });
    if (downloadLink !== '') window.URL.createObjectURL(data);

    setDownloadLink(window.URL.createObjectURL(data));
  };

  useEffect(() => {
    makeTextFile();
  }, [horoscope]);

  return (
    <a
      download={`${params.sign}-${horoscope.current_date}.txt`}
      href={downloadLink}
    >
      download today's reading
    </a>
  );
};

export default DownloadButton;
