/**
 * Execute uma função fornecida uma vez por ordem de elemento a funcao curry
 * 
 * @module $forEach
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $forEach([1, 2, 3], console.log.bind(console));
 * 
 */
this.Ninja.module('$forEach', ['$curry'], function ($curry) {
    
  /**
   * Executa uma funcao fornecida uma vez por ordem de elemento
   * 
   * @public
   * @method $forEach
   * @param {Array} a Array de valores
   * @param {Function} b Funcao callback que sera executado para cada item do array
   * @param {Object} c Contexto da funcao callback
   * @example
   * 
   *      $forEach([1, 2, 3], console.log.bind(console));
   * 
   */
  function forEach(a, b, c) {
      a.forEach(b, c || a);
  }
    
  /**
   * Revelacao do modulo $forEach, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(forEach);
    
})