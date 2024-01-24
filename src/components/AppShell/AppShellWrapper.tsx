"use client";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

function AppShellWrapper({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      // header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* <AppShell.Header className="flex ">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Header />
      </AppShell.Header> */}

      <AppShell.Navbar>
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      {/* <AppShell.Footer>
        <h1>Footer</h1>
      </AppShell.Footer> */}
    </AppShell>
  );
}

export default AppShellWrapper;
