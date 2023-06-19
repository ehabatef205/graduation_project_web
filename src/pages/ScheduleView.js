
import "../component/ScheduleView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScheduleElement from "./statics/SceduleElement";

import Bars from './statics/Bars'
const ScheduleView = () => {
  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="divrootSch">
     <Bars></Bars>

      <div className="container3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">08:00 am</th>
              <th scope="col">10:00 am</th>
              <th scope="col">12:00 pm</th>
              <th scope="col">02:00 pm</th>
              <th scope="col">04:00 pm</th>
              <th scope="col">06:00 pm</th>
              <th scope="col">08:00 pm</th>
            </tr>
          </thead>
          <tbody>
            <ScheduleElement/>
          </tbody>
        </table>
        <button type="submit" className="button10" onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
};

export default ScheduleView;
