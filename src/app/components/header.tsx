"use client";
import { Fragment } from "react";

import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

import { Tick, ChevronUp, BulbIcon } from "./svg-components";

const Header = () => {
  const sortByOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const [selectedSortOption, setSelectedSortOption] = useState("Most Upvotes");

  return (
    <Flex bg="#373F68" rounded="lg" height="72px" alignItems="center" px="7">
      <BulbIcon />

      <Text fontWeight="700" fontSize="18px" color="white" ml="4">
        6 Suggestions
      </Text>

      <Flex alignItems="center" gap="1.5">
        <Text color="#F2F4FE" ml="10" fontSize="14px">
          Sort by
        </Text>

        <Text color="#F2F4FE">:</Text>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton fontSize="14px" fontWeight="700" color="#F2F4FE">
                <Flex alignItems="center" gap="2.5">
                  <span>Most Upvotes</span>

                  <div
                    style={{
                      transform: !isOpen ? "rotateX(-180deg)" : "rotateX(0deg)",
                    }}
                  >
                    <ChevronUp />
                  </div>
                </Flex>
              </MenuButton>

              <MenuList>
                {sortByOptions.map((option, i) => (
                  <Fragment key={i}>
                    <MenuItem onClick={() => setSelectedSortOption(option)}>
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%"
                        px="3"
                      >
                        <span>{option}</span>

                        {selectedSortOption === option && <Tick />}
                      </Flex>
                    </MenuItem>
                    {i !== sortByOptions.length - 1 && <MenuDivider />}
                  </Fragment>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>

      <Button ml="auto" bg="#C75AF6" color="white">
        + Add Feedback
      </Button>
    </Flex>
  );
};

export default Header;
