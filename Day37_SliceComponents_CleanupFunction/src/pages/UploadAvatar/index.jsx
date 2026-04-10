import { useEffect, useState } from "react";
import defaultAvatar from "../../assets/image/react.svg";

const styles = {
    avatar: {
        width: 100,
        height: 100,
        borderRadius: "50%",
    },
};

function UploadAvatar() {
    const [previewURL, setPreviewURL] = useState(null);
    // Cleanup
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewURL);
        };
    }, [previewURL]);
    const handleChange = (e) => {
        const image = e.target.files[0];
        // Blob file
        const previewURL = URL.createObjectURL(image);
        setPreviewURL(previewURL);
    };
    return (
        <label>
            <input type="file" hidden onChange={handleChange} />
            <img
                src={previewURL || defaultAvatar}
                style={styles.avatar}
                alt=""
            />
        </label>
    );
}

export default UploadAvatar;
