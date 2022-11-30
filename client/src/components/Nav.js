import React from "react";
import { ReactNode } from "react";
import { Cart } from "./Cart";
import Auth from "../utils/auth";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Shop"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function showHideNav() {
    if (Auth.loggedIn()) {
      return (
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Cart />
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Order History
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"orange.400"}
            href={"#"}
            _hover={{
              bg: "orange.300",
            }}
            onClick={() => Auth.logout()}
          >
            Sign out
          </Button>
        </Stack>
      );
    } else {
      return (
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Cart />
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"/login"}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"orange.400"}
            href={"/signup"}
            _hover={{
              bg: "orange.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      );
    }
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={useColorModeValue("orange.400", "orange.300")}
              fontFamily={"'Karla', sans-serif"}
              fontWeight="bold"
              textShadow="1px 1px 1px #662e05"
            >
              FashionFreaks
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Button
                as={"a"}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                ref={btnRef}
                colorScheme="teal"
                href={"/"}
              >
                Home
              </Button>

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
                  href={"/"}
                >
                  Shop
                </MenuButton>
                <MenuList>
                  <MenuItem>Sunglasses</MenuItem>
                  <MenuItem>Hats</MenuItem>
                  <MenuItem>Shoes</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          {showHideNav()}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
