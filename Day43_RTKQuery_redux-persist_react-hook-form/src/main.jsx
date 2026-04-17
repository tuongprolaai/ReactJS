import { createRoot } from "react-dom/client";
import { Provider as ReduxPropvider } from "react-redux";
import { persistor, store } from "./store/store";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <ReduxPropvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </PersistGate>
    </ReduxPropvider>
  </ErrorBoundary>,
);
