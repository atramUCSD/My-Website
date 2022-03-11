import React from 'react';
import Style from './Resume.module.scss';
import classNames from 'classnames';
import {info, colors} from '../Info/Info';
import gif from '../img/about.gif';

export default function About() {
    const iconClass = "fa fa-circle";

    let hobbies = info.hobbies;

    function createList() {
        let results = [];
        for(let i = 0; i < hobbies.length; i ++) {
            let value = hobbies[i];
            results.push(
                <li><span aria-label="emoji" role="img" className={Style.emoji}>{value[0]}</span> {value[1]}</li>
            )
        }
        return results;
    }
    return (
        <div className={Style.about}>
            <div className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p><span style={{color: colors[1]}}>{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $</span> cat about{info.firstName.toLowerCase()} </p>
                    <p><span style={{color: colors[1]}}>about{info.firstName.toLowerCase()} <span className={Style.green}>(master)</span> $ </span>
                        {info.bio}
                    </p>
                </div>
            </div>

            <div className = {Style.figma}>
            <iframe width="80%" height="1700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FefGKO99tpIGBWXzkEfihnY%2FUX-Designer-Resume-Template-(Community)%3Fpage-id%3D802%253A72%26node-id%3D802%253A77%26viewport%3D418%252C48%252C0.58%26scaling%3Dcontain" allowfullscreen></iframe>
            </div>

            <div className = {Style.pdf}>
                <a href="https://drive.google.com/file/d/1Sa_39mNTDBAIEpVHwMuXA18gFlzD1N-3/view?usp=sharing" target="blank">Click Here to view Resume</a>
            </div>

            <div className = {Style.pdf}>
                <a href="https://drive.google.com/file/d/1Sa_39mNTDBAIEpVHwMuXA18gFlzD1N-3/view?usp=sharing" target="blank">Click Here to view Text-Based Resume</a>
            </div>

            <div id="bot" className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p><span style={{color: colors[1]}}>{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $</span> cd hobbies/interests</p>
                    <p><span style={{color: colors[1]}}>hobbies/interests <span className={Style.green}>(master)</span> $</span> ls</p>
                    <ul>
                        {createList()}
                    </ul>
                </div>
            </div>
        </div>
    )
}