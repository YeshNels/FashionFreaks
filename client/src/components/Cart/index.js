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
  Badge,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import CartItem from "../CartItem";
import { useEffect } from "react";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";

const Cart = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

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
          <Icon as={FaShoppingCart} w={6} h={8} position="relative" />
          <Badge ml="-4" mt="-50" display="none">
            1
          </Badge>
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
          {state.cart.length ? (
            <div>
              <DrawerCloseButton />
              <DrawerHeader>My Shopping Cart</DrawerHeader>

              <DrawerBody>
                {state.cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </DrawerBody>

              <DrawerFooter>
                <Heading size="sm" textAlign="left" px="10">
                  ${calculateTotal()}
                </Heading>

                <Button alignSelf="left" colorScheme="blue">
                  Check Out
                </Button>
              </DrawerFooter>
            </div>
          ) : (
            <Alert status="warning">
              <AlertIcon />
              You haven't added anything to your cart yet!
            </Alert>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { Cart };
