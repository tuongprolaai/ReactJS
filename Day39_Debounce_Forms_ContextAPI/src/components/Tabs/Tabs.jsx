import { Children, useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import Tab from "./Tab";

import styles from "./Tabs.module.scss";
import clsx from "clsx";

function Tabs({
    id,
    preserveContent = false,
    keepActiveTab = false,
    className,
    tabsClassName,
    defaultTabIndex = 0,
    children,
}) {
    const [params, setParams] = useSearchParams();
    const [tabIndex, setTabIndex] = useState(() => {
        if (!keepActiveTab) return defaultTabIndex;
        return +params.get(id) ?? defaultTabIndex;
    });
    const tabs = Children.map(children, (tab) => {
        // if (tab.type !== Tab) {
        //     throw new Error("Children of <Tabs> must be <Tab>");
        // }
        return tab;
    });

    const renderTTabContent = () => {
        if (preserveContent) {
            return tabs.map((tab, index) => {
                return (
                    <div hidden={index !== tabIndex} key={index}>
                        {tab.props.children}
                    </div>
                );
            });
        }
        return tabs[tabIndex].props.children;
    };

    useEffect(() => {
        if (keepActiveTab) {
            if (!id)
                throw new Error(
                    "When using keepActiveTab it is required to pass id props",
                );
        }
    }, [id, keepActiveTab]);

    useEffect(() => {
        if (!keepActiveTab) return;
        params.set(id, tabIndex);
        setParams(params);
    }, [tabIndex, id, setParams]);

    return (
        <div className={clsx(styles.wrapper, className)}>
            <div className={clsx(styles.tabsList, tabsClassName)}>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        active={index === tabIndex}
                        onClick={() => setTabIndex(index)}
                    >
                        {tab.props.title}
                    </Tab>
                ))}
            </div>
            <div className={styles.tabContent}>{renderTTabContent()}</div>
        </div>
    );
}

export default Tabs;
