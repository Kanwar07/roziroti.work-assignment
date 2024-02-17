import React from "react";
import navbarstyle from "../navbar/Navbar.module.css";
import { Stack } from "@mui/material";
import AboutButton from "../button/AboutButton";
import ServicesButton from "../button/ServicesButton";
import EventsButton from "../button/EventsButton";
import CenterButton from "../button/CenterButton";
import VenuesButton from "../button/VenuesButton";
import CareersButton from "../button/CareersButton";
import ContactButton from "../button/ContactButton";
import Video from "../video/Video";

function Navbar() {
  return (
    <>
      <Stack direction="row" spacing={2} className={navbarstyle.navbuttons}>
        <Stack direction="row" spacing={2} className={navbarstyle.innernav}>
          <div style={{ padding: "0rem 0rem 0rem 8rem" }}>
            <AboutButton />
          </div>
          <div style={{ padding: "0rem 1rem" }}>
            <ServicesButton />
          </div>
          <div style={{ padding: "0rem 6rem 0rem 0rem" }}>
            <EventsButton />
          </div>
        </Stack>
        <Stack style={{ padding: "1rem 4rem" }}>
          <CenterButton />
        </Stack>
        <Stack direction="row" spacing={2} className={navbarstyle.innernav}>
          <div style={{ padding: "0rem 0rem 0rem 8rem" }}>
            <VenuesButton />
          </div>
          <div style={{ padding: "0rem 1rem" }}>
            <CareersButton />
          </div>
          <div style={{ padding: "0rem 6rem 0rem 0rem" }}>
            <ContactButton />
          </div>
        </Stack>
      </Stack>
      <Video />
    </>
  );
}

export default Navbar;
