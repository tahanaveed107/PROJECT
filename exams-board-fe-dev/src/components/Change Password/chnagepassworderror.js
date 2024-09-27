import classes from "./changepassworderror.module.css";

function ChangePassworderror() {
  return (
    <div className={classes.div}>
      <p className={classes.error}>Invalid username or password!</p>
    </div>
  );
}

export default ChangePassworderror;
