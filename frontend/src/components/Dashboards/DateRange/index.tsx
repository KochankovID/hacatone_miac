import 'react-google-flight-datepicker/dist/main.css';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import { getPeriodMeasurmentsAction } from 'store/PacientDashboard/actions';
import { useDispatch } from 'react-redux';

const DateRange = () => {
  const dispatch = useDispatch();
  const onDateChange = (ranstartDate: any, endDateges: any) => {
    if (ranstartDate && endDateges) {
      dispatch(
        getPeriodMeasurmentsAction({
          id: 140,
          start: ranstartDate,
          end: endDateges,
        })
      );
    }
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  return (
    <RangeDatePicker
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
