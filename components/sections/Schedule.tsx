import { FunctionComponent } from "react";

/*

This section is a table of times/dates and details, set in constants.ts

*/

interface Props {
  schedule: {
    time: string;
    description: string;
  }[];
}

const ScheduleSection: FunctionComponent<Props> = ({ schedule }) => {
  return (
    <table className="w-auto md:w-5/6 mx-auto border border-collapse border-black dark:border-white">
      <thead>
        <tr className="border">
          <th className="border">Time</th>
          <th className="border">Details</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((row, index) => (
          <tr className="border" key={index}>
            <td className="border pl-3">{row.time}</td>
            <td className="border pl-3">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleSection;
