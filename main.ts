input.onButtonPressed(Button.B, function () {
    taste_b_gedrueckt += 1
})
input.onButtonPressed(Button.A, function () {
    taste_a_gedrueckt += 1
})
let taste_a_gedrueckt = 0
let taste_b_gedrueckt = 0
basic.forever(function () {
    if (taste_a_gedrueckt == 0 && taste_b_gedrueckt == 2) {
        basic.showNumber(2)
    }
})
