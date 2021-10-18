import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export const SocialIcon = (props) => {
    return (
        <div className="social-icon">
                <a href={props.link} target="_blank">
                    <FontAwesomeIcon
                        className="small-text "
                        icon={props.social}
                        size="lg"
                    />
                </a>
        </div>
    )
}