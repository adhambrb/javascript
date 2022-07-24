// grauEsfOlhoDireito
// grauCilOlhoDireito

// grauEsfOlhoEsquerdo
// grauCilOlhoEsquerdo

$(document).ready(function () {


  function validEmpty() {
    if (
      !$("#grauEsfOlhoDireito").val() ||
      !$("#grauCilOlhoDireito").val() ||
      !$("#grauEsfOlhoEsquerdo").val() ||
      !$("#grauCilOlhoEsquerdo").val()
    ) {
      return false;
    }

    return true;
  }

  function isMultiple(num) {
    if (isNaN(num)) {
      return false;
    }

    if ((num * -1) % 0.25 != 0) {
      return false;
    }

    return true;
  }

  function validCilindricos(cilindricos) {
    let valid = true;

    for (let i = 0; i < cilindricos.length; i++) {
      let value = parseFloat(cilindricos[i]);

      if (!isMultiple(value)) {
        valid = false;
        break;
      }

      if (value > 0) {
        valid = false;
      } else if (value * -1 > 6) {
        valid = false;
      }
    }
  }

  function validEsfericos(esfericos) {
    let valid = true;

    for (let i = 0; i < esfericos.length; i++) {
      let value = parseFloat(esfericos[i]);

      if (!isMultiple(value)) {
        valid = false;
        break;
      }

      if (value > 0) {
        valid = false;
      } else if (value * -1 > 15) {
        valid = false;
      }
    }

    return valid;
  }

  function validSubmit() {
    if (!validEmpty()) {

      const esfericos = [
        $("#grauEsfOlhoDireito").val(),
        $("#grauEsfOlhoEsquerdo").val(),
      ];
      const cilindricos = [
        $("#grauCilOlhoDireito").val(),
        $("#grauCilOlhoEsquerdo").val(),
      ];
      alert("Insira pelo menos um Valor em cada campo!");
      return false;
    }

    if (!validEsfericos(esfericos)) {
      alert("Valores esféricos inválidos!");
      return false;
    }

    if (!validCilindricos(cilindricos)) {
      alert("Valores cilindricos inválidos!");
      return false;
    }

    return true;
  }

  function isPrime() {
    for (let i = 0; i < esfericos.length; i++) {
      if (value * -1 > 3 && value * -1 < 12) {
        return true;
      }
    }
  }

  $("#consultaLente").click(function () {
    if (!validSubmit()) {
      return false;
    }
  });
});
