import React, {useEffect} from "react";
import ruLocale from "date-fns/locale/ru";
import {isEqual} from "lodash";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {TextField, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: "100%",
    },
}));

const DatePickerField = ({
                             dataField,
                             newFieldStateAcquired,
                             startingValue
                         }) => {

    const classes = useStyles();

    const [value, setValue] = React.useState(new Date().toDateString());



    useEffect(() => {
        const isDateSame = isEqual(value, startingValue);
        if (isDateSame) {
            return;
        }

        const timeOutId = setTimeout(() => {
            newFieldStateAcquired(value);
        }, 900)

        return () => clearTimeout(timeOutId);
    }, [value]);


    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Дата выхода"
                type="date"
                defaultValue={value}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    )
        ;
};

DatePickerField.defaultProps = {
    dataField: {name: "Дата выхода"},
    newFieldStateAcquired: (value) => {

    },
    startingValue: "",
}


export default DatePickerField;
