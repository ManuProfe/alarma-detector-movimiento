input.onButtonPressed(Button.A, function () {
    basic.showString("Alarma conectada en 5 seg")
    basic.pause(5000)
    conectada = 1
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    conectada = 0
    basic.showString("Alarma desconectada")
})
let conectada = 0
basic.clearScreen()
conectada = 0
basic.forever(function () {
    if (conectada == 1) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.ForeverInBackground)
            basic.showString("Intruso, llamando a la policía")
        }
    }
})
