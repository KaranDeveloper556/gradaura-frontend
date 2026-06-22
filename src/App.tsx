import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import AppRouter from "./router/AppRouter";

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
