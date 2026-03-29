import { Redirect, Slot } from "expo-router";
import React from "react";

export default function Layout() {
  const isAuthenticated: boolean = true;
  if (!isAuthenticated) return <Redirect href="/(auth)/sing-in/" />;
  return <Slot />;
}
