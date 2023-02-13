import Swal from "sweetalert2"
import { atualizarPost, salvarPost } from "../../servicos/firestore"

export async function PostForms(post){
  const { value: formValues } = await Swal.fire({
    title: post? 'Editar post' : 'Novo post',
    html:
      `<input id="swal-input1" class="swal2-input" placeholder="Titulo" value="${post? post?.titulo : ''}">` +
      `<input id="swal-input2" class="swal2-input" placeholder="Fonte" value="${post? post?.fonte : ''}">` +
      `<input id="swal-input3" class="swal2-input" placeholder="Descrição" value="${post? post?.descricao : ''}">` +
      `<input id="swal-input4" class="swal2-input" placeholder="Link da imagem" value="${post? post?.imagem : ''}">`,
    focusConfirm: false,
    confirmButtonText: 'Salvar',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value,
        document.getElementById('swal-input3').value,
        document.getElementById('swal-input4').value
      ]
    }
  })
  
  if (formValues) {
    // Swal.fire(JSON.stringify(formValues))
    const postInfo = {
      titulo: formValues[0], 
      fonte: formValues[1],
      descricao: formValues[2], 
      imagemUrl: formValues[3]
    }

    if(post){
      return await atualizarPost(post?.id, postInfo)
    }
    return await salvarPost(postInfo) 
  }
}