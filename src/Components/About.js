import React from 'react';
import Style from './About.module.scss';
import classNames from 'classnames';
import {info, colors} from '../Info/Info';
import gif from '../img/about.gif';

export default function About() {
    const iconClass = "fa fa-circle";

    let goals = info.goals;

    function createList() {
        let results = [];
        for(let i = 0; i < goals.length; i ++) {
            let value = goals[i];
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
                    <p><span style={{color: colors[1]}}>{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $</span> cat about{info.firstName.charAt(0).toUpperCase()+info.firstName.slice(1)} </p>
                    <p><span style={{color: colors[1]}}>about{info.firstName.charAt(0).toUpperCase()+info.firstName.slice(1)} <span className={Style.green}>(master)</span> $ </span>
                        {info.bio}
                    </p>
                </div>
            </div>

            <div className = {Style.gif}>
            <img src={gif} width = "1000px" alt="loading..." />
            </div>

            <div id="bot" className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p><span style={{color: colors[1]}}>{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $</span> cd goals</p>
                    <p><span style={{color: colors[1]}}>goals <span className={Style.green}>(master)</span> $</span> ls</p>
                    <ul>
                        {createList()}
                    </ul>
                </div>
            </div>
        </div>
    )
}