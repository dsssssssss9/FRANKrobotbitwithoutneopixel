radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    colorbit_51bit2 = colorbit.create(DigitalPin.P1, 25, BitColorMode.RGB)
    whaleysans.showNumber(67)
    CBit_Display()
    basic.pause(1000)
    basic.clearScreen()
    colorbit_51bit.clear()
})
input.onButtonPressed(Button.B, function () {
    colorbit_51bit.showColorIcon(ColorIcon.Ghost, colorbit.colors(BitColors.Red))
    basic.pause(1000)
    for (let index = 0; index < 8; index++) {
        colorbit_51bit.shift(1)
        colorbit_51bit.showIntColor(randint(0, 99), colorbit.colors(BitColors.Blue))
        colorbit_51bit.showRainbow(1, 360)
        basic.pause(1000)
        colorbit_51bit.clear()
        basic.pause(1000)
    }
})
// This function will "copy" the display om a Micro:Bit to a ColorBit
function CBit_Display () {
    for (let loop1 = 0; loop1 <= 4; loop1++) {
        for (let loop2 = 0; loop2 <= 4; loop2++) {
            if (led.point(loop1, loop2)) {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.White))
            } else {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Black))
            }
        }
    }
}
let colorbit_51bit2: colorbit.Strip = null
let colorbit_51bit: colorbit.Strip = null
radio.setGroup(1)
radio.setTransmitPower(7)
colorbit_51bit = colorbit.create(DigitalPin.P1, 25, BitColorMode.RGB)
colorbit_51bit.showStringColor("Hi", colorbit.colors(BitColors.Green))
basic.pause(200)
colorbit_51bit.clear()
basic.forever(function () {
	
})
basic.forever(function () {
	
})
