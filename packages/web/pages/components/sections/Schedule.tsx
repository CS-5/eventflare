import { FunctionComponent } from "react";
import { SCHEDULE } from "../../../constants";

/*

This section is a table of times/dates and details, set in constants.ts

*/

const ScheduleSection: FunctionComponent = () => {
  return (
    <table className="w-2/3 mx-auto border border-collapse">
      <thead>
        <tr className="border">
          <th>Time</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {SCHEDULE.map((row) => (
          <tr className="border">
            <td>{row.time}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleSection;
