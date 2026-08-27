import petshop from '../repository/cachorro.js'

class ServiceCachorro{

Buscar  () {
    return petshop
}

//////////////////////////////////////////
Detalhe (id) { 

    if (!id) {
        throw new Error("Favor informar id ")
    }

    const cachorro = petshop.find(it => it.id ===id)

    if (!cachorro){
        throw new Error ('ID do cachorro não encontrado')
    }
    return cachorro
}
/////////////////////////////////

Criar   (id, nome, dono, idade, qtdeBrinquedos) {

    if (!id || !nome || !dono || !idade || !qtdeBrinquedos ){
        throw new Error("favor informar todos os dados ")
}

    petshop.push({ id, nome, dono, idade, qtdeBrinquedos})

    return {nome, dono, idade, qtdeBrinquedos}
}
/////////////////////////////////////////////////

Alterar () {}

//////////////////////////////////////////////

Deletar (id) {

    if (!id) {
        throw new Error ("Favor informar todos os dados ")
    }

    petshop.splice(it=> it.id ===id,1 )

    return id
    
    }
}
export default  new ServiceCachorro()










