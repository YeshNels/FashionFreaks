import {
  Flex,
  SimpleGrid,
  Box,
  Image,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

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

function OrderHistory() {
  const [isShown, setIsShown] = useState(false);
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      {user ? (
        <>
          <SimpleGrid p={5} columns={1} row={1}>
            <Heading size="md">
              Order History for {user.firstName} {user.lastName}
            </Heading>
          </SimpleGrid>
          {user.orders.map((order) => (
            <Flex
              p={10}
              w="full"
              alignItems="center"
              justifyContent="space-between"
            >
              <SimpleGrid
                columns={{ base: 1, lg: 4, md: 3 }}
                spacing={5}
                key={order._id}
              >
                {order.products.map(({ _id, image, name, price }, index) => (
                  <Box
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bg={useColorModeValue("white", "gray.800")}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative"
                    margin={5}
                    padding={2}
                    key={index}
                  >
                    <Box position="relative">
                      <Image
                        src={`/images/${image}`}
                        alt={`Picture of ${name}`}
                        roundedTop="lg"
                      />
                      {isShown && (
                        <Box sx={innerBoxStyles} backdropFilter="invert(100%)">
                          New Details Lorem ipsum dolor sit amet, consetetur
                          sadipscing elitr, sed diam nonumy eirmod tempor
                          invidunt ut labore
                        </Box>
                      )}
                    </Box>
                    <Box p="6">
                      <Flex
                        mt="1"
                        justifyContent="space-between"
                        alignContent="center"
                      >
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
                          {name}
                        </Box>
                      </Flex>

                      <Flex
                        justifyContent="space-between"
                        alignContent="center"
                      >
                        <Box
                          fontSize="l"
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          color={useColorModeValue("gray.800", "white")}
                        >
                          <Box as="span" color={"gray.600"} fontSize="lg">
                            $
                          </Box>
                          {price}
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Flex>
          ))}
        </>
      ) : null}
    </>
  );
}

export default OrderHistory;
