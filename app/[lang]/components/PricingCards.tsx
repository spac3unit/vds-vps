'use client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import servers from "./pricing-cards/servers.json"

import React, { useState } from 'react';
import { Box, Button, chakra, Flex, Icon, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Slider from "react-slick";
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'


export default function PricingCards() {
    const [frequency, setFrequency] = useState('month');

    const Feature = (props: any) => {
        return (
            <Flex align="center">
                <Flex shrink={0}>
                    <Icon
                        boxSize={5}
                        mt={1}
                        mr={2}
                        color="brand.500"
                        _dark={{ color: 'brand.300' }}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </Icon>
                </Flex>
                <Box ml={4}>
                    <chakra.span mt={2} color="gray.700" _dark={{ color: 'gray.400' }}>
                        {props.children}
                    </chakra.span>
                </Box>
            </Flex>
        );
    };
    return (
        // <Flex w="full" _dark={{ bg: '#3e3e3e' }} p={50} alignItems="center" justifyContent="center">
        <Flex w="full" pt="40px" alignItems="center" justifyContent="center">
            <Box px="10">
                <Box w="full" px={[10, , 4] as any} mx="auto" textAlign="center">
                    <Text mb={2} fontSize="5xl" fontWeight="bold" lineHeight="tight">
                        {/* Plans & Pricing */}
                        Тарифные планы
                    </Text>
                    <chakra.p mb={6} fontSize={['lg', , 'lg'] as any} color="gray.600" _dark={{ color: 'gray.400' }}>
                        {/* 5 minute installation · Try Team plan features for 14 days · No credit card required */}
                        Установка за 5 минут · Попробуйте тариф Базовый в течение 14 дней · Кредитная карта не требуется
                    </chakra.p>
                    <Flex justify="center" mx={['auto', 0]} mb={-2}>
                        <Stack
                            direction="row"
                            justify="space-between"
                            p="2"
                            textAlign="center"
                            rounded="md"
                            bg="gray.200"
                            _dark={{ bg: 'gray.600' }}
                        >
                            <Button
                                colorScheme=""
                                variant={frequency === 'month' ? 'outline' : 'ghost'}
                                onClick={() => setFrequency('month')}
                                px={8}
                            >
                                Месяц
                            </Button>
                            <Button
                                colorScheme=""
                                variant={frequency === '6month' ? 'outline' : 'ghost'}
                                onClick={() => setFrequency('6month')}
                                px={8}
                            >
                                6 Месяцев
                            </Button>
                            <Button
                                colorScheme=""
                                variant={frequency === 'year' ? 'outline' : 'ghost'}
                                onClick={() => setFrequency('year')}
                                px={8}
                            >
                                Год
                            </Button>
                        </Stack>
                    </Flex>
                </Box>

                <Box maxW="7xl" py="20" mx="auto">
                    <MultipleItems frequency={frequency} />
                </Box>
            </Box>
        </Flex>
    );
}

export function MultipleItems({ frequency }: any) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const freq = frequency === 'month'
        ? 'мес.'
        : frequency === '6month'
            ? '6 мес.'
            : 'год'

    const priceMultiplicator = frequency === 'month'
        ? 1
        : frequency === '6month'
            ? 6
            : 12
    return (
        <>
            {/* @ts-ignore */}
            <Slider {...settings} style={{
                display: "flex", alignItems: "center", justifyContent: "center"

            }}>

                {servers.map(server => (
                    < Box rounded={['none', 'lg']} shadow={['none', 'md']} bg="white" _dark={{ bg: 'gray.800' }}>
                        <Flex
                            direction="column"
                            justify="space-between"
                            p="6"
                            borderBottomWidth="1px"
                            color="gray.200"
                            _dark={{ color: 'gray.600' }}
                        >
                            <chakra.p mb={1} fontSize="lg" fontWeight="semibold" color="gray.700" _dark={{ color: 'gray.400' }}>
                                {server.name}
                            </chakra.p>
                            <Text
                                mb={2}
                                fontSize="4xl"
                                fontWeight={['bold', 'extrabold']}
                                color="gray.900"
                                _dark={{ color: 'gray.50' }}
                                lineHeight="tight"
                            >
                                {priceMultiplicator * parseInt(server.pricePerMonthRUB)}
                                <chakra.span fontSize="2xl" fontWeight="medium" color="gray.600" _dark={{ color: 'gray.400' }}>
                                    {' '}
                                    /{freq}
                                </chakra.span>
                            </Text>
                            <Link
                                w={['full', , 'auto'] as any}
                                display="inline-flex"
                                alignItems="center"
                                justifyContent="center"
                                px={5}
                                py={3}
                                border="solid transparent"
                                fontWeight="bold"
                                rounded="md"
                                shadow="sm"
                                _light={{ color: 'black' }}
                                bg="gray.100"
                                _dark={{ bg: 'gray.600' }}
                                _hover={{
                                    bg: 'gray.300',
                                    _dark: { bg: 'gray.700' },
                                }}
                            >
                                Заказать
                            </Link>
                        </Flex>
                        <Stack direction="column" p="6" spacing="3" flexGrow="1">
                            <Feature>{server.cpu}</Feature>
                            <Feature>{server.ram}</Feature>
                            <Feature>{`${server.storageSize} ${server.storageType}`}</Feature>
                            <Feature>{server.bandwidth}</Feature>
                            <Feature>{server.snapshots}</Feature>
                            <Feature>{server.ips}</Feature>
                            {server.backups && <Feature>{server.backups}</Feature>}

                        </Stack>
                    </Box >


                ))}
            </Slider >
        </ >
    )

}

