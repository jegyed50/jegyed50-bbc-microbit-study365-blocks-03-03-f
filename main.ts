input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let line = 0; line <= 4; line++) {
        for (let column = 0; column <= 4; column++) {
            led.plot(column, line)
            basic.pause(pause_after_plot_LED)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let column = 0; column <= 4; column++) {
        for (let line = 0; line <= 4; line++) {
            led.plot(column, line)
            basic.pause(pause_after_plot_LED)
        }
    }
})
let pause_after_plot_LED = 0
basic.showIcon(IconNames.Heart)
led.setBrightness(255)
pause_after_plot_LED = 300
basic.forever(function () {
	
})
