import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  Icon,
  Menu,
  MenuButton,
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
} from "@chakra-ui/react";
import CartItem from "../CartItem";

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
            <CartItem />
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
