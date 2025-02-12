"use client";
import classes from "../page.module.css";

import Image from "next/image";
import logoIcon from "@/public/assets/logo.svg";
import homeIcon from "@/public/assets/icons/home.svg";
import usersIcon from "@/public/assets/icons/users.svg";
import settingsIcon from "@/public/assets/icons/settings.svg";
import hamburgerIcon from "@/public/assets/icons/hamburger.svg";
import profileIcon from "@/public/assets/icons/profile.svg";
import bellIcon from "@/public/assets/icons/bell.svg";
import Link from "next/link";
import { useRef, useState } from "react";

export default function HomeLayout({ children, activeTab }) {
  const [activeItem, setActiveItem] = useState(activeTab);
  const [showNav, setShowNav] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navRef = useRef(null);
  const mainRef = useRef(null);

  function hideNavHandler() {
    if (!showNav) {
      navRef.current.style.display = "none";
      mainRef.current.style.width = "100%";
    } else {
      navRef.current.style.display = "flex";
      mainRef.current.style.width = "80%";
    }
    setShowNav(!showNav);
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.nav} ref={navRef}>
          <div className={classes.navBody}>
            <div className={classes.logo}>
              <Image src={logoIcon} />
              <h1>ExamBoard</h1>
            </div>
            <ul className={classes.ul}>
              <li
                className={`${classes.li} ${
                  activeItem === "home" ? classes.active : ""
                }`}
              >
                <Image src={homeIcon} alt="Home" />
                <Link href="/" onClick={() => setActiveItem("home")}>
                  Home
                </Link>
              </li>
              <li
                className={`${classes.li} ${
                  activeItem === "users" ? classes.active : ""
                }`}
              >
                <Image src={usersIcon} alt="Users" />
                <Link
                  href="/dashboard/users"
                  onClick={() => setActiveItem("users")}
                >
                  Users
                </Link>
              </li>
            </ul>
          </div>

          <div className={classes.settingsContanier}>
            <div
              className={`${classes.settings} ${
                activeItem === "settings" ? classes.active : ""
              }`}
            >
              <Image src={settingsIcon} />
              <Link href="/setting" onClick={() => setActiveItem("settings")}>
                Settings
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.main} ref={mainRef}>
          <header className={classes.header}>
            <Image src={hamburgerIcon} onClick={hideNavHandler} />
            <div className={classes.profilers}>
              <Image src={bellIcon} className={classes.rightPadding} />
              {showProfileDropdown && (
                <p className={classes.username}>User's Name</p>
              )}
              <div className={classes.userIcon}>
                {/* <Link href="/auth/login"> */}
                <Image
                  src={profileIcon}
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                />
                {/* </Link> */}
              </div>
            </div>
          </header>
          {showProfileDropdown && (
            <div className={classes.profileDropdown}>
              <Link className={classes.profileList} href="/user/changepassword">
                Change Password
              </Link>
              <Link
                className={`${classes.profileList} ${classes.topBorder}`}
                href="/auth/login"
              >
                Log out
              </Link>
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
