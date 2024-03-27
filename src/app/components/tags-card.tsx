import { Box, Wrap, WrapItem, Center } from "@chakra-ui/react";

const TagsCard = () => {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <Box backgroundColor="white" rounded="10px" mt="8">
      <Wrap px="7" py="7">
        {tags.map((tag, i) => (
          <WrapItem key={i}>
            <Center
              as="button"
              bg="#F2F4FF"
              color="#4661E6"
              fontSize="13px"
              px="4"
              rounded="10px"
              height="30px"
              fontWeight="semibold"
              cursor="pointer"
              _hover={{ bg: "#CFD7FF" }}
              _focus={{ color: "white", bg: "#4661E6" }}
            >
              {tag}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default TagsCard;
