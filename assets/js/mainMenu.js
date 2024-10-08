console.log('mainMenu.js running');


const menuButtons = [
    {
        id: 'play_Image',
        unpressed: './assets/images/play-unpressed.png',
        pressed: './assets/images/play-pressed.png'
    },
    {
        id: 'pause_Image',
        unpressed: './assets/images/pause-unpressed.png',
        pressed: './assets/images/pause-pressed.png'
    },
    {
        id: 'mute_Image',
        unpressed: './assets/images/sound_on.png',
        pressed: './assets/images/sound_off.png',
        toggle: true,
        isPressed: false
    }
];

menuButtons.forEach (button => {

    const btn = document.getElementById(button.id);

    if (button.toggle) {
        btn.addEventListener('click', () => {
            button.isPressed = !button.isPressed;
            btn.setAttribute('src', button.isPressed ? button.pressed : button.unpressed);
        });
    } else {

    btn.addEventListener('mousedown', () => {
        btn.setAttribute("src", button.pressed);
    });

    btn.addEventListener('mouseup', () => {
        btn.setAttribute("src", button.unpressed);
    });

    btn.addEventListener('mouseout', () => {
        btn.setAttribute("src", button.unpressed);
    });
    }

});