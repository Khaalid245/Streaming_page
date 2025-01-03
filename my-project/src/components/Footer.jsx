import React from "react";
import { FOOTER_CONTENT } from "../constants";

function Footer() {
  if (!Array.isArray(FOOTER_CONTENT.sections)) {
    console.error("FOOTER_CONTENT.sections must be an array.");
    return null;
  }

  return (
    <footer className="mt-20 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 border-neutral-800">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-28">
          {FOOTER_CONTENT.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-medium mb-6">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="hover:text-white">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-neutral-800 my-12 pt-8 text-sm text-neutral-500">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Platforms Text */}
            <div className="text-center md:text-left">
              <p>{FOOTER_CONTENT.platformsText || "Platforms information unavailable"}</p>
            </div>
            {/* Copyright Text */}
            <div className="text-center md:text-right">
              <p>{FOOTER_CONTENT.copyrightText || "Copyright information unavailable"}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
