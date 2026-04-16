import Button from "@/components/Button";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
    faChevronRight,
    faHeart,
    faLink,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// npm install @fortawesome/react-fontawesome
// npm install @fortawesome/free-solid-svg-icons
// npm install @fortawesome/free-regular-svg-icons
// npm install @fortawesome/free-brands-svg-icons

function Icon() {
    let loading = true;
    return (
        <div>
            <h1>Icon</h1>
            <Button icon={faLink} disabled>
                Button 1
            </Button>
            <Button leftIcon={faLink}>Button 2</Button>
            <Button rightIcon={faChevronRight}>Button 3</Button>
            <button
                style={{
                    fontSize: 20,
                    color: "red",
                }}
            >
                <FontAwesomeIcon
                    spin={loading}
                    icon={loading ? faSpinner : faYoutube}
                />
                Click me!
            </button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faHeart} beat />
        </div>
    );
}

export default Icon;
