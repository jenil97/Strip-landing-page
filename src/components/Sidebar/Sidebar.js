import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import sublinks from "../../data";
import "./Sidebar.css";

const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebar ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks &&
            sublinks.map((item, index) => {
              const { links, page } = item;
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {links.map((link, index) => {
                      const { url, label, icon } = link;
                      return (
                        <a key={index} href={url}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
