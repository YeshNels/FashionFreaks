import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  Icon,
  Menu,
  MenuButton,
  Image,
  Text,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Card, CardBody, CloseButton } from "@chakra-ui/react";

const Cart = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* Cart Button */}
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          <Icon as={FaShoppingCart} w={6} h={8} />
        </MenuButton>
      </Menu>

      {/* The Checkout Modal to display the cart products */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                size="sm"
                objectFit="cover"
                maxW={{ base: "100%", sm: "150px" }}
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
                alt="Sunglasses Classic"
              />

              <CardBody>
                <HStack spacing={4} width={"100%"} direction={"row"} my={10}>
                  <Box w={"50%"}>
                    <Heading size="sm"> Sunglasses Classic </Heading>
                  </Box>
                  <Box w={"20%"}>
                    <Text size="sm">4 $</Text>
                  </Box>
                  <Box w={"20%"}>
                    <NumberInput
                      size="xs"
                      maxW={16}
                      defaultValue={1}
                      min={0}
                      m="auto"
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

              <CloseButton />
            </Card>
          </DrawerBody>

          <DrawerFooter>
            <Heading size="sm" textAlign="left" px="10">
              Subtotal 4 $
            </Heading>

            <Button alignSelf="left" colorScheme="blue">
              Check Out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { Cart };
