import PropTypes from "prop-types";

import styles from "./Button.module.scss";
import clsx from "clsx";

function Button({
    children,
    primary = false,
    rounded = false,
    bordered = false,
    href,
    size = "medium",
    className,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
    });
    const Component = href ? "a" : "button";
    return (
        <Component {...passProps} href={href} className={classNames}>
            {children}
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
};
export default Button;
