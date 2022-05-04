input.onButtonPressed(Button.A, function () {
    sb.setServoPosition(sb.servo(SBServo.ServoA), 0)
})
input.onButtonPressed(Button.B, function () {
    sb.setServoPosition(sb.servo(SBServo.ServoA), 55)
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
	
})
