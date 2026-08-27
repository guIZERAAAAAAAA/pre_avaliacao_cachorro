import ControllerCachorro from "..controller/cachorro.js"

class  ControllerCachorro { 

Buscar  (req, res) {
    try {
        const cachorro = ControllerCachorro.Buscar()

        res.send({ message: cachorro})
    } catch (error) { //esse aqui você não meche o resto sim , você ira fazer try cathc
        res.status(500).send({
            message:error.message
})}}

Detalhe (req, res) {
    try {
        const id = req.params.id

        const cachorro = ControllerCachorro.Detalhe(id)

    } catch (error) {
        
    }
}

Criar   (req, res) {
    try {
    const { id, nome, dono, idade, qtdeBrinquedos}= req.body

    ServiceCachorro.Criar( id, nome, dono, idade, qtdeBrinquedos)
    

    res.send({message: "Cadastro com sucesso"})

} catch (error) {

res.status(500).send({
    message: error.message

})}}

Alterar (res,req) {
    try {
        ServiceCachorro.Alterar

    } catch (error) {
        res.status(500).send({
            message: error.message
})}}

Deletar (req,res) { 
    try {
        const identificador = req.body.id

        ServiceCachorro.Deletar(identificador)

        res.send({message: "Deletado"})
    } catch (error) {
        res.status(500).send.message({
            message: error.message
})}}}

export default new ControllerCachorro()