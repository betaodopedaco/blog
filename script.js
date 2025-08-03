// Adicione interações JS aqui, se necessário
console.log("Página carregada com sucesso!");

// Exemplo: Adicionar um evento de clique nas imagens para ampliar
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    img.style.transform = img.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
    img.style.transition = 'transform 0.3s ease';
  });
});
