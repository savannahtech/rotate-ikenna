import { Box, Flex, Text } from "@chakra-ui/react";
import { ChevronUpBlue, CommentIcon } from "./svg-components";

interface IProps {
  title: string;
  description: string;
  upvotes: number;
  tag: string;
  commentCount: number;
}

const SuggestionCard = (props: IProps) => {
  return (
    <Flex
      bg="white"
      rounded="lg"
      height="151px"
      alignItems="center"
      px="10"
      role="group"
      cursor="pointer"
    >
      <Flex>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          rowGap="2"
          bg="#F2F4FE"
          width="40px"
          height="53px"
          rounded="lg"
          _groupHover={{ bg: "#CFD7FF" }}
          _focus={{ color: "white", bg: "#4661E6" }}
        >
          <ChevronUpBlue />

          <Text fontSize="13px" fontWeight="700" color="#3A4374">
            {props.upvotes}
          </Text>
        </Flex>

        <Box ml="12">
          <Text
            fontSize="18px"
            color="#3A4374"
            fontWeight="700"
            _groupHover={{ color: "#4661E6" }}
          >
            {props.title}
          </Text>

          <Text color="#647196" mb="3">
            {props.description}
          </Text>

          <Box
            bg="#F2F4FF"
            fontWeight="600"
            color="#4661E6"
            display="inline-block"
            px="4"
            py="1.5"
            rounded="lg"
          >
            <Text fontSize="13px">{props.tag}</Text>
          </Box>
        </Box>
      </Flex>

      <Flex alignItems="center" gap="2" ml="auto">
        <CommentIcon />

        <Text color="#3A4374" fontWeight="700">
          {props.commentCount}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SuggestionCard;
