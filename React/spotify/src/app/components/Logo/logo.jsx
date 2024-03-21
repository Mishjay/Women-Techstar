import React from 'react';
import SpotifyWhite from '../../assets/images/spotify-white.png';
import SpotifyBlack from '../../assets/images/spotify-black.png';

import style from "./style.module.css"

export function Logo(props) {
    const myImage = props.useWhite ? SpotifyWhite : SpotifyBlack;

    return (
        <a href='#/dashboard' className={style.logo}>
            <img src={myImage} alt={props.useWhite ? "Spotify White" : "Spotify Black"} />
        </a>
    );
}

export function NavigationLogoText() {
    return (
        <h1>spotify</h1>
    );
}