const Feature = (props: any) => {
    return (
        <Flex align="center">
            <Flex shrink={0}>
                <Icon
                    boxSize={5}
                    mt={1}
                    mr={2}
                    color="brand.500"
                    _dark={{ color: 'brand.300' }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    ></path>
                </Icon>
            </Flex>
            <Box ml={4}>
                <chakra.span mt={2} color="gray.700" _dark={{ color: 'gray.400' }}>
                    {props.children}
                </chakra.span>
            </Box>
        </Flex>
    );
};

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <ArrowForwardIcon
            onClick={onClick}
            className={className}
            style={{ ...style, display: "block", color: "black", width: "30px", height: "30px" }}
        />
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <ArrowBackIcon
            onClick={onClick}
            className={className}
            style={{ ...style, display: "block", color: "black", width: "30px", height: "30px" }}
        />
    );
}




// <Box maxW="7xl" py="20" mx="auto">
//                     <SimpleGrid columns={[1, , , 3] as any} gap={[16, 8]} >
//                         <Box rounded={['none', 'lg']} shadow={['none', 'md']} bg="white" _dark={{ bg: 'gray.800' }}>
//                             <Flex
//                                 direction="column"
//                                 justify="space-between"
//                                 p="6"
//                                 borderBottomWidth="1px"
//                                 color="gray.200"
//                                 _dark={{ color: 'gray.600' }}
//                             >
//                                 <chakra.p mb={1} fontSize="lg" fontWeight="semibold" color="gray.700" _dark={{ color: 'gray.400' }}>
//                                     Стартовый
//                                 </chakra.p>
//                                 <Text
//                                     mb={2}
//                                     fontSize="5xl"
//                                     fontWeight={['bold', 'extrabold']}
//                                     color="gray.900"
//                                     _dark={{ color: 'gray.50' }}
//                                     lineHeight="tight"
//                                 >
//                                     ${frequency === 'month' ? 15 : 140}
//                                     <chakra.span fontSize="2xl" fontWeight="medium" color="gray.600" _dark={{ color: 'gray.400' }}>
//                                         {' '}
//                                         /{frequency === 'month' ? 'мес' : 'год'}
//                                     </chakra.span>
//                                 </Text>
//                                 <Link
//                                     w={['full', , 'auto'] as any}
//                                     display="inline-flex"
//                                     alignItems="center"
//                                     justifyContent="center"
//                                     px={5}
//                                     py={3}
//                                     border="solid transparent"
//                                     fontWeight="bold"
//                                     rounded="md"
//                                     shadow="sm"
//                                     _light={{ color: 'black' }}
//                                     bg="gray.100"
//                                     _dark={{ bg: 'gray.600' }}
//                                     _hover={{
//                                         bg: 'gray.300',
//                                         _dark: { bg: 'gray.700' },
//                                     }}
//                                 >
//                                     Заказать
//                                 </Link>
//                             </Flex>
//                             <Stack direction="column" p="6" spacing="3" flexGrow="1">
//                                 <Feature>1 vCPU</Feature>
//                                 <Feature>1 GB RAM</Feature>
//                                 <Feature>20 GB Disk space</Feature>
//                                 <Feature>500 GB Bandwidth</Feature>
//                             </Stack>
//                         </Box>

