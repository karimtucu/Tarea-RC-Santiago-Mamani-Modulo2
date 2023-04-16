let persona = {
    nombre: "Juan",
    edad: 30,
    dni: "12345678",
    domicilio: "Calle Falsa 123",
    hijos: 2,
    profesion: "Ingeniero",
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    },
    listar: function() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`DNI: ${this.dni}`);
      console.log(`Domicilio: ${this.domicilio}`);
      console.log(`Cantidad de hijos: ${this.hijos}`);
      console.log(`Profesión: ${this.profesion}`);
    }
  };
  