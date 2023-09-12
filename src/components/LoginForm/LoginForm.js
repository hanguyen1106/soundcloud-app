import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';

import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function LoginForm() {
    return (
        <div className={cx('popup-wrap')}>
            <div className={cx('popup-content')}>
                <Button className={cx('popup-facebookBtn')}>
                    <FontAwesomeIcon className={cx('popup-icon')} icon={faFacebook} />
                    Continue with Facebook
                </Button>
                <Button className={cx('popup-googleBtn')} white>
                    <FontAwesomeIcon className={cx('popup-icon')} icon={faGoogle} />
                    Continue with Google
                </Button>
                <Button className={cx('popup-appleBtn')}>
                    <FontAwesomeIcon className={cx('popup-icon')} icon={faApple} />
                    Continue with Apple
                </Button>
                <Button>789</Button>
                <div>Seperator</div>
                <input type="text" />
                <Button>789</Button>
                <Button>NeedHelp</Button>
                <p>Policy</p>
            </div>
        </div>
    );
}

export default LoginForm;
