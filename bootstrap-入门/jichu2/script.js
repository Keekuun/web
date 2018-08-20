// $('.document').ready(function(){
$('.document').ready(() => {
    alert('hello')
    $('#dropdown-demo').on('show.bs.dropdown', () => {
        console.log('show')
    })
    $('#dropdown-demo').on('shown.bs.dropdown', () => {
        console.log('show')
    })
    $('#dropdown-demo').on('hide.bs.dropdown', () => {
        console.log('hide')
    })
    $('#dropdown-demo').on('hidden.bs.dropdown', () => {
        console.log('hidden')
    })
})