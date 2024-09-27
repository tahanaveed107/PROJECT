"use client";

import classes from "./changepasswordformorm.module.css";
import PasswordIcon from "@/public/assets/password.svg";
import Image from "next/image";
import eyeCloseIcon from "@/public/assets/eyeClose.svg";
import eyeOpenIcon from "@/public/assets/eyeOpen.svg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function ChangePasswordForm() {
  const [isCurrentPasswordShowing, setIsCurrentPasswordShowing] =
    useState(false);
  const [isNewPasswordShowing, setIsNewPasswordShowing] = useState(false);
  const [isConfirmPasswordShowing, setIsConfirmPasswordShowing] =
    useState(false);

  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  function toggleCurrentPassword() {
    setIsCurrentPasswordShowing((prev) => !prev);
  }

  function toggleNewPassword() {
    setIsNewPasswordShowing((prev) => !prev);
  }

  function toggleConfirmPassword() {
    setIsConfirmPasswordShowing((prev) => !prev);
  }

  useEffect(() => {
    if (currentPasswordRef.current) {
      currentPasswordRef.current.type = isCurrentPasswordShowing
        ? "text"
        : "password";
    }
    if (newPasswordRef.current) {
      newPasswordRef.current.type = isNewPasswordShowing ? "text" : "password";
    }
    if (confirmPasswordRef.current) {
      confirmPasswordRef.current.type = isConfirmPasswordShowing
        ? "text"
        : "password";
    }
  }, [
    isCurrentPasswordShowing,
    isNewPasswordShowing,
    isConfirmPasswordShowing,
  ]);

  return (
    <form className={classes.form}>
      <div>
        {/* 1st */}
        <div>
          <label className={classes.label}>
            Current Password <span className={classes.required}>*</span>
          </label>
          <div className={classes.inputsContainer}>
            <Image className={classes.inputsIcon} />
            <input
              ref={currentPasswordRef}
              className={classes.input}
              type="password"
              required
              placeholder="Enter current password"
            />
            <Image
              alt={
                isCurrentPasswordShowing
                  ? "Hide Current Password"
                  : "Show Current Password"
              }
              onClick={toggleCurrentPassword}
              src={isCurrentPasswordShowing ? eyeOpenIcon : eyeCloseIcon}
              className={`${classes.inputsIcon} ${classes.tooglePassword}`}
            />
          </div>
        </div>

        {/* 2nd */}
        <div>
          <label className={classes.label}>
            New Password <span className={classes.required}>*</span>
          </label>
          <div className={classes.inputsContainer}>
            <Image className={classes.inputsIcon} />
            <input
              ref={newPasswordRef}
              className={classes.input}
              type="password"
              required
              placeholder="Enter new password"
            />
            <Image
              alt={
                isNewPasswordShowing ? "Hide New Password" : "Show New Password"
              }
              onClick={toggleNewPassword}
              src={isNewPasswordShowing ? eyeOpenIcon : eyeCloseIcon}
              className={`${classes.inputsIcon} ${classes.tooglePassword}`}
            />
          </div>
        </div>

        {/* 3rd */}
        <div>
          <label className={classes.label}>
            Confirm Password <span className={classes.required}>*</span>
          </label>
          <div className={classes.inputsContainer}>
            <Image className={classes.inputsIcon} />
            <input
              ref={confirmPasswordRef}
              className={classes.input}
              type="password"
              required
              placeholder="Confirm new password"
            />
            <Image
              alt={
                isConfirmPasswordShowing
                  ? "Hide Confirm Password"
                  : "Show Confirm Password"
              }
              onClick={toggleConfirmPassword}
              src={isConfirmPasswordShowing ? eyeOpenIcon : eyeCloseIcon}
              className={`${classes.inputsIcon} ${classes.tooglePassword}`}
            />
          </div>
        </div>
      </div>

      {/* <Link className={classes.btn} href="/auth/login">
        Change Password
      </Link> */}

      <button type="submit" className={classes.btn}>
        Change Password
      </button>
    </form>
  );
}

export default ChangePasswordForm;
