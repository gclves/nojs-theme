 ready(() => {
   const h1 = document.createElement('h1');
   h1.innerText = 'Please disable JavaScript';
   h1.style.color = 'white';
   h1.style.position = 'absolute';
   h1.style.width = '100%';
   h1.style.zIndex = 10;
   h1.style.top = 0;
   h1.style.textAlign = 'center';
   document.body.appendChild(h1);
 });
