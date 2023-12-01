'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';

export default function LoginMenu() {
    const { data: session } = useSession();
    if (session) {
        return (
            <Flex alignItems={'center'}>
                <Menu>
                    <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                        <HStack>
                            <Text fontSize="sm">{session?.user?.name}</Text>
                            <Avatar size={'sm'} src={session?.user?.image as any} />
                        </HStack>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={() => signOut()}>Выход</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        );
    }
    return (
        <>
            <Button fontSize={'md'} color={useColorModeValue('gray.800', 'white')} onClick={() => signIn()}>
                Войти
            </Button>
        </>
    );
}