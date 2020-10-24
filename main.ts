input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.trunc(gatorEnvironment.getMeasurement(measurementType.degreesF)))
    basic.showString("°")
})
input.onButtonPressed(Button.AB, function () {
    moisture = gatorSoil.moisture(AnalogPin.P2, GatorSoilType.Moisture, DigitalPin.P1)
    led.plotBarGraph(
    moisture,
    1
    )
    if (moisture < 0.5) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(gatorEnvironment.getMeasurement(measurementType.TVOC))
})
let moisture = 0
basic.showString("SOIL")
moisture = 1
gatorEnvironment.beginEnvironment()
basic.forever(function () {
	
})
