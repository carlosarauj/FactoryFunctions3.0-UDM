function pessoa(nome,sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        
         //get transforma a função em atributo
        get nomeCompleto(){
            return `${nome} ${sobrenome}`
        },

        say(frase){
            return `ola ${this.nome} ${frase}, `
        },
        peso: peso,
        altura: altura,
        //get transforma a função em atributo
        get imc(){
            let ind = this.peso / (this.altura ** 2)
            return ind.toFixed(2)
        }
    }
}

let p1  = pessoa('Carlos', 'Araújo', 1.7, 80)
console.log(p1.nomeCompleto)
console.log(p1.imc)