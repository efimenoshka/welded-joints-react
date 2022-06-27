// Расчетная длина шва
export function lwCalc(lwFact, t) {
    return lwFact - (2 * t);
}

// Сопротивление, в зависимости от предела прочности
export function RwyCalc(N, Ry) {
    return N <= 0 ? Ry : 0.85 * Ry;
}

// Расчет на центральное растяжение/сжатие
export function sigmaCalc(N, t, lw) {
    return (Math.abs(N) * 1000 / (t / 1000 * lw    / 1000)) / 1000000;
}

// Коэффициент загруженности
export function kWorkloadCalc(N, t, lw, Rwy, Yc) {
    return (Math.abs(N) * 1000 / (t / 1000 * lw / 1000 * Rwy * 1000000 * Yc)) * 100;
}

// Предел прочности
export function limitCalc(Rwy, Yc) {
    return Rwy * Yc;
}

// Оптиамальная сила
export function optNCalc(limit, t, lw) {
    return (0.7 * limit * t * lw) / 1000;
}