import { admin } from '../../config/firebaseAdmin';

export default async function handler(req, res){

  const { title, body, image } = req.body

  const mensagem = {
    notification: {
      title: title,
      body: body,
    },
    tokens: ['fymAfwTZRMyfanSMZ_hRPx:APA91bGfQi_x-VFhAOO0Ly8BjJznceBpmCZUg7a65d3-iDTY8PDUfjlumpU6jV_gAZH50VrLxGWG-DN__1sbT-O5vH3F56SuroWPVsZW73M3rb4M94WOvePQq0arqKdc9AbQLnDgNWwN']
  };

  try {
    await admin.messaging().sendMulticast(mensagem)
    console.log('Notificacao enviada com sucesso!')
    res.status(200).json({
      status: 'Notificacao enviada com sucesso!'
    })
  }
  catch(error){
    console.log(error)
    res.status(400).json({
      status: 'Erro ao enviar'
    })
  }
}