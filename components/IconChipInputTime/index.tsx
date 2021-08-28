import { FC, useState } from 'react';
import assets from '../../assets';
import styles from './iconChipInputTime.module.scss'
import { DateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import { MuiThemeProvider, createTheme, } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import ToolTip from '@/components/ToolTip'
interface Props {
    icon?: string,
    title: string,
    value: string,
    darkMode: boolean
}
const theme = createTheme({
    palette: {
        primary: { main: '#99EFDA' },
        secondary: { main: '#008A64' }
    },
});

const IconChipInput: FC<Props> = ({ title, value, icon ,darkMode}) => {

    const [inFocus, setInFocus] = useState<boolean>(false);
    const [selectedDate, handleDateChange] = useState(null);
    const handleFocus = () => {
        setInFocus(f => !f);
    }

    const [toolTipActive, setToolTipActive] = useState<boolean>(false);
    const infoBoxText: string[] = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.', 'new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.', 'new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.'];





    return (
        <MuiThemeProvider theme={theme} >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <span className={styles.iconChip}>
                    <span className={styles.iconContainer}>
                        <img src={icon ? icon : assets.bnbIcon} />
                    </span>
                    <span className={inFocus ? styles.textContainerFocus : styles.textContainer} >
                        <p className={styles.title}>{title}</p>
                        <span className={styles.input}>
                            <DateTimePicker value={selectedDate} onChange={(e: any) => { handleDateChange(e) }} />
                            <span className={inFocus ? styles.customBorderFocus : styles.customBorder}>
                                <span></span>
                            </span>
                            <img src={darkMode ? assets.helpDark : assets.helpLight} className={styles.help} alt="" onMouseOver={()=>{setToolTipActive(true)}} onMouseLeave={()=>{setTimeout(()=>{setToolTipActive(false)},500)}}/>
                            {toolTipActive && <ToolTip closeToolTip={() => { setToolTipActive(false) }} infoBoxText={infoBoxText} />}
                        </span>
                    </span>

                </span>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
};

export default IconChipInput;