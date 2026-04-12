// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider as ThemeProvider } from "@/contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    //</StrictMode>
);
