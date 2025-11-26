// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
function abrirPaginaExterna() {
    // Substitua pela URL da sua página externa
    const urlExterna = 'index.html';
    
    // Abre em uma nova aba/janela
    window.open(urlExterna, '_blank');
}

// Alternativa: abrir em uma modal
function abrirEmModal() {
    const urlExterna = 'index.html';
    
    // Cria uma modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '2000';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    
    // Cria o iframe
    const iframe = document.createElement('iframe');
    iframe.src = urlExterna;
    iframe.style.width = '90%';
    iframe.style.height = '90%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '10px';
    
    // Botão fechar
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '20px';
    closeBtn.style.background = 'red';
    closeBtn.style.color = 'white';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.width = '40px';
    closeBtn.style.height = '40px';
    closeBtn.style.fontSize = '20px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.zIndex = '2001';
    
    closeBtn.onclick = function() {
        document.body.removeChild(modal);
    };
    
    modal.appendChild(closeBtn);
    modal.appendChild(iframe);
    document.body.appendChild(modal);
}