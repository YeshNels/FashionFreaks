import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading color={"orange.500"}>FashionFreaks</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?s=612x612&w=0&k=20&c=qG_9JB9ll4P5to97_HVxzMqhhzF0Gi1nWM_hNeiotbk="
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
