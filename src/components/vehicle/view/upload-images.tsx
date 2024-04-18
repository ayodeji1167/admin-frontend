'use client';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { LuImagePlus } from 'react-icons/lu';
import { LiaTimesSolid } from 'react-icons/lia';
import { useAddImages } from '@/app/api/vehicles/add-images';
import { useGetVehiclebyId } from '@/app/api/vehicles/get-vehicle-by-id';

export default function UploadImages({
  id,
  onClose,
}: {
  id: string;
  onClose: any;
}) {
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;

    if (images.length >= 4 || fileList.length + images.length > 4) {
      setErrorMessage('Max imgage count is 4');
      return;
    }
    const selectedImages: File[] = [];
    const selectedPreviewUrls: string[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage(`File ${file.name} exceeds 2MB limit.`);
        continue;
      }
      selectedImages.push(file);
      selectedPreviewUrls.push(URL.createObjectURL(file));
    }

    setImages([...images, ...selectedImages]);
    setPreviewUrls([...previewUrls, ...selectedPreviewUrls]);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);

    const newPreviewUrls = [...previewUrls];
    newPreviewUrls.splice(index, 1);

    setImages(newImages);
    setPreviewUrls(newPreviewUrls);
  };

  const { mutateAsync, isPending } = useAddImages();

  const { refetch } = useGetVehiclebyId(id);

  const handleSubmit = async () => {
    const form = new FormData();
    images.forEach((image) => form.append('file', image));
    await mutateAsync({ data: form, vehicleId: id });
    refetch();
    onClose && onClose();
  };
  return (
    <Box pb={'3rem'} bg={'white'} borderRadius={'1.2rem'}>
      <Text
        mb={'.8rem'}
        pl={'2.5rem'}
        textStyle={'subHeading'}
        fontWeight={500}
      >
        Upload Images
      </Text>
      <Divider />

      <Box px={'2.5rem'} mt={'1rem'}>
        <Text color={'#333638'} fontWeight={600} fontSize={'1.2rem'}>
          Vehicle Photos
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
            accept={'.jpg, .jpeg, .png'}
            hidden
            onChange={handleFileChange}
            multiple
          />
          <CiImageOn color="#165D7C" fontSize={'4rem'} fontWeight={100} />
          <Flex gap={'1rem'} mt={'.8rem'} alignItems={'center'}>
            <LuImagePlus />
            <Text color={'#165D7C'}>Upload cover image</Text>
          </Flex>
          <Text fontSize={'.9rem'} color={'#5D5E5F'}>
            Upload images of the vehicle, including exterior and interior shots,
            for easy identification and reference
          </Text>
        </Center>
        <SimpleGrid mt={'1rem'} gap={'1.6rem'} columns={4}>
          {previewUrls?.map((item, index) => (
            <GridItem
              rounded={'.6rem'}
              overflow={'hidden'}
              objectFit={'cover'}
              key={index}
              h={'12rem'}
              position={'relative'}
            >
              <Image
                h={'100%'}
                w={'100%'}
                objectFit={'cover'}
                src={item}
                alt={'vehicles' + index}
              />
              <Box
                cursor={'pointer'}
                onClick={() => removeImage(index)}
                position={'absolute'}
                zIndex={10}
                top={0}
                right={0}
              >
                <LiaTimesSolid fontWeight={700} fontSize={'1.2rem'} />
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>{' '}
      </Box>
      {errorMessage && (
        <Text fontSize={'.8rem'} color={'red'} mt={'1rem'}>
          {errorMessage}
        </Text>
      )}

      <Center my={'2rem'}>
        <Button
          isDisabled={!images.length}
          isLoading={isPending}
          minW={'8rem'}
          onClick={handleSubmit}
        >
          Proceed
        </Button>
      </Center>
    </Box>
  );
}
