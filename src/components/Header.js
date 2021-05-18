import React from 'react';
import {useColorMode} from "@chakra-ui/color-mode";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { Image} from '@chakra-ui/image';
import { Button} from "@chakra-ui/button";
import {useMediaQuery} from '@chakra-ui/media-query';
import { FaGratipay } from 'react-icons/fa';

function Header() {
    const {colorMode} = useColorMode();
    const isDark = colorMode ==="dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
            w="300px" h="300px" alignSelf="flex-end"/>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                <Text fontSize="5xl" fontWeight = "semibold"> Hey, I am</Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Muskan Jaiswal</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}> FullStack Developer. Member at rECcursion . HTML, CSS, BootsTrap, JavaScript, SQL, NodeJs, MongoDB, ExpressJS</Text>
                <Button mt={8} colorScheme="blue" onClick={()=>
            window.open("https://auth.geeksforgeeks.org/user/m_jaiswal/practice/")}> Hire me</Button>
           
            </Box>
            <Image  alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
             mb={isNotSmallerScreen ? "0": "12"} borderRadius="full"
             backgroundColor = "transparent" boxShadow="lg"
             boxSize="300px" src='https://media-exp1.licdn.com/dms/image/C4D03AQGF0oS5sGNgPQ/profile-displayphoto-shrink_800_800/0/1598552546216?e=1626912000&v=beta&t=ievOU3LIhpgBSNxkoZnUMA6C0TKQjQrHIlhq83wVJUI'/>
            </Flex>
          
         
        </Stack>
    )
}

export default Header
