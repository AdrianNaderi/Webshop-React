import ToolTip from "../ToolTip/ToolTip";
import NavigationIcon from "./NavigationIcon";
import classes from "./NavigationSection.module.css";

const NavigationSection = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.icons}>
        <ToolTip text="Another Text">
          <NavigationIcon icon="bi bi-heart" />
        </ToolTip>
        <NavigationIcon icon="bi bi-shuffle" />
        <NavigationIcon icon="bi bi-search" />
        <NavigationIcon icon="bi bi-cart2" />
      </div>
    </div>
  );
};
export default NavigationSection;
