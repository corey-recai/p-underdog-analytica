import {Link} from "react-router-dom";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {SocialIcon} from "./socialIcon";

export const EmailBtn = (mailto) => {
    return (
        <Link
            to='#'
            // onClick={(e) => {
            //     window.location = mailto;
            //     e.preventDefault();
            // }}
        >
            <SocialIcon social={faEnvelope} link="#"/>
        </Link>
    )
}