"use strict";
(function () {
    // Uso de Let y Const
    var nombre = 'Ricardo Tapia';
    var edad = 23;
    var PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    // Cree una interfaz que sirva para validar el siguiente objeto
    var batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    var resultadoDoble = function (a, b) { return (a + b) * 2; };
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, poder, arma) {
        if (arma === void 0) { arma = 'arco'; }
        var mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + poder;
        }
        return mensaje;
    }
    ;
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(base, altura) {
            var _this = this;
            this.base = base;
            this.altura = altura;
            this.calcularArea = function () { return _this.base * _this.altura; };
        }
        return Rectangulo;
    }());
})();
