import 'react-google-flight-datepicker/dist/main.css';
import { RangeDatePicker } from 'react-google-flight-datepicker';

const DateRange = () => {
  const onDateChange = (ranstartDate: any, endDateges: any) => {
    console.log(ranstartDate, endDateges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  return (
    <RangeDatePicker
      startDate={new Date()}
      endDate={new Date()}
      onChange={(startDate: any, endDate: any) =>
        onDateChange(startDate, endDate)
      }
      minDate={new Date(1900, 0, 1)}
      maxDate={new Date(2100, 0, 1)}
      dateFormat="D MM YYYY"
      monthFormat="MMM YYYY"
      startDatePlaceholder="Start Date"
      endDatePlaceholder="End Date"
      disabled={false}
      className="my-own-class-name"
      startWeekDay="monday"
    />
  );
};

export default DateRange;
