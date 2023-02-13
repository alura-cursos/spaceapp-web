export async function enviarNotificacao(title, body, image=null){
  const dados = {
    title,
    body,
    image
  }
  
  const resultado = await fetch('/api/spaceapp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  console.log(resultado)
}