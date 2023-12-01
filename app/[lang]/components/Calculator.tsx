'use client';
import { useState } from 'react';
import {
    Box,
    Button,
    Stack,
    Center,
    Flex,
    Heading,
    Spacer,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';

export default function Calculator() {
    const [cpuValue, setCpuValue] = useState(4);
    const [ramValue, setRamValue] = useState(8);
    const [ssdValue, setSsdValue] = useState(200);
    const [totalCost, setTotalCost] = useState(0);

    const cpuValueSliderStep = 1;
    const ramValueSliderStep = 2;
    const ssdValueSliderStep = 10;

    const basePrice = 400; // base price 400Rub
    const pricePerCpuCore = 150; // + 20Rub for each additional cpu core
    const pricePerRAM = 10; // + 10Rub for 1 Gb Ram
    const pricePerSSD = 5; // +5Rub for 1 GB SSD

    const formControlStyles = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        mb: '20px',
        // height: '46px',
    } as any;

    return (
        <Stack direction="column" w="100%">
            {/* Заголовок */}
            <Heading fontSize="28px" mb="10px">
                Калькулятор тарифа VPS
            </Heading>

            <Box p="12" borderWidth="1px" borderColor="gray.300" borderRadius="sm" overflow="hidden">
                <Stack direction="row">
                    {/* Калькулятор */}
                    <Box>
                        <FormControl {...formControlStyles}>
                            {/* ОС */}
                            <FormLabel w="160px" mb="0">
                                ОС
                            </FormLabel>
                            <Select w="300px">
                                <option>CentOS 8.3</option>
                                <option>Ubuntu 20.04</option>
                                <option>FreeBSD 12.2</option>
                            </Select>
                        </FormControl>
                        {/* ЦОД */}
                        <FormControl {...formControlStyles}>
                            <FormLabel w="160px" mb="0">
                                Локация
                            </FormLabel>
                            <Select w="300px">
                                <option>Казань</option>
                                <option>Амстердам</option>
                            </Select>
                        </FormControl>
                        {/* ЦПУ */}
                        <FormControl {...formControlStyles}>
                            <FormLabel w="160px" mb="0">
                                CPU
                            </FormLabel>
                            <Box w="300px">
                                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" p="0">
                                    <Button
                                        size="sm"
                                        onClick={() => {
                                            setCpuValue(cpuValue - cpuValueSliderStep);
                                            setTotalCost(cpuValue);
                                        }}
                                    >
                                        -
                                    </Button>
                                    <span>{cpuValue} vCPU</span>
                                    <Button size="sm" onClick={() => setCpuValue(cpuValue + cpuValueSliderStep)}>
                                        +
                                    </Button>
                                </Flex>
                                <Slider
                                    aria-label="slider-ex-1"
                                    value={cpuValue}
                                    defaultValue={4}
                                    min={1}
                                    max={32}
                                    step={cpuValueSliderStep}
                                    onChange={(val) => setCpuValue(val)}
                                >
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </Box>
                        </FormControl>
                        {/* РАМ */}
                        <FormControl display="flex" alignItems="center" flexDirection="row" height="46px" mb="20px">
                            <FormLabel w="160px" mb="0">
                                RAM
                            </FormLabel>
                            <Box w="300px">
                                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" p="0">
                                    <Button size="sm" onClick={() => setRamValue(ramValue - ramValueSliderStep)}>
                                        -
                                    </Button>
                                    <span>{ramValue} ГБ</span>
                                    <Button size="sm" onClick={() => setRamValue(ramValue + ramValueSliderStep)}>
                                        +
                                    </Button>
                                </Flex>
                                <Slider
                                    aria-label="slider-ex-1"
                                    value={ramValue}
                                    defaultValue={8}
                                    min={2}
                                    max={64}
                                    step={ramValueSliderStep}
                                    onChange={(val) => setRamValue(val)}
                                >
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </Box>
                        </FormControl>
                        {/* ДИСК */}
                        <FormControl display="flex" alignItems="center" flexDirection="row" height="46px">
                            <FormLabel w="160px" mb="0">
                                SSD
                            </FormLabel>
                            <Box w="300px">
                                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" p="0">
                                    <Button size="sm" onClick={() => setSsdValue(ssdValue - ssdValueSliderStep)}>
                                        -
                                    </Button>
                                    <span>{ssdValue} ГБ</span>
                                    <Button size="sm" onClick={() => setSsdValue(ssdValue + ssdValueSliderStep)}>
                                        +
                                    </Button>
                                </Flex>
                                <Slider
                                    aria-label="slider-ex-1"
                                    value={ssdValue}
                                    defaultValue={200}
                                    min={20}
                                    max={1000}
                                    step={ssdValueSliderStep}
                                    onChange={(val) => setSsdValue(val)}
                                >
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </Box>
                        </FormControl>
                    </Box>
                    {/* Цена */}
                    <Flex flexDirection="column" ml="90px" lineHeight="1">
                        <Flex alignItems="baseline" gap="8px">
                            <Text fontSize="38px" fontWeight="800">
                                {(basePrice + cpuValue * pricePerCpuCore + ramValue * pricePerRAM + ssdValue * pricePerSSD).toFixed(2)}
                            </Text>
                            <Text fontSize="sm" fontWeight="300" color="gray.500">
                                ₽/мес
                            </Text>
                        </Flex>
                        <Text fontSize="14px" mt="20px">
                            {(
                                (basePrice + cpuValue * pricePerCpuCore + ramValue * pricePerRAM + ssdValue * pricePerSSD) /
                                60
                            ).toFixed(2)}{' '}
                            ₽ /час
                        </Text>
                        <Button variant="outline" mt="auto">
                            Заказать
                        </Button>
                    </Flex>
                </Stack>
            </Box>
        </Stack>
    );
}