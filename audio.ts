export function playMp3(file: string) {
    if(window.Audio) {
        const audio = new Audio(file);
        audio.play();
    }
}
