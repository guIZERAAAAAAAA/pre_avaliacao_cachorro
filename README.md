# pre_avaliacao_cachorro
Avaliação de simulação de avaliação sobre BackEnd  ( cachorro )

ORdem da sequencias dos codigos 

repository
index.js
router
controller
service



codigos base para começar 

npm init 
npm i express
npm i 

comece pelo repository 

repository = você vai criar o _banco de dados_ aqui

_!INDEX.JS!_

Depois você ira fazer o _index.js_ que está na raiz do do seu projeto

Nesse index.js vai ter os seguintes codigos 

o IMPORT do express 
o IMPORT do router

const app = express()

app.use(express.json())

app.use ("/api/v1/carro", carro) 

app.listen(3000, () =>
 {console.log
 ("Servidor Porta 3000")})

/;/;/;/;/;/;/;/;/;;/;/;;/;/;/;/;/;;/

Depois você ira para o _Router_

aqui é uma pinoia 

erros que pode dar aqui é o 

Module dentro do jason 

erro no app.use 

_app.use("/api/v1/carro", carro)_

/////

NO Controller 

você ira fazer o try catch dentro das chaves NÃo mecha no nesse :

 _} catch (error) {_

 o resto se meche 

 lembra que voce vai ter que fazer uma const para os cachorros = ServiceCachorro.buscar 

 quando chegar nessa parte pense 

 _+A constantcia do cachhoro é igual a buscar um Service de Cachrro buscando+_ 
                     _const carros = ServiceCarro.Buscar()_