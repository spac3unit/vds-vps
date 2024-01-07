import { Box, Container, Heading, SimpleGrid, Text, Icon } from '@chakra-ui/react';

export default function WhyUs() {
    return (
        <>
            <Heading fontSize="40px" fontWeight="800" textAlign="center" mb="64px">
                       Почему выбирают VDS-VPS Хостинг?
            </Heading>

            <SimpleGrid columns={3} spacing={10} textAlign="center">
                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                       Полный доступ и контроль
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                       VDS-VPS дает пользователям полный контроль над операционной системой и настройками сервера, что позволяет настраивать окружение и ресурсы в соответствии с их потребностями. Полноценное управление сервером – полная свобода действий
                    </Text>
                </Box>

                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                       Гибкость и масштабируемость
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                       VDS-VPS предоставляет возможность масштабировать ресурсы сервера по мере необходимости. Вам не нужно оплачивать ресурсы, которые вам не нужны, и вы можете легко увеличивать мощность сервера по мере роста вашего проекта.
                    </Text>
                </Box>  

                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        DDos Protection
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        Защита от DDoS-атак на уровне L3/L4 в режиме реального времени. C нами Ваш бизнес в безопасности. 
                    </Text>
                </Box>

                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        Техническая поддержка 24/7
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        Круглосуточная техническая поддержка 24х7х365
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
                        Цена
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        VDS-VPS обычно предоставляет гибкую ценовую политику, позволяя оплачивать только те ресурсы, которые вам действительно необходимы.
                    </Text>
                </Box>
                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        Производительность
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        Так как выделенный сервер хостинга VDS-VPS обеспечивает изоляцию и гарантированные ресурсы, это может привести к более стабильной производительности по сравнению с общим хостингом.
                    </Text>
                </Box>
                <Box>
                    <Heading fontSize="24px" mb="24px" fontWeight="600">
                        Дата-центры уровня Tier III
                    </Heading>
                    <Text fontSize="16px" fontWeight="300">
                        У VDS-VPS есть преимущество по локациям Дата-Центрах России. На данный момент есть две локации в городе Казань и Москва. 
                    </Text>
                </Box>
            </SimpleGrid>
        </>
    );
}