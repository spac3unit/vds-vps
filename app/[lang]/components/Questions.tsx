import { Box, Flex, Button, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export default function Questions() {
    return (
        <Flex justifyContent="space-between" alignItems="center">
            <Box>
                <Text fontSize="40px" fontWeight="700" color="gray.200">
                    Остались вопросы?
                </Text>
                <Text fontSize="18px" fontWeight="200" color="gray.300">
                    Задайте их нашему эксперту и получите квалифицированную помощь
                </Text>
            </Box>
            <Button>Задать вопрос</Button>
        </Flex>
    );
}