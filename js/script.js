document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.header_call_order_link').addEventListener('click', function(event) {
        document.querySelector('.popup').classList.add('open')
        document.querySelector('.blur').classList.add('open')
        document.querySelector('body').style.overflow = "hidden"
        }) 

    document.querySelectorAll('.js-close-modal').forEach(close => {
        close.addEventListener('click', function handleClick(event) {
            document.querySelectorAll('.open').forEach(open => {
            open.classList.remove('open');
            })
            document.querySelector('body').style.overflow = "initial"
        })
        })

    document.querySelector('.header_menu_button').addEventListener('click', function(event) {
        document.querySelector('.header').classList.toggle('active')
        }) 
    document.querySelectorAll('.header_address').forEach(close => {
     close.addEventListener('click', function handleClick(event) {
        document.querySelector('.map').classList.add('open')
        document.querySelector('.blur').classList.add('open')
        document.querySelector('body').style.overflow = "hidden"
        })
    })
    document.querySelectorAll('.header_watch_map').forEach(close => {
        close.addEventListener('click', function handleClick(event) {
           document.querySelector('.map').classList.add('open')
           document.querySelector('.blur').classList.add('open')
           document.querySelector('body').style.overflow = "hidden"
           })
       })
})