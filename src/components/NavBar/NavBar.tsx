import {
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
} from "@mantine/core";
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSearch,
  IconPlus,
  IconTerminal2,
  IconBell,
  IconGradienter
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
//   import { UserButton } from '../UserButton/UserButton';
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import classes from "./NavBar.module.css";

const links = [
  { icon: IconTerminal2, label: "Prompt", link: "/" }, // notifications: 3
  {
    icon: IconBell,
    label: "Notifications",
    notifications: 4,
    link: "/notifications",
  },
  { icon: IconGradienter, label: "Zen", link: "/zen" },
];

const collections = [
  { emoji: "👍", label: "Sales" },
  { emoji: "🚚", label: "Deliveries" },
  { emoji: "💸", label: "Discounts" },
  { emoji: "💰", label: "Profits" },
  { emoji: "✨", label: "Reports" },
  { emoji: "🛒", label: "Orders" },
  { emoji: "📅", label: "Events" },
  { emoji: "🙈", label: "Debts" },
  { emoji: "💁‍♀️", label: "Customers" },
];

export default function NavBar() {
  const mainLinks = links.map((link, idx) => (
    <Link
      href={link.link}
      key={idx}
      style={{
        textDecoration: "none",
      }}
    >
      <UnstyledButton
        key={link.label}
        className={classes.mainLink}
        style={{ paddingBottom: "10px" }}
      >
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span>{link.label}</span>
        </div>
        {link.notifications && (
          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        {/* <UserButton /> */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image className="mr-4" height={35} width={35} alt="logo" src="/logo.png" />
          <h3>Curieo</h3>
          </div>
          <ThemeToggler />
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>
    </nav>
  );
}
