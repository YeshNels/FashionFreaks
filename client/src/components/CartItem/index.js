import React from "react";
import {
  Image,
  Text,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Card, CardBody, CloseButton } from "@chakra-ui/react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          size="sm"
          objectFit="cover"
          maxW={{ base: "100%", sm: "150px" }}
          src={`/images/${item.image}`}
          alt={item.name}
        />

        <CardBody>
          <HStack spacing={4} width={"100%"} direction={"row"} my={10}>
            <Box w={"50%"}>
              <Heading size="sm"> {item.name} </Heading>
            </Box>
            <Box w={"20%"}>
              <Text size="sm"> ${item.price}</Text>
            </Box>
            <Box w={"20%"}>
              <NumberInput
                size="xs"
                maxW={16}
                defaultValue={item.purchaseQuantity}
                min={0}
                m="auto"
                onChange={onChange}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </HStack>
        </CardBody>

        <CloseButton onClick={() => removeFromCart(item)} />
      </Card>
    </>
  );
};

export default CartItem;
