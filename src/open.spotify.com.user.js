// ==UserScript==
// @name                Sitext: open.spotify.com
// @namespace           https://github.com/Cologler/
// @version             0.2
// @description         try to take over the world!
// @author              Cologler (skyoflw@gmail.com)
// @match               https://open.spotify.com/*
// @grant               GM_registerMenuCommand
// @grant               GM_download
// @noframes
// @license             MIT
// ==/UserScript==

// hosting on:

// let type script auto-completion work.
(function() { function require(){}; require("greasemonkey"); })();

(function() {
    'use strict';

    GM_registerMenuCommand('download cover art', () => {
        const bgi = document.querySelectorAll('.cover-art-image')[0].style.backgroundImage;
        function url(v) {
            return v;
        }
        const bgiurl = eval(bgi);
        const artist = document.querySelector('.mo-meta').textContent;
        const album = document.querySelector('.mo-info-name').textContent;
        const fileName = `${artist} - ${album}.jpg`;
        GM_download(bgiurl, fileName);
    });

    GM_registerMenuCommand('log tracks name', () => {
        const tracks = Array.from(document.querySelectorAll('.tracklist-name')).map(z => z.textContent);
        console.log(tracks);
    });
})();
