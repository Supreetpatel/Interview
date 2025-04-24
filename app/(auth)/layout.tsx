import { isAuthneticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthneticated();
  if (isUserAuthenticated) redirect("/");
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
