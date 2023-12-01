import { Box, Container, Heading, SimpleGrid, Text, Icon } from '@chakra-ui/react';

export default function WhyUs() {
    return (
        <>
            <Heading fontSize="40px" fontWeight="800" textAlign="center" mb="64px">
                Почему выбирают ChainOps
            </Heading>

            <SimpleGrid columns={3} spacing={10} textAlign="center">
                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        Оплата по потреблению
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        Фиксированных платежей нет, плата списывается раз в 10 минут только за использованные серверы.
                    </Text>
                </Box>
                <Box>

                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        DDos Protection
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        Защита от DDoS-атак на уровне L3/L4 в режиме реального времени. C нами ваш бизнес в безопасности
                    </Text>
                </Box>

                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        Техническая поддержка 24/7
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        Отвечаем на ваши обращения круглосуточно и без выходных, даже в праздники.
                    </Text>
                </Box>
                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        Отказоустойчивость
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        В случае выхода аппаратного хоста из строя серверы автоматически перезапускаются на другом хосте.
                    </Text>
                </Box>
                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        Бесплатный перенос данных
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        Если вы уже пользуетесь подобными услугами, мы бесплатно перенесем ваши данные на наши мощности, обеспечив
                        их целостность и конфиденциальность.
                    </Text>
                </Box>
                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        Дата-центры уровня Tier III
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        У ChainOps 2 собственных дата-центров в Казан и Амстердаме. Вы также можете развернуть сервер в наших
                        партнерских ДЦ.
                    </Text>
                </Box>
            </SimpleGrid>
        </>
    );
}