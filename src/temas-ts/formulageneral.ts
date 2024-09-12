class FormulaGeneral {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    private calcularDiscriminante(): number {
        return (this.b * this.b) - (4 * this.a * this.c);
    }

    public resolver(): { x1?: number, x2?: number, mensaje?: string } {
        const discriminante = this.calcularDiscriminante();

        if (discriminante < 0) {
            return { mensaje: "No tiene solución real" };
        }

        const sqrtDiscriminante = Math.sqrt(discriminante);
        const x1 = (-this.b + sqrtDiscriminante) / (2 * this.a);
        const x2 = (-this.b - sqrtDiscriminante) / (2 * this.a);

        return { x1, x2 };
    }
}

const formula = new FormulaGeneral(1, -3, 2);
const resultado = formula.resolver();

if (resultado.mensaje) {
    console.log(resultado.mensaje);
} else {
    console.log(`Las soluciones son: raíz 1 = ${resultado.x1}, raíz 2 = ${resultado.x2}`);
}
