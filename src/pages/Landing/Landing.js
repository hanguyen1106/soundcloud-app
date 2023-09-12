import classNames from 'classnames/bind';
import styles from './Landing.module.scss';
import Popup from 'reactjs-popup';

import Button from '~/components/Button';
import bannerImage from '~/assets/images/landing-banner.jpg';
import teaserMobile from '~/assets/images/teaser-mobile.jpg';
import appStoreIcon from '~/assets/images/app-store.png';
import googlePlayIcon from '~/assets/images/google-play.png';
import creatorFeature from '~/assets/images/creator-feature.jpg';
import SearchInput from '~/components/SearchInput';
import LoginForm from '~/components/LoginForm';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
const cx = classNames.bind(styles);

function Landing() {
    const BackgroundBannerStyle = {
        backgroundImage: `url('${bannerImage}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const teaserStyle = {
        backgroundImage: `url('${teaserMobile}')`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    const creatorStyle = {
        backgroundImage: `url('${creatorFeature}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const response = fetch('http://localhost:8081/api/songs');
        response
            .then((oRes) => {
                return oRes.json();
            })
            .then((oRes) => {
                setSongs(oRes);
            });
    }, []);

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
                        <Popup
                            trigger={
                                <Button outline small>
                                    Sign in
                                </Button>
                            }
                            modal={true}
                            position="right center"
                        >
                            <LoginForm />
                        </Popup>

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
                        {songs.map((songItem, index) => {
                            const url = songItem['song_url'];
                            console.log(url);
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
                                        <img className={cx('song-thumbnail')} src={`${url}`} alt={''} />
                                        <h3 className={cx('song-title')}>{songItem['song_name']}</h3>
                                        <h4 className={cx('song-author')}>{songItem['song_nickname']}</h4>
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
            <div className={cx('footer')}>
                <div className={cx('footer-wrap')}>
                    <h1>Thanks for listening. Now join in.</h1>
                    <h2>Save tracks, follow artists and build playlists. All for free.</h2>
                    <Button className={cx('footer-create')}>Create account</Button>
                    <div className={cx('footer-bottom')}>
                        <p>Already have an account?</p>
                        <Button className={cx('footer-signin')} white>
                            Sign in
                        </Button>
                    </div>
                </div>
                <div className={cx('footer-direction')}>
                    <Link>Directory</Link>&nbsp;⁃&nbsp;
                    <Link>About us</Link>&nbsp;⁃&nbsp;
                    <Link>Artist Resources</Link>&nbsp;⁃&nbsp;
                    <Link>Blog</Link>&nbsp;⁃&nbsp;
                    <Link>Jobs</Link>&nbsp;⁃&nbsp;
                    <Link>Developers</Link>&nbsp;⁃&nbsp;
                    <Link>Help</Link>&nbsp;⁃&nbsp;
                    <Link>Legal</Link>&nbsp;⁃&nbsp;
                    <Link>Privacy</Link>&nbsp;⁃&nbsp;
                    <Link>Cookie Policy</Link>&nbsp;⁃&nbsp;
                    <Link>Consent Manager</Link>&nbsp;⁃&nbsp;
                    <Link>Imprint</Link>&nbsp;⁃&nbsp;
                    <Link>Charts</Link>
                </div>
                <div className={cx('footer-language')}>
                    <p className={cx('footer-language-button')}>Language: </p>
                    <p className={cx('footer-language-text')}>English (US)</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;
