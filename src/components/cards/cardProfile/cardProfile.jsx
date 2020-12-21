import React from "react"
import './cardProfile.scss';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';

export const CardProfile = () => {
    const imageUrl = 'https://picsum.photos/300/200';
    const title = 'NameProfile';
    const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a eros ut massa commodo tristique vitae finibus mi. Interdum et.';

    return (
        <div className="cardProfile">
            <div className="card-container">
                <div className="image-container">
                    <img src={imageUrl} alt="pino!" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{body}</p>
                    </div>
                </div>

                <div class="social-container">
                    <h3>Social Follow</h3>
                    <div className="social-link">
                        <a href="" className="social">
                            <SvgIcon iconName="icon-linkedin" />
                        </a>
                        <a href="" className="social">
                            <SvgIcon iconName="icon-github" />
                        </a>
                        <a href="" className="social">
                            <SvgIcon iconName="icon-gitlab" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}