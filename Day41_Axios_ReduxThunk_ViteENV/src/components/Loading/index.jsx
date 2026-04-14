import { useLoading } from "@/store/ui";
import styles from "./Loading.module.scss";

function Loading() {
    const loading = useLoading();
    if (!loading) return null;
    return <div className={styles.wrapper} />;
}

export default Loading;
