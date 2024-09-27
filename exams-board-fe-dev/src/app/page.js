import HomeLayout from "./dashboard/layout";
import Link from "next/link";

export default function DashBoardPage() {
  return (
    <HomeLayout activeTab={"home"}>
      <main>
        <Link href="./auth/forgotpassword">ForgotPassword</Link>
      </main>
    </HomeLayout>
  );
}
