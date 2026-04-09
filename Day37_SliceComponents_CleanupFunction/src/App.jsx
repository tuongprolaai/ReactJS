import Button from "./components/Button";

import styles from "./App.module.scss";
import "./styles/main.scss";
import AppRoutes from "./components/AppRoutes";

function App() {
    return (
        <>
            <Button>Normal</Button>
            <Button rounded>Rounded</Button>
            <Button primary>Primary</Button>
            <Button size="small" bordered rounded>
                Bordered
            </Button>
            <Button className={styles.customBtn} primary size="large">
                Custom
            </Button>
            <AppRoutes />
        </>
    );
}

export default App;
