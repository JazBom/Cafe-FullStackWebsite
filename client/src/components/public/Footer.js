import React from "react";

import { Location } from './Location';
import Contact from './Contact';

function Footer () {
    return (
        <footer className="footer">
            <a name="Footer" />
            <Location/>
            <Contact/>
        </footer>
  )
}

export { Footer };