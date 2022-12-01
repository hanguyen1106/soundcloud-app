import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, className, outline, small, unDecoration, ...passProps }) {
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
    });

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

export default Button;
