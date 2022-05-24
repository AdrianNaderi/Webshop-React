import { useState } from "react";
import { colores } from "../../SD/placeholders";
import classes from "./ColorPicker.module.css";

const ColorPicker = (props) => {
  const [selectedColor, setSelectedColor] = useState("red"); //if product dont have any colors, show grey. Color Picker. => No Colors...
  const [isActive, setIsActive] = useState(false);
  const content = colores.map((color) => <div className={classes.iconselection} style={{ backgroundColor: color.color }} onClick={() => setSelectedColor(color.color)}></div>);
  return (
    <div className={`${classes.icon} ${classes.main}`} style={{ backgroundColor: selectedColor }} onClick={() => setIsActive(true)}>
      {isActive && <div className={classes.picker}>{content}</div>}
    </div>
  );
};

export default ColorPicker;
