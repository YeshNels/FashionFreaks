import {
  Flex,
  SimpleGrid,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import React, { useState } from "react";
const innerBoxStyles = {
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxSize: "full",
  color: "black",
  bottom: "0",
  opacity: "0.8",
  roundedTop: "lg",
  bgGradient: "radial(gray.100,gray.300,gray.400)",
  padding: "10px",
  textShadow: "1px 2px 1px  white",
};

const data = {
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Classic Sunglasses",
  price: 142,
};

const data2 = {
  imageURL:
    "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/atlasround-sunglasses-69861806_1025251_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
  name: "Round Sunglasses",
  price: 170,
};

const data3 = {
  imageURL:
    "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardwearsunglasses-72301366_1047240_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
  name: "Police Sunglasses",
  price: 200,
};

const data4 = {
  imageURL:
    "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardwearsunglasses-72301412_1047242_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
  name: "Casual Sunglasses",
  price: 260,
};

function ProductAddToCart() {
  const [isShown, setIsShown] = useState(false);

  return (
    <Flex p={10} w="full" alignItems="center" justifyContent="space-between">
      <SimpleGrid columns={{ base: 1, lg: 4, md: 3 }} spacing={5}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          margin={5}
          padding={2}
        >
          <Box position="relative">
            <Image
              src={data.imageURL}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
              borderWidth="1px"
              borderColor="#f9f9f9"
            />
            {isShown && (
              <Box sx={innerBoxStyles} backdropFilter="invert(100%)">
                New Details Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore
              </Box>
            )}
          </Box>
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="l"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                cursor={"pointer"}
                isTruncated
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                {data.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="l" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {data.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* New Card */}
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          margin={5}
          padding={2}
        >
          <Box position="relative">
            <Image
              src={data2.imageURL}
              alt={`Picture of ${data2.name}`}
              roundedTop="lg"
              borderWidth="1px"
              borderColor="#f9f9f9"
            />
          </Box>
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="l"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                cursor={"pointer"}
                isTruncated
              >
                {data2.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="l" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {data2.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Third Card */}
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          margin={5}
          padding={2}
        >
          <Box position="relative">
            <Image
              src={data3.imageURL}
              alt={`Picture of ${data3.name}`}
              roundedTop="lg"
            />
          </Box>
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="l"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                cursor={"pointer"}
                isTruncated
              >
                {data3.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="l" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {data3.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Fourth Card */}
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          margin={5}
          padding={2}
        >
          <Box position="relative">
            <Image
              src={data4.imageURL}
              alt={`Picture of ${data4.name}`}
              roundedTop="lg"
            />
          </Box>
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="l"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                cursor={"pointer"}
                isTruncated
              >
                {data4.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="l" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {data4.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default ProductAddToCart;
