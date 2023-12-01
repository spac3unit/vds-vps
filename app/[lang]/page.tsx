import React, { useEffect, useRef, useState } from 'react';
import { Locale, i18n } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import {
  Box,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';

import HeroBanner from './components/HeroBanner';
import Calculator from './components/Calculator';
import WhyUs from './components/WhyUs';
import Footer, { LargeWithLogoLeft } from './components/Footer';
import Questions from './components/Questions'
import PricingCards from './components/PricingCards';
import Faq from './components/FAQ';


// how to scroll to element https://stackoverflow.com/a/70762300/8729782
export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  // const tariffRef = useRef<null | HTMLDivElement>(null);
  // const handleClick = () => {
  //   tariffRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  const { banner } = await getDictionary(lang)

  return (
    <>
      {/* <h1 className='text-3xl font-bold'>{page?.home?.title || 'test'}</h1> */}
      {/* <HeroBanner handleTariffClick={handleClick} /> */}
      <HeroBanner i18text={banner} />

      {/* <Box bg={useColorModeValue('gray.50', 'gray.800')} > */}
      <Box bg='#F7FAFC'>
        <Container maxW="80%" borderWidth={0} borderColor="black" centerContent>
          {/* <Pricing_v1 /> */}
          <PricingCards />
        </Container>
      </Box>

      <Container maxW="1024" p="24px" borderWidth={0} borderColor="black" centerContent>
        <Calculator />
      </Container>

      {/* <Box bg={useColorModeValue('gray.50', 'gray.800')} py="60px"> */}
      <Box bg='gray.50' py="60px">
        <Container maxW="80%">
          <WhyUs />
        </Container>
      </Box>
      <Box py="30px">
        <Container>
          <Faq />
        </Container>
      </Box>
      <Box bg="gray.900" color="gray.200" py="70px">
        <Container maxW="1224px">
          <Questions />
        </Container>
      </Box>

      {/* <Footer /> */}
      <LargeWithLogoLeft />
    </>
  )
}
