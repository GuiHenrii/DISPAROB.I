async function dialogo(client, message) {
  const texto = "Opa, sou Guilherme Rosa, desenvolvedor de sistemas para automação.\n\nCriamos uma ferramenta de atendimento automático para WhatsApp que une inteligência e humanização nas repostas do whatsapp. Oferecemos suporte 20 horas por dia para atender você e sua equipe. *Os diálogos são totalmente personalizados, pensados exclusivamente para sua empresa.* \n\n Teria disponibilidade para marcarmos uma reunião de apresentação??"

  await client
  .sendText(message.from, texto)
  .then(() => {
    console.log('Send Message'); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
}
module.exports = dialogo