/*
    Tarefa para casa
        Criar 4 rotas: 
        - /calcularSeno
        - /calcularSeno
        - /calcularCosseno
        - /calcularTangente

        Cada rota é um serviço e deve ter o calculo.
        Seu desafio é receber na REQUISIÇÂO o dado para calculo, resolver o calculo e devolver uma resposta.
*/

// npm install
// npm install fastify

import { fastify } from "fastify";

const server = fastify();

server.get("/", () => {
   console.log("Servidor funcionando!!!");
   return "Servidor do Desafio de 4 rotas - Aula Web";
});

server.get("/calcularSeno", () => {
   var hipotenusa: number = 10;
   var catetoOposto: number = 6;
   const seno: number = catetoOposto / hipotenusa;
   return `Seno: ${seno}`;
});

server.get("/calcularCosseno", () => {
   var hipotenusa: number = 10;
   var catetoAdajacente: number = 6;
   const cosseno: number = catetoAdajacente / hipotenusa;
   return `Cosseno: ${cosseno}`;
});

server.get("/calcularTangente", () => {
   var catetoOposto: number = 1;
   var catetoAdajacente: number = 0;
   const tangente: number = catetoOposto / catetoAdajacente;
   return `Tangente: ${tangente}`
});

server.listen({
   port: 3000,
});
