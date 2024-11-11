document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const addEventButton = document.getElementById('addEventButton');
  const closeBtn = document.getElementsByClassName('close')[0];
  const addEventForm = document.getElementById('addEventForm');
  const eventList = document.getElementById('eventList');

  // Mostrar modal ao clicar em "Adicionar Evento"
  addEventButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // Fechar modal ao clicar no botão de fechar
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Fechar modal ao clicar fora dele
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Adicionar evento ao formulário ao enviar (submit)
  addEventForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const eventImage = document.getElementById('eventImage').files[0];

    // Criar novo item de denúncia
    const newEventItem = document.createElement('div');
    newEventItem.classList.add('event-item');

    // Adicionar imagem à denúncia, se fornecida
    if (eventImage) {
      const reader = new FileReader();
      reader.onload = function() {
        const img = document.createElement('img');
        img.src = reader.result;
        newEventItem.appendChild(img);
      }
      reader.readAsDataURL(eventImage);
    }

    // Criar e adicionar texto à denúncia
    const eventInfo = document.createElement('div');
    eventInfo.innerHTML = `<h3>${eventName}</h3><p>Data: ${eventDate}</p><p>${eventDescription}</p>`;
    newEventItem.appendChild(eventInfo);

    // Adicionar novo item de denúncia à lista de denúncias
    eventList.appendChild(newEventItem);

    // Limpar formulário e fechar modal
    addEventForm.reset();
    modal.style.display = 'none';
  });
});


