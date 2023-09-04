"use client";
import { useReactiveVar } from "@apollo/client";
import { loginModalVar } from "../modals.state";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const loginModalStatus = useReactiveVar(loginModalVar);
  const router = useRouter();
  const pathName = usePathname();
  const handleOpenModal = () => {
    loginModalVar({ ...loginModalStatus, isOpen: !loginModalStatus.isOpen });
  };
  const handleNavigate = () => {
    const redirecturl = pathName.includes("example-route")
      ? "/"
      : "example-route";
    router.push(redirecturl);
  };
  useEffect(() => {
    console.log(loginModalStatus);
  }, [loginModalStatus]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleOpenModal}>Update global state </button>
      {loginModalStatus.isOpen ? "Modal opened" : "Modal closed"}
      <button onClick={handleNavigate}>Navigate to another route</button>
    </main>
  );
}
