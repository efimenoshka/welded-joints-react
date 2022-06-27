export function getHeaderName(name) {
    switch (name) {
        case 's':
            return 'S'
        case 's1':
            return `S = S₁`
        case 'bNomin':
            return 'b номин.'
        case 'bOtkl':
            return 'b пред. откл.'
        case 'b1':
            return 'b ± 1'
        case 'e':
            return 'e, не более'
        case 'e1':
            return 'e₁, не более'
        case 'e1_2':
            return 'e₁ ± 2'
        case 'eNomin':
            return 'e номин.'
        case 'eOtkl':
            return 'e пред. откл.'
        case 'gNomin':
            return 'g номин.'
        case 'gOtkl':
            return 'g пред. откл'
        case 'g_1':
            return 'g ± 1'
        case 'h':
            return 'h ± 1'
        case 'f':
            return 'f ± 1'
        case 'name':
            return 'Элементы конструкций'
        case 'koef':
            return 'Коэффициенты условий работы Yc'
        default:
            return name
    }
}