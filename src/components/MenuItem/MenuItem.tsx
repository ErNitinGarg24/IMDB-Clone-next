import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface Menu {
  title: string;
  address: string;
  Icon: IconType;
}

function MenuItem(props: Menu) {
  const { title, address, Icon } = props;
  return (
    <Link href={address} className="menu-item">
      <span>{title}</span>
      <Icon />
    </Link>
  );
}

export default MenuItem;
