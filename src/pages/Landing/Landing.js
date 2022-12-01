import classNames from 'classnames/bind';
import styles from './Landing.module.scss';

import Button from '~/components/Button';
import bannerImage from '~/assets/images/landing-banner.jpg';
const cx = classNames.bind(styles);

function Landing() {
    const BackgroundBannerStyle = {
        backgroundImage: `url('${bannerImage}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')} style={BackgroundBannerStyle}>
                <div className={cx('header')}>
                    <div className={cx('logo-wrap')}>
                        <img
                            className={cx('logo')}
                            src="https://a-v2.sndcdn.com/assets/images/peace-cloud-28ad0963.svg"
                            alt="logo"
                        />
                        <h1 className={cx('logo-title')}>SOUNDCLOUD</h1>
                    </div>
                    <div className={cx('account-box')}>
                        <Button outline small>
                            Sign in
                        </Button>
                        <Button small>Create account</Button>
                        <Button unDecoration small>
                            For Artists
                        </Button>
                    </div>
                </div>
                <div className={cx('slogan')}>
                    <h1>Connect on SoundCloud</h1>
                    <p>
                        Discover, stream, and share a constantly expanding mix of music from emerging and major artists
                        around the world.
                    </p>
                    <Button>Sign up for free</Button>
                </div>
            </div>
            <div className={cx('content')}></div>
            <div className={cx('teaser')}>teaser</div>
            <div className={cx('artist')}>artist</div>
            <div className={cx('footer')}>footer</div>
        </div>
    );
}

export default Landing;
