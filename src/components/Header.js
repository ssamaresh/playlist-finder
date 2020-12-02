import React from 'react';
import {
  Flex,
  Stack,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/core';
import { Link } from 'gatsby';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <Flex align="center" justify="space-between" p="4" color="white">
      <Heading as="h1" size="md" color="primary.900">
        Playlisthunt
      </Heading>
      <Stack isInline spacing="3">
        <Button variant="ghost" as={Link} to="/new" isFullWidth>
          New
        </Button>
        <Button variant="ghost" isFullWidth>
          Top
        </Button>
        {isAuthenticated ? (
          <Menu>
            <MenuButton as={Button} leftIcon="chevron-down">
              Profile
            </MenuButton>
            <MenuList placement="bottom-end">
              <MenuItem isDisabled>{user?.email}</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            variant="solid"
            variantColor="blue"
            fontWeight="bold"
            onClick={loginWithRedirect}
          >
            Sign Up
          </Button>
        )}
      </Stack>
    </Flex>
  );
};

export default Header;
