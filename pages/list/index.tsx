import { FC, useState } from 'react';
import Content from '../../components/Content';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import styles from "./list.module.scss";
import assets from '@/assets';
import ConnectWallet from '@/components/ConnectWallet'


const routes: string[] = [];

const Card: FC = () => {
    return (
        <div className={styles.card}>
            <span className={styles.head}>
                <h2>Jupiter Coin</h2>
                <img src={assets.bnbCircle} alt="" />
            </span>
            <span className={styles.stats}>
                <div className={styles.row}>
                    <span className={styles.stat}>
                        <p>Softcap</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                    <span className={styles.stat}>
                        <p>Hardcap</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.stat}>
                        <p>Min Contribution</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                    <span className={styles.stat}>
                        <p>Max Contribution</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                </div>
            </span>
            <div className={styles.desc}>
                <h3 className={styles.title}>Description</h3>
                <p className={styles.descText}>Polygon protocol and framework compatible blockchain protocol...... Read more</p>
            </div>
            <div className={styles.prog}>
                <h1>50/1000</h1>
                <span className={styles.progBar}>
                    <span></span>
                </span>
            </div>
            <div className={styles.action}>
                <p>Starts in 50:00</p>
                <button>View Presale</button>
            </div>
        </div>
    )
}

const Home: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(!false);
    const [isWalletVisible, setIsWalletVisible] = useState<boolean>(false);
    return (
        <>
            <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} setIsWalletVisible={setIsWalletVisible} />
            <div>
                <Content>
                    {isWalletVisible ? <ConnectWallet /> : null}
                    <SideNav darkMode={darkMode}></SideNav>
                    <div className={styles.list}>
                        <div className={styles.listHeader}>
                            <p>Presale List</p>
                            <span className={styles.inputSearch}>
                                <input type="text" placeholder={"Search Tokens"} />
                                <span className={styles.customBorder} />
                            </span>
                            <span className={styles.inputSelect} style={{ marginRight: "1.5rem", marginLeft: "auto" }}>
                                <select placeholder={"1000"} >
                                    <option value="100">100</option>
                                    <option value="100">1000</option>
                                    <option value="100">10000</option>
                                </select>
                                <span className={styles.customBorder} />
                            </span>
                        </div>
                        <div className={styles.listContent}>
                            <div className={styles.rowCard}>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                            <div className={styles.rowCard}>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                        <div className={styles.listControl}>
                            <button className={styles.btn}>Previous</button>
                            <p className={styles.pagination}>Displaying 1 to 8 of 60 Presales</p>
                            <button className={styles.btn}>Next</button>
                        </div>
                    </div>
                </Content>
            </div>
        </>
    );
};

export default Home;