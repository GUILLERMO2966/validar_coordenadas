function Validar_coordenadas () {
    let Coordenada_Y = 0
    let Coordenada_X = 0
    if ((Coordenada_X <= 4 && Coordenada_Y) <= 4) {
        return true
    }
    return false
}
basic.forever(function () {
    if (!(Validar_coordenadas())) {
        basic.showIcon(IconNames.No)
    }
})
