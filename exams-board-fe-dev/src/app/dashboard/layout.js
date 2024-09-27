import HomeLayout from "./HomeLayout";

export default function DashBoardLayout({ children }) {
  return (
    <HomeLayout children={children} activeTab={'users'} />
  );
}