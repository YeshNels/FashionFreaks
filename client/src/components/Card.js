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

/*const data = {
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Sunglasses Classic",
  price: 4.5,
};*/

const data = {
  products: [
    {
      "name": "Ray-Ban Clubmaster Classic Sunglasses",
      "description": "Black frame with green lenses",
      "image": "/public/images/ray-ban-clubmaster.jpg",
      "price": 163,
      "quantity": "",
      "category": "Sunglasses"
    },
  ],
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
      </SimpleGrid>
    </Flex>
  );
}

export default ProductAddToCart;
