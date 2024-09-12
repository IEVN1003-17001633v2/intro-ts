class Figura2D {
    calcularArea(): number {
        throw new Error("Método calcularArea() debe ser implementado en las subclases.");
    }
}

class Rectangulo extends Figura2D {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

class Pentagono extends Figura2D {
    private lado: number;
    private apotema: number;

    constructor(lado: number, apotema: number) {
        super();
        this.lado = lado;
        this.apotema = apotema;
    }

    calcularArea(): number {
        const perimetro = this.lado * 5;
        return (perimetro * this.apotema) / 2;
    }
}

class Circunferencia extends Figura2D {
    private radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Figura3D extends Figura2D {
    calcularVolumen(): number {
        throw new Error("Método calcularVolumen() debe ser implementado en las subclases.");
    }
}

class PrismaRectangular extends Rectangulo {
    private profundidad: number;

    constructor(base: number, altura: number, profundidad: number) {
        super(base, altura);
        this.profundidad = profundidad;
    }

    calcularVolumen(): number {
        return this.calcularArea() * this.profundidad;
    }
}

class PrismaPentagonal extends Pentagono {
    private altura: number;

    constructor(lado: number, apotema: number, altura: number) {
        super(lado, apotema);
        this.altura = altura;
    }

    calcularVolumen(): number {
        return this.calcularArea() * this.altura;
    }
}

class Cilindro extends Circunferencia {
    private altura: number;

    constructor(radio: number, altura: number) {
        super(radio);
        this.altura = altura;
    }

    calcularVolumen(): number {
        return this.calcularArea() * this.altura;
    }
}

const rectangulo = new Rectangulo(5, 10);
console.log(`Área del rectángulo: ${rectangulo.calcularArea()}`);

const pentagono = new Pentagono(6, 5);
console.log(`Área del pentágono: ${pentagono.calcularArea()}`);

const circunferencia = new Circunferencia(7);
console.log(`Área de la circunferencia: ${circunferencia.calcularArea()}`);

const prismaRectangular = new PrismaRectangular(5, 10, 15);
console.log(`Volumen del prisma rectangular: ${prismaRectangular.calcularVolumen()}`);

const prismaPentagonal = new PrismaPentagonal(6, 5, 10);
console.log(`Volumen del prisma pentagonal: ${prismaPentagonal.calcularVolumen()}`);

const cilindro = new Cilindro(7, 10);
console.log(`Volumen del cilindro: ${cilindro.calcularVolumen()}`);
