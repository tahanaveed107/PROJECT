import classes from "./changepassword.module.css";
// import ChangePassworderror from "./chnagepassworderror";
import ChangePasswordForm from "./changepasswordform";

function ChangePassword() {
  return (
    // Page Container
    <div className={classes.container}>
      {/* Modal Window Container */}
      <div className={classes.modalContainer}>
        {/* Page Heading & Detail Section */}
        <div>
          <h1 className={classes.heading}>Change Password</h1>
        </div>
        {/* <LoginError /> */}
        <ChangePasswordForm />
      </div>
    </div>
  );
}

export default ChangePassword;
