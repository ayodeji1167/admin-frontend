import React, { useState, useEffect } from 'react';
import { chakra } from '@chakra-ui/react';
import LottieLoader from '@/components/Loader/LottieLoader';
interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  if (loading) {
    return (
      <div>
        <LottieLoader />
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <chakra.iframe
        src={pdfUrl}
        my={'1rem'}
        w={'100%'}
        h={'70rem'}
        frameBorder="0"
      ></chakra.iframe>
    </div>
  );
};

export default PDFViewer;
