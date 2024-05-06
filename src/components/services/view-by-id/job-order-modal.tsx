import { useAddJobOrderApi } from '@/app/api/service/add-job-order';
import { useGetServiceByIdApi } from '@/app/api/service/get-by-id';
import { formatFileSize } from '@/utils/format-file-size';
import {
  Divider,
  Box,
  Center,
  Flex,
  chakra,
  Button,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { CiImageOn } from 'react-icons/ci';

export default function JobOrderImageModal({
  id,
  onClose,
}: {
  id: string;
  onClose: any;
}) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { mutateAsync, isPending } = useAddJobOrderApi();
  const { refetch } = useGetServiceByIdApi(id);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    const form = new FormData();
    if (selectedFile) {
      form.append('file', selectedFile);
    }
    await mutateAsync({ form, serviceId: id });
    refetch();
    onClose && onClose();
  };
  return (
    <Box pb={'3rem'} bg={'white'} borderRadius={'1.2rem'}>
      <Text
        mb={'.8rem'}
        placeSelf={{ base: '0', md: '2.5rem' }}
        textStyle={'subHeading'}
        fontWeight={500}
      >
        Upload Images
      </Text>
      <Divider />

      <Box px={{ base: '0', md: '2.5rem' }} mt={'1rem'}>
        <Text color={'#333638'} fontWeight={600} fontSize={'1.2rem'}>
          Job Order
        </Text>
        <Center
          rounded={'1.2rem'}
          mt={'.5rem'}
          pt={'2rem'}
          pb={'1.6rem'}
          bg={'#E8EFF2'}
          flexDirection={'column'}
          onClick={() => fileInputRef?.current?.click()}
          cursor={'pointer'}
        >
          <input
            type="file"
            ref={fileInputRef}
            hidden
            onChange={handleFileChange}
            multiple
            accept=".pdf"
          />
          {!selectedFile && (
            <CiImageOn
              fontSize={isDesktop ? '4rem' : '2.5rem'}
              color="#165D7C"
              fontWeight={100}
            />
          )}
          <Flex gap={'1rem'} mt={'.8rem'} alignItems={'center'}>
            {selectedFile ? (
              <Text fontSize={{ base: '.7rem', md: '1rem' }} color={'#165D7C'}>
                {selectedFile.name}
                <chakra.span>({formatFileSize(selectedFile.size)})</chakra.span>
              </Text>
            ) : (
              <Text fontSize={{ base: '.8rem', md: '1rem' }} color={'#165D7C'}>
                Click To Upload PDF
              </Text>
            )}
          </Flex>
        </Center>
      </Box>

      <Center my={'2rem'}>
        <Button isLoading={isPending} minW={'8rem'} onClick={handleSubmit}>
          Proceed
        </Button>
      </Center>
    </Box>
  );
}
