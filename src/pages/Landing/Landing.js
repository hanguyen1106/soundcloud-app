import classNames from 'classnames/bind';
import styles from './Landing.module.scss';

import Button from '~/components/Button';
import bannerImage from '~/assets/images/landing-banner.jpg';
import teaserMobile from '~/assets/images/teaser-mobile.jpg';
import appStoreIcon from '~/assets/images/app-store.png';
import googlePlayIcon from '~/assets/images/google-play.png';
import creatorFeature from '~/assets/images/creator-feature.jpg';
import SearchInput from '~/components/SearchInput';
import { Grid } from '@mui/material';
const cx = classNames.bind(styles);

const songList = [
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
    {
        songTitle: 'Roi Mot Ngay - Dewie',
        songAthor: 'Dewie',
    },
];

function Landing() {
    const BackgroundBannerStyle = {
        backgroundImage: `url('${bannerImage}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const teaserStyle = {
        backgroundImage: `url('${teaserMobile}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    const creatorStyle = {
        backgroundImage: `url('${creatorFeature}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
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
            <div className={cx('trending')}>
                <div className={cx('search-box')}>
                    <SearchInput type="search" placeholder="Search for artists, bands, tracks, podcasts" />
                    <span>or</span>
                    <Button style={{ minWidth: 'unset' }}>Upload your own</Button>
                </div>
                <h1 className={cx('caption')}>Hear what’s trending for free in the SoundCloud community</h1>
                <div className={cx('song-list')}>
                    <Grid container>
                        {songList.map((songItem, index) => {
                            return (
                                <Grid
                                    key={index}
                                    item
                                    xs={2}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <div className={cx('song-item')}>
                                        <img
                                            className={cx('song-thumbnail')}
                                            src={'https://i1.sndcdn.com/artworks-pLhhnIwz789avtCc-J9EIbg-t200x200.jpg'}
                                            alt={''}
                                        />
                                        <h3 className={cx('song-title')}>{songItem.songTitle}</h3>
                                        <h4 className={cx('song-author')}>{songItem.songAthor}</h4>
                                    </div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
                <div className={cx('explore')}>
                    <Button>Explore trending playlists</Button>
                </div>
            </div>
            <div className={cx('teaser')}>
                <div className={cx('mobile-device')} style={teaserStyle}></div>
                <div className={cx('teaser-caption')}>
                    <h1>Never Stop Listening</h1>
                    <h2>SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.</h2>
                    <div className={cx('download')}>
                        <a
                            href={'https://apps.apple.com/us/app/soundcloud-discover-new-music/id336353151'}
                            className={cx('app-store')}
                        >
                            <img src={appStoreIcon} alt="app-store" />
                        </a>
                        <a
                            href={'https://play.google.com/store/apps/details?id=com.soundcloud.android'}
                            className={cx('google-play')}
                        >
                            <img src={googlePlayIcon} alt="google-play" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('creator')} style={creatorStyle}>
                <div className={cx('creator-feature')}>
                    <h1>Calling all creators</h1>
                    <h2>
                        Get on SoundCloud to connect with fans, share your sounds, and grow your audience. What are you
                        waiting for?
                    </h2>
                    <Button href={'https://google.com'} outline className={cx('find-out')}>
                        Find out more
                    </Button>
                </div>
            </div>
            <div className={cx('footer')}>footer</div>
        </div>
    );
}

export default Landing;
