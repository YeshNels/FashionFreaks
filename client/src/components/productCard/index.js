import React from "react";
import {
  Flex,
  SimpleGrid,
  Box,
  Image,
  useColorModeValue,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useState } from "react";
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

function ProductItem(item) {
  const [isShown, setIsShown] = useState(false);

  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

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
              src={`/images/${image}`}
              alt={`Picture of ${name}`}
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
                isTruncated
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Button
                    as={FiShoppingCart}
                    h={7}
                    w={7}
                    alignSelf={"center"}
                    onClick={addToCart}
                  />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="l" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
export default ProductItem;
