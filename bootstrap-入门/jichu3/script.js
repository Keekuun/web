// $('.document').ready(function(){
$('.document').ready(() => {
    // alert('hello')
    $('#dropdown-demo').on('show.bs.dropdown', () => {
        console.log('show');
    });
    $('#dropdown-demo').on('shown.bs.dropdown', () => {
        console.log('show');
    });
    $('#dropdown-demo').on('hide.bs.dropdown', () => {
        console.log('hide');
    });
    $('#dropdown-demo').on('hidden.bs.dropdown', () => {
        console.log('hidden');
    });
});

$('.document').ready(function () {
    const list = $('#tab-demo .list-group a')
    list.click(function (event) {
        event.preventDefault()
        $(this).tab('show')
    })

    list.on('show.bs.tab', function (event) {
        console.log(`开始显示：${ event.target.getAttribute('href') }`)
    })
    list.on('shown.bs.tab', function (event) {
        console.log(`完全显示：${ event.target.getAttribute('href') }`)
    })
    list.on('hide.bs.tab', function (event) {
        console.log(`开始隐藏：${ event.target.getAttribute('href') }`)
    })
    list.on('hidden.bs.tab', function (event) {
        console.log(`完全隐藏：${ event.target.getAttribute('href') }`) //注意这里不是引号
        // console.log(`hello`)
        // console.log('hello')
    })
});

$(document).ready(function () {
    $('#modal-demo').on('show.bs.modal', function () {
        console.log('show')
    })
    $('#modal-demo').on('shown.bs.modal', function () {
        console.log('shown')
    })
    $('#modal-demo').on('hide.bs.modal', function () {
        console.log('hide')
    })
    $('#modal-demo').on('hidden.bs.modal', function () {
        console.log('hidden')
    })
})

$(document).ready(function () {
    $(`[data-toggle="popover"]`).popover()
})

$(document).ready(function () {
    $(`[data-toggle="tooltip"]`).tooltip()
})
