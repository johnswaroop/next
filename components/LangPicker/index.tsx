import assets from '@/assets';
import React, { FC, useState } from 'react'
import index from '../SideNav';
import styles from './langPicker.module.scss'

const flags = [{ name: "German", flag: "./flag.png" }, { name: "USA", flag: "./usa.png" }, { name: "France", flag: "./france.png" }, { name: "India", flag: "./india.png" }]

const Option: FC<{ index: number }> = ({ index }) => {
    return <>
        <img className={styles.flag} src={flags[index].flag} alt="" />
        <p>{flags[index].name}</p>
        <img src={"./arrow.png"} alt="" className={styles.arrow} />
    </>
}


const LangPicker: FC = () => {

    const [flagIndex, setFlagIndex] = useState(0);


    return (
        <div className={styles.con}>
            <div className={styles.langPicker}>
                <Option index={flagIndex} />
            </div>
            <div className={styles.dropDown}>

                {
                    flags.map((f, index) => {
                        return (
                            <div key={'f'+index} className={styles.option} onClick={() => { setFlagIndex(index) }}>
                                <img className={styles.flag} src={f.flag} alt="" />
                                <p>{f.name}</p>
                                <img src={""} alt="" className={styles.arrow} />
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default LangPicker;