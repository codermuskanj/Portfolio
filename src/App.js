import {Flex, Heading, VStack, Spacer} from "@chakra-ui/layout";  
import { IconButton } from "@chakra-ui/button";
import {useColorMode} from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
function App() {
  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode ==="dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
        ml="8" size="md" fontWeight="semibold" color="cyan.400">imthept</Heading>
        
      
      <Spacer></Spacer>
      <IconButton ml={8} icon={<FaLinkedin/>} isRound="true" onClick={toggleColorMode}></IconButton>
      <IconButton ml={8} icon={<FaInstagram/>} isRound="true" onClick={toggleColorMode}></IconButton>
      <IconButton ml={8} icon={<FaGithub/>} isRound="true" onClick={toggleColorMode}></IconButton>
      <IconButton ml={8} icon={isDark? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
