import { Flex, Text } from "@chakra-ui/react";
import s from "../page.module.css";

const TitleCard = () => {
  return (
    <Flex
      direction="column"
      justifyContent="end"
      className={`${s.card}`}
      color="white"
      pb="5"
      pl="5"
    >
      <Text fontWeight="700" fontSize="20px">
        Frontend Mentor
      </Text>

      <Text fontSize="15px" fontWeight="500" opacity="75%">
        Feedback Board
      </Text>
    </Flex>
  );
};

export default TitleCard;
