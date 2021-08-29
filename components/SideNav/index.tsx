import React, { FC } from 'react';
import styles from './sideNav.module.scss'
import assets from '@/assets'
import Link from 'next/link'
import { useRouter } from "next/router";
interface Props {
    darkMode: boolean
}



const index: FC<Props> = ({ darkMode }) => {
    const router = useRouter();
    return (
        <div className={styles.sideNav}>
            <Link href='/home'>
                <span className={('/home' == router.asPath) ? styles.active : styles.inActive}>
                    <img src={!darkMode ? assets.navIcon1 : assets.navIcon1N} alt="" />
                    <p>Create Presale</p>
                </span>
            </Link>
            <Link href='/manage'>
                <span className={('/manage' == router.asPath) ? styles.active : styles.inActive}>
                    <img src={!darkMode ? assets.navIcon2 : assets.navIcon2N} alt="" />
                    <p>Manage Presale</p>
                </span>
            </Link>
            <Link  href='/list'>
                <span className={('/list' == router.asPath) ? styles.active : styles.inActive}>
                    <img src={!darkMode ? assets.navIcon3 : assets.navIcon3N} alt="" />
                    <p>List Presale</p>
                </span>
            </Link>
        </div>
    );
};

export default index;