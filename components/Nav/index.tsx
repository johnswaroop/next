import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import styles from './nav.module.scss'
import assets from '../../assets'
import darkModeUtility from './../../utility/darkMode.utility'
import LangPicker from '@/components/LangPicker'
import { Button } from '@material-ui/core';
import { useRouter } from "next/router";
import { count } from 'console';

interface Props {
    routes: string[],
    activeRoute: string,
    darkMode: boolean,
    setDarkMode: any,
    setIsWalletVisible: any,
    setIsCalculatorVisible: any,
}

const Nav: FC<Props> = ({ activeRoute, routes, setDarkMode, darkMode, setIsWalletVisible, setIsCalculatorVisible }) => {

    const router = useRouter();

    const [count, setCount] = useState(0);
    const [dimmer, setDimmer] = useState(false);

    // const handleDarkMode = () => {
    //     setDarkMode((currentMode: boolean) => {
    //         darkModeUtility(currentMode);
    //         return !currentMode;
    //     })
    // }

    useEffect(() => {
        setDarkMode((currentMode: boolean) => {
            darkModeUtility(currentMode);
            return !currentMode;
        })
    }, [])

    useEffect(() => {
        const nav: any = document.querySelector('#nav');
        nav.style.marginLeft = "-17rem";
    }, []);

    return (
        <div className={styles.nav}>
            <span className={styles.logo}>
                <img className={styles.navBtn} src={'./navBtn.png'}
                    onClick={
                        () => {
                            const nav: any = document.querySelector('#nav');
                            if (nav.style.marginLeft == '-17rem') {
                                //console.log("open");
                                nav.style.marginLeft = "0rem";
                                setDimmer(true);
                            }
                            else {
                                //console.log("close");
                                nav.style.marginLeft = "-17rem";
                                setDimmer(false);
                            };
                        }
                    }
                />
            </span>
            <span className={styles.logo}>
                <img src={assets.logo} alt="" />
            </span>
            <ul className={styles.routes}>
                {
                    routes.map((route: string) => {
                        if (activeRoute == route) return <li className={styles.activeRoute}>{route}</li>
                        else return <li>{route}</li>
                    })
                }
            </ul>
            {/* <span className={styles.darkModeIcon} onClick={handleDarkMode}>
                {darkMode ?
                    <img src={assets.darkMode} /> :
                    <img src={assets.lightMode} />}
            </span> */}

            <span className={styles.settings} onClick={() => { setCount(c => ++c); setIsCalculatorVisible((s: any) => { return !s }) }} >
                {('/home' == router.asPath) && <img src={assets.settings} style={{ transform: `rotate(${60 * count}deg)` }} className={styles.setIcon} />}
            </span>

            <Button className={styles.walletBtn} onClick={() => { setIsWalletVisible((s: any) => { return !s }) }}>Connect to wallet</Button>

            {/* <LangPicker></LangPicker> */}
            {dimmer && <div className={styles.dimmer}
                onClick={
                    () => {
                        const nav: any = document.querySelector('#nav');
                        //console.log("close");
                        nav.style.marginLeft = "-17rem";
                        setDimmer(false);
                    }
                }
            />}
        </div>

    );
}
export default Nav;