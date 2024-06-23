import { Stack, Center, Text, Box, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl: string = process.env.REACT_APP_SUPABASE_URL ?? "";
// const supabaseAnonKey: string = process.env.REACT_APP_SUPABASE_ANON_KEY ?? "";

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function GameScorePage() {
  const location = useLocation();

  const navigate = useNavigate();

  const goToStartFormPage = () => {
    navigate("/");
  };

  return (
    <Stack spacing="250">
      <Box />
      <Center bg="cyan.100" w="100%" p={6} color="black">
        <Stack spacing={3} justifyContent="center">
          <Text textAlign="center" fontSize="5xl">Your Score: {location.state.score}</Text>
          {/* <Text fontSize="5xl">
            {" "}
            Your Percentile:{" "}
            {Number(percentile).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 1,
            })}{" "}
          </Text>
          <Text fontSize="5xl"> Out of {numGames} total games</Text> */}
          <Text textAlign="center" fontSize="5xl">Your Accuracy: {Math.round(location.state.score / (location.state.totalAttempts + location.state.score) * 100)}%</Text>
          <Button
            width="full"
            mt={4}
            type="submit"
            colorScheme="cyan"
            onClick={goToStartFormPage}
            autoFocus={true}
          >
            Play Again
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
}

export default GameScorePage;