//                         <Box rounded={['none', 'lg']} shadow={['none', 'md']} bg="white" _dark={{ bg: 'gray.800' }}>
//                             <Flex
//                                 direction="column"
//                                 justify="space-between"
//                                 p="6"
//                                 borderBottomWidth="1px"
//                                 color="gray.200"
//                                 _dark={{ color: 'gray.600' }}
//                             >
//                                 <chakra.p mb={1} fontSize="lg" fontWeight="semibold" color="gray.700" _dark={{ color: 'gray.400' }}>
//                                     Базовый
//                                 </chakra.p>
//                                 <Text
//                                     mb={2}
//                                     fontSize="5xl"
//                                     fontWeight={['bold', 'extrabold']}
//                                     color="gray.900"
//                                     _dark={{ color: 'gray.50' }}
//                                     lineHeight="tight"
//                                 >
//                                     ${frequency === 'month' ? 25 : 200}
//                                     <chakra.span fontSize="2xl" fontWeight="medium" color="gray.600" _dark={{ color: 'gray.400' }}>
//                                         {' '}
//                                         /{frequency === 'month' ? 'мес' : 'год'}
//                                     </chakra.span>
//                                 </Text>
//                                 <Link
//                                     w={['full', , 'auto'] as any}
//                                     display="inline-flex"
//                                     alignItems="center"
//                                     justifyContent="center"
//                                     px={5}
//                                     py={3}
//                                     border="solid transparent"
//                                     fontWeight="bold"
//                                     rounded="md"
//                                     shadow="sm"
//                                     _light={{ color: 'black' }}
//                                     bg="gray.100"
//                                     _dark={{ bg: 'gray.600' }}
//                                     _hover={{
//                                         bg: 'gray.300',
//                                         _dark: { bg: 'gray.700' },
//                                     }}
//                                 >
//                                     Заказать
//                                 </Link>
//                             </Flex>
//                             <Stack direction="column" p="6" spacing="3" flexGrow="1">
//                                 <Feature>4 vCPU</Feature>
//                                 <Feature>4 GB RAM</Feature>
//                                 <Feature>80 GB Disk space</Feature>
//                                 <Feature>2 TB Bandwidth</Feature>
//                             </Stack>
//                         </Box>

//                         <Box rounded={['none', 'lg']} shadow={['none', 'md']} bg="white" _dark={{ bg: 'gray.800' }}>
//                             <Flex
//                                 direction="column"
//                                 justify="space-between"
//                                 p="6"
//                                 borderBottomWidth="1px"
//                                 color="gray.200"
//                                 _dark={{ color: 'gray.600' }}
//                             >
//                                 <chakra.p mb={1} fontSize="lg" fontWeight="semibold" color="gray.700" _dark={{ color: 'gray.400' }}>
//                                     Профессиональный
//                                 </chakra.p>
//                                 <Text
//                                     mb={2}
//                                     fontSize="5xl"
//                                     fontWeight={['bold', 'extrabold']}
//                                     color="gray.900"
//                                     _dark={{ color: 'gray.50' }}
//                                     lineHeight="tight"
//                                 >
//                                     ${frequency === 'month' ? 35 : 250}
//                                     <chakra.span fontSize="2xl" fontWeight="medium" color="gray.600" _dark={{ color: 'gray.400' }}>
//                                         {' '}
//                                         /{frequency === 'month' ? 'мес' : 'год'}
//                                     </chakra.span>
//                                 </Text>
//                                 <Link
//                                     w={['full', , 'auto'] as any}
//                                     display="inline-flex"
//                                     alignItems="center"
//                                     justifyContent="center"
//                                     px={5}
//                                     py={3}
//                                     border="solid transparent"
//                                     fontWeight="bold"
//                                     rounded="md"
//                                     shadow="sm"
//                                     _light={{ color: 'black' }}
//                                     bg="gray.100"
//                                     _dark={{ bg: 'gray.600' }}
//                                     _hover={{
//                                         bg: 'gray.300',
//                                         _dark: { bg: 'gray.700' },
//                                     }}
//                                 >
//                                     Заказать
//                                 </Link>
//                             </Flex>
//                             <Stack direction="column" p="6" spacing="3" flexGrow="1">
//                                 <Feature> 6 vCPU</Feature>
//                                 <Feature>8 GB RAM</Feature>
//                                 <Feature>180 GB Disk space</Feature>
//                                 <Feature>2 TB Bandwidth</Feature>
//                             </Stack>
//                         </Box>
//                     </SimpleGrid>
//                 </Box>