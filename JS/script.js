addEventListener('DOMContentLoaded', () => {
    let hide = document.querySelector('#loader')
    setTimeout(() => { 
        hide.classList.remove('hide');
       
    }, 3000)
    // setTimeout(() => { 
    //     hide.style.opacity = '0';
    // }, 3000)
    setTimeout(() => { 
        hide.style.display = 'none';
    }, 4500)

    
    // setTimeout(() => {
    //     hide.style.display = 'none';
    // }, 1000)
 })