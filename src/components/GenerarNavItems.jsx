import React from "react";

export const navItems = ["Collections", "Men", "Women", "About", "Contact"];

export function GenerarNavItems() {
  return navItems.map((item, index) => (
    <li
      key={index}
      className="cursor-pointer pb-4 border-b-2 border-transparent hover:text-Orange hover:border-Orange transition-colors"
    >
      <a href="">{item}</a>
    </li>
  ));
}
