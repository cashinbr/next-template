"use client";
import { useReactiveVar } from "@apollo/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { loginModalVar } from "./modals.state";
import { Button, Text } from "@cashinbr/design-system";

export const Example = () => {
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
    <>
      <Button color="purple" onClick={handleOpenModal}>
        <Text color="white" weight="bold">
          Update global state{" "}
        </Text>
      </Button>
      {loginModalStatus.isOpen ? "Modal opened" : "Modal closed"}
      <Button color="purple" onClick={handleNavigate}>
        <Text color="white" weight="bold">
          Navigate to another route
        </Text>
      </Button>
    </>
  );
};
