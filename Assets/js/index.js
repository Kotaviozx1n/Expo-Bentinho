async function fazGet(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
  
  catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }
}

async function lerIdentificadorEPegarBanco() {
  try {
    const data = await fazGet('https://quotes-api-self.vercel.app/quote');
    const frase = data;

    const tabela = document.getElementById('tabela');
    tabela.innerHTML = '';

    const linha = criaLinha(frase);

      tabela.appendChild(linha);
  } 
  
  catch (error) {
    console.error('Erro ao processar a frase:', error);
  }
}

function criaLinha(frase) {
  const linha = document.createElement("tr");
  const tdFrase = document.createElement("h1");
  const tdAutor = document.createElement("td");

  tdFrase.innerHTML = frase['quote'];
  tdAutor.innerHTML = frase['author'];

  linha.appendChild(tdFrase);
  linha.appendChild(tdAutor);

  return linha;
}

const randomQuotes = document.getElementById('fraseForm');

randomQuotes.addEventListener('submit', async (event) => {
  event.preventDefault();

  await lerIdentificadorEPegarBanco();
});

function ModoEscuro(estado){
if (estado==true){
  document.getElementById("corpo","").style.background='#121212'
  document.getElementById("iconedark").style.color='#fff'
  document.getElementById("iconedark").style.background='#121212'
  document.getElementById("iconelight").style.color='#fff'
  document.getElementById("iconelight").style.background='#121212'
  document.getElementById("iconGithub").style.color='#fff'
  document.getElementById("iconGithub").style.background='#121212'
  document.getElementById("iconGithubText").style.background='#121212'
  document.getElementById("iconGithubText").style.color='#fff'
  document.getElementById("fraseForm1").style.color='#fff'
  document.getElementById("fraseForm1").style.background='#121212'
  document.getElementById("fraseForm1").style.borderColor='#fff'
}

else {
    document.getElementById("corpo").style.background='#fff'
    document.getElementById("iconedark").style.background='#fff'
    document.getElementById("iconedark").style.color='#121212'
    document.getElementById("iconelight").style.background='#fff'
    document.getElementById("iconelight").style.color='#121212'
    document.getElementById("iconGithub").style.color='#121212'
    document.getElementById("iconGithub").style.background='#fff'
    document.getElementById("iconGithubText").style.background='#fff'
    document.getElementById("iconGithubText").style.color='#121212'
    document.getElementById("fraseForm1").style.color='#121212'
    document.getElementById("fraseForm1").style.borderColor='#121212'
    document.getElementById("fraseForm1").style.background='#fff'
}
}