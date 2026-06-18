import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { ThemeProvider } from "next-themes";

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
