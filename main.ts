while (true) {
    console.log("sound_level:" + input.soundLevel())
    if (input.soundLevel() <= 70) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.soundLevel()) {
        light.clear()
    }
    
}
