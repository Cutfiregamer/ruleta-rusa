input.onButtonPressed(Button.A, function () {
    if (revolver != pos_bala) {
        revolver += 1
        if (revolver == pos_bala) {
            basic.showIcon(IconNames.Skull)
            music.playMelody("C5 - C5 - C5 - C5 - ", 165)
            basic.showArrow(ArrowNames.East)
        } else {
            music.playTone(784, music.beat(BeatFraction.Half))
            basic.showIcon(IconNames.Heart)
        }
    } else {
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.showArrow(ArrowNames.East)
    }
})
input.onButtonPressed(Button.B, function () {
    pos_bala = randint(1, 6)
    revolver = 0
    music.playTone(247, music.beat(BeatFraction.Whole))
    basic.showArrow(ArrowNames.West)
})
let revolver = 0
let pos_bala = 0
pos_bala = randint(1, 6)
revolver = 0
basic.showArrow(ArrowNames.West)
