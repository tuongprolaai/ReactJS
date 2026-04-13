import { createRoot } from "react-dom/client";

import { Provider as ReduxProvider } from "react-redux";
import App from "./App.jsx";
import { Provider as ThemeProvider } from "@/contexts/ThemeContext.jsx";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </ThemeProvider>,
);
