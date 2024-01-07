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
            question: 'Что такое VDS и VPS?',
            answer:
                `VDS — Виртуальный выделенный сервер — услуга предоставления в аренду так называемого виртуального выделенного сервера. В плане управления операционной системой по большей части она соответствует физическому выделенному серверу, разделен с другими пользователями.
                 VPS - Виртуальный сервер отличается от выделенного сервера тем, что в этом случае вы не являетесь одним владельцем сервера. На выделенном сервере создается программная среда, которая позволяет, с помощью технологии виртуализации KVM запустить несколько изолированных серверов.
                 Выделенный сервер - Это физический сервер, который стоит в Дата-центре и предназначен только для вас. В отличии от облачных технологий, Dedicated Server не может быть разделен с другими пользователями.`,
        },
        {
            question: 'Для чего нужны виртуальные серверы?',
            answer:
                'Виртуальный сервер нужен, когда виртуального хостинга недостаточно, а брать в аренду выделенный сервер или разворачивать свой собственный невыгодно или просто нет необходимости. В основном услугой пользуются для повседневнх задач',
        },
        {
            question: 'Что такое выделенный сервер?',
            answer:
                `Выделенный сервер – это физический сервер, назначенный для одной организации. Вам нужен сервер для хостинга или запуска приложений и веб-сайтов, чтобы пользователи могли получать доступ к вашим услугам. Хостинг-провайдер управляет физическими серверными ресурсами, обслуживает их и распределяет между разными клиентами. 
                 В зависимости от выбранного типа хостингового решения вам, возможно, придется делить базовые физические серверные ресурсы с другими организациями. Однако при выделенном хостинге вы получаете полный контроль над тем, как ваша организация использует ресурсы физического сервера. Вы получаете изолированную физическую серверную среду с возможностью настройки и управления по мере необходимости. Выделенный сервер полезен для критически важных приложений, которые требуют высокой доступности или используются для вычислительноемких рабочих нагрузок, когда для их функционирования нужны значительные серверные ресурсы.`,
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
            answer: `Да. В нашей панели управления вы можете создавать бэкапы вручную или настроить их создание по расписанию: раз в неделю, раз месяц. Стоимость услуги зависит от размера бэкапа — 6 ₽ за 1 Гб. Бэкап хранится неделю, либо можно согласовать более долгий срок, с нашими техническими специалистами.
        Кроме того, вы можете создавать снапшоты, которые позволят быстро откатить систему до прежнего состояния. В зависимости от тарифного плана, услуга снапшот либо предоставляется, либо нет.`,
        },
        {
            question: 'Какие проекты нельзя размещать на арендованных серверах?',
            answer: `Нельзя размещать проекты, связанные с мошенничеством, рассылкой спама, распространением вирусов, нарушением авторских прав, рекламой запрещенных товаров и другим контентом, который нарушает действующее законодательство Российской Федерации.

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
