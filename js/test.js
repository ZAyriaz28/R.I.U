document.getElementById("testForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let ansiedad = 0;
  let tdah = 0;
  let hiper = 0;

  const valores = new FormData(this);

  // Sumar los valores según grupo
  ansiedad += parseInt(valores.get("p1")) + parseInt(valores.get("p2"));
  tdah += parseInt(valores.get("p3")) + parseInt(valores.get("p4"));
  hiper += parseInt(valores.get("p5")) + parseInt(valores.get("p6"));

  function evaluar(valor) {
    if (valor <= 1) return "bajo";
    if (valor <= 3) return "moderado";
    return "alto";
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <h3>Resultados:</h3>
    <ul>
      <li><strong>Ansiedad:</strong> nivel ${evaluar(ansiedad)}</li>
      <li><strong>TDAH:</strong> nivel ${evaluar(tdah)}</li>
      <li><strong>Hiperactividad:</strong> nivel ${evaluar(hiper)}</li>
    </ul>
    <p><em>Este resultado es solo una guía. Si notas que los síntomas interfieren con tu vida diaria, busca apoyo profesional.</em></p>
  `;
});
