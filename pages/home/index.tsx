import { FC, useState } from 'react';
import Content from '@/components/Content';
import PanelFullWidth from '@/components/PanelFullWidth'
import PanelVerticle from '@/components/PanelVerticle';
import InputBox from '@/components/InputBox';
import styles from './home.module.scss'
import IconChip from '@/components/IconChip';
import IconChipInput from '@/components/IconChipInput';
import IconChipInputTime from '@/components/IconChipInputTime';
import PopUp from '@/components/PopUp';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import ConnectWallet from '@/components/ConnectWallet'

const routes: string[] = [];

const Home: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(!false);
    const [isWalletVisible, setIsWalletVisible] = useState<boolean>(false);
    return (
        <>
            <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} setIsWalletVisible={setIsWalletVisible} />
           
            <div>
                <Content>
                    <SideNav darkMode={darkMode}></SideNav>
                    {isWalletVisible ? <ConnectWallet/> : null}
                    <PopUp/>
                    <section className={styles.panelOne}>
                        <PanelFullWidth>
                            <InputBox darkMode={darkMode}/>
                            <span className={styles.chips}>
                                <IconChip title={"Token Name"} value={"10000"}/>
                                <IconChip title={"Token Supply"} value={"10000"} />
                                <IconChip title={"Initial release date"} value={"10000"} />
                            </span>
                        </PanelFullWidth>
                    </section>

                    <section className={styles.panelTwo}>
                        <PanelFullWidth>
                            <span className={styles.chips}>
                                <IconChipInput title={"Presale rate"} value={"1200"} darkMode={darkMode} />
                                <IconChipInput title={"Exchange rate"} value={"500"} darkMode={darkMode} />
                                <IconChipInput title={"Percent towards liquidity"} value={"50" + '%'} darkMode={darkMode} />
                            </span>
                        </PanelFullWidth>
                    </section>

                    <section className={styles.panelThree}>
                        <PanelVerticle>
                            <IconChipInput title={"Softcap"} value={"1200"} darkMode={darkMode} />
                            <IconChipInput title={"HardCap"} value={"1200"} darkMode={darkMode}  />
                        </PanelVerticle>
                        <PanelVerticle>
                            <IconChipInput title={"Min Contribution"} value={"1200"} darkMode={darkMode} />
                            <IconChipInput title={"Max Contribution"} value={"1200"} darkMode={darkMode} />
                        </PanelVerticle>
                        <PanelVerticle>
                            
                            <IconChipInputTime title={"Start at"} value={"1200"} darkMode={darkMode}  />
                            <IconChipInputTime title={"End at"} value={"1200"} darkMode={darkMode}  />
                        </PanelVerticle>
                    </section>

                    <button className={styles.submitBtn}>
                        Submit
                    </button>

                </Content>
            </div>
        </>
    );
};

export default Home;