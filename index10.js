class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias (objetos) para testar o código
const heroiMago = new Heroi("Gandalf", 2000, "mago");
const heroiGuerreiro = new Heroi("Conan", 35, "guerreiro");
const heroiMonge = new Heroi("Aang", 112, "monge");
const heroiNinja = new Heroi("Hanzo", 28, "ninja");

// Chamando o método atacar para cada herói
heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();
