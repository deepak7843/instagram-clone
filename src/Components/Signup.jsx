import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { REGISTER_SUCCESS } from "../Redux/AuthReducer/actionTypes";
import { register } from "../Redux/AuthReducer/action";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };

    case "username":
      return {
        ...state,
        username: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    case "mobile":
      return {
        ...state,
        mobile: action.payload,
      };

    case "email":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: "",
};

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupHandler = () => {
    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        navigate("/login", { replace: true });
      }
    });
  };

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          width={"800px"}
          maxW={"lg"}
          py={6}
          px={9}
        >
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Heading as="i" sx={{ fontFamily: "Cookie" }}>
              Instagram
            </Heading>
            <Text fontSize="20px" color="gray">
              Sign up to see photos and videos from your friends.
            </Text>
            <Stack spacing={4} pt={2}>
              <Button colorScheme="blue">LOG IN WITH FACEBOOK</Button>
            </Stack>

            <Stack spacing={4} pt={4}>
              <FormControl id="Name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={state.name}
                  onChange={(e) =>
                    setter({ type: "name", payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setter({ type: "email", payload: e.target.value })
                  }
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={state.password}
                    onChange={(e) =>
                      setter({ type: "password", payload: e.target.value })
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={8} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={signupHandler}
                >
                  Sign up
                </Button>
                <Text fontSize="20px" color="gray">
                  By signing up, you agree to our Terms , Data Policy and
                  Cookies Policy .
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            mt={0}
          >
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <div className="getApp">
        <p>Get the app.</p>

        <div className="appsLinks">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt="AppStore"
            width="130"
            height="40"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt="GooglePlay"
            width="130"
            height="40"
          />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
