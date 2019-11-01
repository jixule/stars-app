import $ from 'jquery';
export function TipsWindown(zi) {
    let cu = `<p class="fei">${zi}<p>`
    $('body').append(cu)
    $('.fei').css({
        'width': '150px',
        'height': '40px',
        'background': 'rgba(0, 0, 0, 0.7)',
        'position': 'fixed',
        'border-radius': '5px',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'margin': 'auto',
        'display': 'none',
        'font-size': '12px',
        'color': '#fff',
        'line-height': '40px',
        'text-align': 'center',
        'z-index': 9876543
    })
    $('.fei').fadeIn(200)
    let s1 = setInterval(function() {
        $('.fei').fadeOut(200)
        $('.fei').remove()
        clearInterval(s1)
    }, 2000)
}