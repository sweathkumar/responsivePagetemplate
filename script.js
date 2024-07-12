function contact() {
    // Create the modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    // Add the message to the modal content
    const message = document.createElement('p');
    message.textContent = 'You will be redirected to your your email application in another Tab.';
    modalContent.appendChild(message);
  
    // Add the close button to the modal content
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      window.location.href = '#';
    });
    modalContent.appendChild(closeButton);
  
    // Add the modal content to the modal element
    modal.appendChild(modalContent);
  
    // Add the modal to the document
    document.body.appendChild(modal);
  
    // Show the modal
    modal.style.display = 'block';
  }
  