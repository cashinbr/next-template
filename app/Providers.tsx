"use client";
import { ApolloProvider } from "@apollo/client";
import { theme as CashinDSTheme, Flowbite } from "@cashinbr/design-system";
import { type PropsWithChildren } from "react";
import client from "../apollo-client";

interface ProviderProps extends PropsWithChildren {}
export default function Providers({ children }: ProviderProps) {
  return (
    <ApolloProvider client={client}>
      <Flowbite theme={{ theme: CashinDSTheme }}>{children}</Flowbite>
    </ApolloProvider>
  );
}
