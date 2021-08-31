import { FC, ReactNode } from 'react';
import styles from './content.module.scss'

interface Props {
    children?: ReactNode;
    styling?: {};
}

const Content: FC<Props> = ({ children, styling }) => {
    return (
        <div className={styles.content}
            style={styling}
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