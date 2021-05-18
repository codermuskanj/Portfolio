import React from 'react'
import { HStack} from '@chakra-ui/layout'
import {FaFacebook, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';

function Social() {
    return (
       <HStack spacing = "24">
           <Icon as={FaFacebook} boxSize="50" />
           <Icon as={FaGoogle} boxSize="50" />
           <Icon as={FaSpotify} boxSize="50" />
           <Icon as={FaShopify} boxSize="50" />
       </HStack>
    )
}

export default Social
