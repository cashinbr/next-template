"use client";
import { theme as CashinDSTheme, Flowbite } from "@cashinbr/design-system";
import { type PropsWithChildren } from "react";

interface DefaultThemeProps extends PropsWithChildren {}
export default function DefaultTheme({ children }: DefaultThemeProps) {
  return <Flowbite theme={{ theme: CashinDSTheme }}>{children}</Flowbite>;
}
