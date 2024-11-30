import type { PlasmoCSConfig } from "plasmo"

const INJECTED_ELEMENT_ID = '#secondary.style-scope.ytd-watch-flexy'

export const config: PlasmoCSConfig = {
    matches: [
        "https://www.youtube.com/watch*"
    ]
}




window.addEventListener('load', () => {
    console.log('Plasmo main script loaded')

    document.body.style.backgroundColor = 'red'
})