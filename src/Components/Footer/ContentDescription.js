import classes from "./ContentDescription.module.css";

const ContentDescription = () => {
  return (
    <div className={classes.column}>
      <img src="/img/kenkatablue.jpg" className={classes.img} />
      <div className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.
      </div>
      <div className={classes.follow}>
        Follow us
        <div className={classes.decorationcontainer}>
          <hr className={classes.decoration} />
        </div>
      </div>
      <img src="/img/placeholderblue.png" />
    </div>
  );
};

export default ContentDescription;
