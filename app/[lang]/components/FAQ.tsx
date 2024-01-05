'use client';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Flex,
    useColorModeValue,
    Text,
    Container,
    Heading,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Faq() {
    const data = [
        {
            question: 'Что такое VDS и VPS? И какая между ними разница? Знали ли вы это?',
            answer:
                'VDS — Virtual Dedicated Server или виртуальные выделенные серверы. VPS — Virtual Private Server или виртуальные частные серверы. По сути это одно и то же. И в том, и в другом случае речь про виртуальные серверы, которые берут в аренду для размещения сайтов, приложений или хранения данных.',
        },
        {
            question: 'Для чего нужны виртуальные серверы?',
            answer:
                'Виртуальный сервер нужен, когда виртуального хостинга недостаточно, а брать в аренду выделенный сервер или разворачивать свой собственный невыгодно или просто нет необходимости.',
        },
        {
            question: 'Какие способы оплаты вы поддерживаете?',
            answer: `Вы можете оплачивать сервер по карте или со счета компании. Также мы поддерживаем другие популярные способы: ЮMoney, Киви и СберPay.
      Для иностранных клиентов есть два способа оплаты:
      Иностранная банковская карта — оплата через систему Stripe. Можно оплатить любой валютой, которая будет конвертирована сначала в евро, а затем в рубли.
      Иностранная банковская карта (KZT) — оплата через Cloud Payments. Подойдет прежде всего для клиентов из Казахстана. Но можно платить и другой валютой: она будет конвертирована в тенге, а потом в рубли.
      Комиссии за пополнение нет, но стоит учитывать курс обмена валют.`,
        },
        {
            question: 'Есть ли у вас резервное копирование?',
            answer: `Да. В нашей панели управления вы можете создавать бэкапы вручную или настроить их создание по расписанию: раз в неделю, раз месяц или раз в квартал. Стоимость услуги зависит от размера бэкапа — 6 ₽ за 1 Гб.
        Кроме того, вы можете создавать снапшоты, которые позволят быстро откатить систему до прежнего состояния. Услуга бесплатная.`,
        },
        {
            question: 'Какие проекты нельзя размещать на серверах?',
            answer: `Нельзя размещать проекты, связанные с мошенничеством, рассылкой спама, распространением вирусов, нарушением авторских прав, рекламой запрещенных товаров и другим контентом, который нарушает действующее российское законодательство.

      Полный список можно узнать на странице с правилами оказания услуг`,
        },
    ];
    return (
        <Flex align={'center'} justify={'center'} py="20px">
            <Box>
                {/* <Heading fontSize="42px" fontWeight="800" textAlign="center" mb="24px" py="12px">
          FAQ
        </Heading> */}
                <Accordion allowMultiple bg="white" rounded="lg" minW="xl">
                    {data.map((item) => (
                        <AccordionItem>
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={5}
                                _hover={{ bg: 'gray.100' }}
                            >
                                <Text fontSize="md" fontWeight="500" color="gray.800">
                                    {item.question}
                                </Text>
                                <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text color="gray.600" fontSize="sm" px="6" py="2">
                                    {item.answer}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </Flex>
    );
}
