import { Tabs, Tab } from "@/components/Tabs";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeigth: 600,
        marginBottom: 20,
    },
};

const TabsDemo = () => {
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>TabsDemo</h1>
            <Tabs preserveContent id="tab1" defaultTabIndex={1} keepActiveTab>
                <Tab title="Tab 1">Content of Tab 1</Tab>
                <Tab title="Tab 2">Content of Tab 2</Tab>
                <Tab title="Tab 3">Content of Tab 3</Tab>
            </Tabs>
            <Tabs id="tab2" defaultTabIndex={2} keepActiveTab>
                <Tab title="Tab A">Content of Tab A</Tab>
                <Tab title="Tab B">Content of Tab B</Tab>
                <Tab title="Tab C">Content of Tab C</Tab>
            </Tabs>
        </div>
    );
};

export default TabsDemo;
