import './Calendar.scss';
import React, { Fragment, useState } from 'react';
import { DatePicker } from '@material-ui/pickers';

const Calendar = (props) => {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Fragment>
            <DatePicker
                className="navbar-selects"
                disableToolbar
                variant="inline"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </Fragment>
    );
};

export default Calendar;
