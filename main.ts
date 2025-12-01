let dice = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dice) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
    radio.sendNumber(dice)
    basic.showNumber(dice)
})
basic.forever(function () {
    radio.setGroup(1)
})
