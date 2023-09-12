import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const Button = forwardRef(function (
    { to, href, children, className, outline, small, unDecoration, white, onClick, ...passProps },
    ref,
) {
    let Component = 'button';
    const props = {
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = 'Link';
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        outline,
        small,
        unDecoration,
        white,
    });
    return (
        <Component ref={ref} className={classes} {...props} onClick={onClick}>
            {children}
        </Component>
    );
});

export default Button;
