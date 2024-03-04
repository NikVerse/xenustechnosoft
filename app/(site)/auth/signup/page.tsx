import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - Xenus",
  description: "This is Sign Up page for Xenus",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
