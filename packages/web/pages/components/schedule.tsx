import { FunctionComponent } from "react";
import { SCHEDULE } from "../../constants";

export const ScheduleSection: FunctionComponent = () => {
  //TODO Make this table work
  return (
    <table>
      <tr>
        <th>Time</th>
        <th>Details</th>
      </tr>
      {SCHEDULE.forEach(({ time, description }) => {
        <tr>
          <td>{time}</td>
          <td>{description}</td>
        </tr>;
      })}
    </table>
  );
};
