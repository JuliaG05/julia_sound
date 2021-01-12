while True:
    print("sound_level:" + input.sound_level())
    if input.sound_level() <= 70:
        light.set_all(light.rgb(0,0,255))
    elif input.sound_level():
        light.clear()
        
