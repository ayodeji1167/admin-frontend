import React, { useState, useEffect, useRef } from 'react';
import { Flex, chakra, Text, Button } from '@chakra-ui/react';
import LottieLoader from '@/components/Loader/LottieLoader';
interface PDFViewerProps {
  pdfUrl?: string;
  fileName?: string;
  header: string;
  buffer: any;
  isLoading: boolean;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  pdfUrl,
  header,
  buffer,
  isLoading,
  fileName,
}) => {
  const [loading, setLoading] = useState(true);
  const downloadRef = useRef<any>(null);
  const actualBuffer = Buffer.from(buffer, 'base64');

  // Create a Blob object from the buffer
  // const blob = new Blob([buffer], { type: 'application/pdf' });
  const pdfBlob = new Blob([new Uint8Array(actualBuffer).buffer], {
    type: 'application/pdf',
  });
  const pdfUrlBuf = window.URL.createObjectURL(pdfBlob);

  const handleDownload = () => {
    // Step 1: Convert Buffer to Blob

    // Step 2: Create URL for Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Step 3: Create a link element
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;

    // Step 4: Set the download attribute to the desired filename
    downloadLink.download = fileName || `INVOICE`;

    // Step 5: Append the link to the document body
    document.body.appendChild(downloadLink);

    // Step 6: Programmatically click the link to trigger the download
    downloadLink.click();

    // Step 7: Clean up: remove the link after the download is initiated
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  if (loading || isLoading) {
    return (
      <div>
        <LottieLoader />
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Flex alignItems={'center'} gap={'1rem'}>
        <Text textStyle={'subHeading'}>{header}</Text>
        <Button onClick={handleDownload} ref={downloadRef} variant={'outline'}>
          Download pdf
        </Button>
      </Flex>
      <chakra.iframe
        src={pdfUrlBuf}
        my={'1rem'}
        w={'100%'}
        h={{ base: '50rem', md: '70rem' }}
      ></chakra.iframe>
    </div>
  );
};

export default PDFViewer;
