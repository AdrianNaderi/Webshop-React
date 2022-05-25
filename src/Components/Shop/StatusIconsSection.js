import { statuses } from "../../SD/placeholders";
import StatusIcon from "./StatusIcon";
import classes from "./StatusIconsSection.module.css";

const StatusIconSection = (props) => {
  const content = statuses.map((status) => <StatusIcon key={status.status} status={status.status} value={status.value} />);

  return (
    <div className={classes.container}>
      <div className={classes.icons}>{content}</div>
    </div>
  );
};
export default StatusIconSection;
