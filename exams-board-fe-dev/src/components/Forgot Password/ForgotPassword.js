import email from "../../public/assets/email.svg";
import classes from "./ForgotPassword.module.css";
export default function forgotPassword() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>Forgot Password</h1>
      </div>

      <div className={classes.inputFields}>
        <p>
          Enter User's Email <span>*</span>
        </p>
        <div className={classes.inputandicon}>
          <img src={email.src} />
          <input
            type="email"
            required
            validate
            placeholder="example@something.com"
          ></input>
        </div>
      </div>

      <div className={classes.formButton}>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
