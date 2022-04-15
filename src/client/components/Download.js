import { useState, useEffect } from 'react';
import { HiDownload } from 'react-icons/hi';

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
      style={{
        backgroundColor: '#593959',
        textDecoration: 'none',
        color: '#fff4e9',
        padding: 10,
        borderRadius: 5,
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
      }}
      download={`${params.sign}-${horoscope.current_date}.txt`}
      href={downloadLink}
    >
      download today's reading <HiDownload />
    </a>
  );
};

export default DownloadButton;
