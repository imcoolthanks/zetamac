import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import GameStartForm from "./pages/GameStartForm";
import GamePlayPage from "./pages/GamePlay";
import GameScorePage from "./pages/GameScore";
import { HashRouter , Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <HashRouter>
          <Routes>
            <Route path="/" element={<GameStartForm />} />
            <Route path="/gamePlayPage" element={<GamePlayPage />} />
            <Route path="/gameScorePage" element={<GameScorePage />} />
          </Routes>
        </HashRouter >
      </ColorModeProvider>
    </ThemeProvider>
  );
}
