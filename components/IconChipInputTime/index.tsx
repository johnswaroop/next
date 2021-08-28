import { FC, useState } from 'react';
import assets from '../../assets';
import styles from './iconChipInputTime.module.scss'
import { DateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import { MuiThemeProvider, createTheme, } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
interface Props {
    icon?: string,
    title: string,
    value: string,
}
const theme = createTheme({
    palette: {
        primary: { main: '#99EFDA' },
        secondary: { main: '#008A64' }
    },
});

const IconChipInput: FC<Props> = ({ title, value, icon }) => {

    const [inFocus, setInFocus] = useState<boolean>(false);
    const [selectedDate, handleDateChange] = useState(null);
    const handleFocus = () => {
        setInFocus(f => !f);
    }



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
                            {/* <span className={inFocus ? styles.customBorderFocus : styles.customBorder}>
                                <span></span>
                            </span> */}
                        </span>
                    </span>

                </span>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
};

export default IconChipInput;