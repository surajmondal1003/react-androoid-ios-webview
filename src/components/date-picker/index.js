import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
export default function DatePickerCustom(props) {
  const [selectedValue, setSelectedDate] = React.useState(new Date(props.date));
  React.useEffect(() => {
    props.onDateChange(selectedValue);
  }, [props.date])
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          fullWidth
          style={{ margin: '0 0 20px 0' }}
          // id="date-picker-dialog"
          label="Date of Birth"
          format="yyyy-MM-dd"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          value={selectedValue}
          // defaultValue={defVal  }
          onChange={(x, y) => { 
            setSelectedDate(x); 
            const fulldate=`${x.getFullYear()}-${x.getMonth() + 1}-${x.getDate()}`
            props.onDateChange(fulldate) 
          }
          }
        />
      </MuiPickersUtilsProvider>
    </>
  );
}
