import React from "react";

import { Location } from './Location';
import Contact from './Contact';

function Footer () {
    return (
        <footer className="footer">
            <a name="Footer" alt="location and contact details"/>
            <Location/>
            <Contact/>
        </footer>
  )
}

export { Footer };