import classNames from 'classnames/bind';
import styles from './Landing.module.scss';

import Button from '~/components/Button';
import bannerImage from '~/assets/images/landing-banner.jpg';
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
            </div>

            <div className={cx('teaser')}>teaser</div>
            <div className={cx('artist')}>artist</div>
            <div className={cx('footer')}>footer</div>
        </div>
    );
}

export default Landing;
