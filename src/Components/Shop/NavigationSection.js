import ColorPicker from "../ColorPicker/ColorPicker";
import ToolTip from "../ToolTip/ToolTip";
import NavigationIcon from "./NavigationIcon";
import classes from "./NavigationSection.module.css";

const NavigationSection = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.icons}>
        <ColorPicker />
        <ToolTip text="Add To Favorites">
          <NavigationIcon icon="bi bi-heart" />
        </ToolTip>
        <ToolTip text="Compare Product">
          <NavigationIcon icon="bi bi-shuffle" />
        </ToolTip>
        <ToolTip text="Quick View">
          <NavigationIcon icon="bi bi-search" />
        </ToolTip>
        <ToolTip text="Add To Cart">
          <NavigationIcon icon="bi bi-cart2" />
        </ToolTip>
      </div>
    </div>
  );
};
export default NavigationSection;
