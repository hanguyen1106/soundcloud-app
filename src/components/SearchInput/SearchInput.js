import classNames from 'classnames/bind';
import styles from './SearchInput.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchInput({ type, placeholder }) {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('default')} type={type} placeholder={placeholder} />
            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
        </div>
    );
}

export default SearchInput;
