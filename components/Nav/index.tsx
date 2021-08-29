import React, { useEffect } from 'react';
import { FC } from 'react';
import styles from './nav.module.scss'
import assets from '../../assets'
import darkModeUtility from './../../utility/darkMode.utility'
import LangPicker from '@/components/LangPicker'
import { Button } from '@material-ui/core';

interface Props {
    routes: string[],
    activeRoute: string,
    darkMode: boolean,
    setDarkMode: any,
    setIsWalletVisible: any,
    isSideNavOpen:boolean,
    setIsSideNavOpen:any
}

const Nav: FC<Props> = ({ activeRoute, routes, setDarkMode, darkMode, setIsWalletVisible, isSideNavOpen,setIsSideNavOpen }) => {


    const handleNavToggle = () => {
         setIsSideNavOpen((s:boolean)=>{
             return !s;
         })
    }


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
                <img className={styles.navBtn} src={'./navBtn.png'} alt="" onClick={handleNavToggle} />
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
            <span className={styles.darkModeIcon} onClick={handleDarkMode}>
                {darkMode ?
                    <img src={assets.darkMode} /> :
                    <img src={assets.lightMode} />}
            </span>

            <Button className={styles.walletBtn} onClick={() => { setIsWalletVisible((s: any) => { return !s }) }}>Connect to wallet</Button>

            <span className={styles.settings} >
                <img src={assets.settings} />
            </span>

            <LangPicker></LangPicker>
        </div>

    );
}
export default Nav;