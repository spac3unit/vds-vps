'use client';
import { Stack, Flex, Heading, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import bg from '../../../public/hero_banner.jpeg'

export default function HeroBanner({ handleTariffClick, i18text }: any) {
    return (
        <Flex
            w={'full'}
            h={'580px'}
            // backgroundImage={'url(https://doimages.nyc3.cdn.digitaloceanspaces.com/solutions-hero-5.svg)'}
            // backgroundImage={'url(https://masterhost.ru/images/masterhost_v2/media/backgrounds/banner_MH_vps_main.jpg)'}
            backgroundImage={`url(${bg.src})`}
            backgroundSize={'cover'}
            // backgroundPosition={'center bottom'}
            backgroundRepeat={'no-repeat'}
            backgroundPosition={'center'}
        >
            <VStack w={'full'} justify={'center'} px={useBreakpointValue({ base: 4, md: 8 })}>
                <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                        color={'white'}
                    >
                        {i18text.titleLeft}
                        <Text as={'span'} color={'orange.400'}>
                            {' '}
                            {i18text.titleRight}
                        </Text>
                    </Heading>
                    <Text color={'white'} maxW={'3xl'} fontSize={useBreakpointValue({ base: '3xl', md: '2xl' })}>
                        {i18text.text}
                    </Text>
                    <Stack spacing={6} direction={'row'}>
                        <Button rounded={'full'} px={6} colorScheme={'orange'} bg={'orange.400'} _hover={{ bg: 'orange.500' }}>
                            Начать
                        </Button>
                        <Button rounded={'full'} px={6} onClick={handleTariffClick}>
                            Тарифы
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}
// ChainOps provides a wide range of VPS hosting options suited to every need.