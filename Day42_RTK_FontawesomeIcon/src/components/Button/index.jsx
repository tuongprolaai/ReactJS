import PropTypes from "prop-types";

import styles from "./Button.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Button({
    children,
    primary = false,
    rounded = false,
    bordered = false,
    href,
    size = "medium",
    className,
    icon,
    leftIcon = icon,
    rightIcon,
    loading = false,
    disabled = false,
    onClick,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled || loading,
    });
    const Component = href ? "a" : "button";

    const handleClick = (e) => {
        if (disabled || loading) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        onClick();
    };

    return (
        <Component
            {...passProps}
            onClick={handleClick}
            href={href}
            className={classNames}
        >
            <div className={clsx(styles.inner, { [styles.hidden]: loading })}>
                {leftIcon && (
                    <FontAwesomeIcon className={styles.icon} icon={leftIcon} />
                )}
                <span>{children}</span>
                {rightIcon && (
                    <FontAwesomeIcon className={styles.icon} icon={rightIcon} />
                )}
            </div>
            {loading && (
                <FontAwesomeIcon
                    className={styles.loading}
                    icon={faSpinner}
                    spin
                />
            )}
        </Component>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    icon: PropTypes.object,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};
export default Button;
