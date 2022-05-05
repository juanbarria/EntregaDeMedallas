let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let posicionLlegada : number = Number (dato1.value);
  if (posicionLlegada === 1) {
    console.log("Entregar medalla de oro");
  } else {
    if (posicionLlegada === 2) {
      console.log("Entregar medalla de Plata");
    } else {
      if (posicionLlegada === 3) {
        console.log("Entregar medalla de Bronce");
      } else {
        console.log("Entregar mencion de Participacion");
      }
    }
  });