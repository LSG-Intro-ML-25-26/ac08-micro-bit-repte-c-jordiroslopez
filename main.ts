let dice = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dice) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("helloworld!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    dice = randint(1, 6)
    radio.sendNumber(dice)
    basic.showNumber(dice)
})
basic.forever(function () {
    radio.setGroup(1)
})
