datalogger.deleteLog()
basic.forever(function () {
	
})
loops.everyInterval(3000, function () {
    datalogger.log(
    datalogger.createCV("tmp", input.temperature()),
    datalogger.createCV("light", input.lightLevel()),
    datalogger.createCV("compass", input.compassHeading())
    )
})
