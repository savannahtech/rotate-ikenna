import { Box, Flex, Text } from "@chakra-ui/react";

const RoadMapCard = () => {
  return (
    <Box bg="white" rounded="10px" mt="8" px="7" py="7">
      <Flex justifyContent="space-between" alignItems="center" mb="6">
        <Text color="#3A4374" fontSize="18px" fontWeight="700">
          Roadmap
        </Text>

        <Text
          color="#8397F8"
          fontWeight="600"
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          View
        </Text>
      </Flex>

      <Flex direction="column" rowGap="4">
        <Flex justifyContent="space-between" width="100%">
          <Flex alignItems="center" gap="4">
            <Box bg="#F49F85" height="8px" width="8px" rounded="full"></Box>

            <Text color="#647196">Planned</Text>
          </Flex>

          <Text color="#647196" fontWeight="700">
            2
          </Text>
        </Flex>

        <Flex justifyContent="space-between" width="100%">
          <Flex alignItems="center" gap="4">
            <Box bg="#AD1FEA" height="8px" width="8px" rounded="full"></Box>

            <Text color="#647196">In-Progress</Text>
          </Flex>

          <Text color="#647196" fontWeight="700">
            3
          </Text>
        </Flex>

        <Flex justifyContent="space-between" width="100%">
          <Flex alignItems="center" gap="4">
            <Box bg="#62BCFA" height="8px" width="8px" rounded="full"></Box>

            <Text color="#647196">Live</Text>
          </Flex>

          <Text color="#647196" fontWeight="700">
            1
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RoadMapCard;
