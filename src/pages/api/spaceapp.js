import { admin } from '../../config/firebaseAdmin';
import { pegarTokens } from '../../servicos/firestore';

export default async function handler(req, res){

  const { title, body, image } = req.body

  const tokens = await pegarTokens()
  console.log(tokens)

  const mensagem = {
    notification: {
      title: title,
      body: body,
    },
    android: {
      notification: {
        imageUrl: image
      }
    },
    tokens: tokens
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