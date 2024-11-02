import { Slot } from "expo-router";
import React from "react";
import "../../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return <Slot />;
}
