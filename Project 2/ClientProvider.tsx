"use client"
import React from "react";
import { SessionProvider } from "next-auth/react";
type Props = {};

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
};

export default ClientProvider;
