import { Box, Flex, Grid, Container } from "@chakra-ui/react";

import RoadMapCard from "./components/roadmap-card";
import TagsCard from "./components/tags-card";
import SuggestionCard from "./components/suggestion-card";
import TitleCard from "./components/title-card";
import Header from "./components/header";
import { suggestions } from "./utils/mock-data";

export default function Home() {
  return (
    <Box
      as="main"
      minHeight="100vh"
      backgroundColor="#F7F8FD"
      pt="100px"
      pb="20"
    >
      <Container maxW="1280px">
        <Grid gridTemplateColumns="255px auto" columnGap="10">
          <Box>
            <TitleCard />

            <TagsCard />

            <RoadMapCard />
          </Box>

          <Flex direction="column" rowGap="8">
            <Header />

            {suggestions.map((suggestion, i) => (
              <SuggestionCard
                key={i}
                title={suggestion.title}
                tag={suggestion.tag}
                description={suggestion.description}
                upvotes={suggestion.upvotes}
                commentCount={suggestion.commentCount}
              />
            ))}
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
}
