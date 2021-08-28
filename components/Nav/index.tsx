import React, { useEffect } from 'react';
import { FC } from 'react';
import styles from './nav.module.scss'
import assets from '../../assets'
import darkModeUtility from './../../utility/darkMode.utility'

interface Props {
    routes: string[],
    activeRoute: string,
    darkMode: boolean,
    setDarkMode: any,
    setIsWalletVisible: any
}

const Nav: FC<Props> = ({ activeRoute, routes, setDarkMode, darkMode, setIsWalletVisible }) => {



    const handleDarkMode = () => {
        setDarkMode((currentMode: boolean) => {
            darkModeUtility(currentMode);
            return !currentMode;
        })
    }

    useEffect(() => {
        setDarkMode((currentMode: boolean) => {
            darkModeUtility(currentMode);
            return !currentMode;
        })
    }, [])

    return (
        <div className={styles.nav}>
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
            <span className={styles.darkModeIcon} onClick={handleDarkMode}>
                {darkMode ?
                    <img src={assets.darkMode} /> :
                    <img src={assets.lightMode} />}
            </span>

            <button className={styles.walletBtn} onClick={() => { setIsWalletVisible((s: any) => { return !s }) }}>Connect to wallet</button>

            <span className={styles.settings} >
                <img src={assets.settings} />
            </span>

            <button className={styles.language}></button>
        </div>

    );
}
export default Nav;