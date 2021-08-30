import { FC, ReactNode } from 'react';
import styles from './content.module.scss'

interface Props {
    children?: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
    return (
        <div className={styles.content}
            onClick={
                () => {
                    const nav: any = document.querySelector('#nav');
                    //console.log("close");
                    nav.style.marginLeft = "-17rem";
                }
            }>
            {children}
        </div>
    );
};

export default Content;