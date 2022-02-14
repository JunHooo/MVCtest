import './app2.css'
import $ from 'jquery'

const $content1 = $('.content1')
const $content2 = $('.content2')

const $title1 = $('.title1')
$title1.on('click', (e) => {
    $content1.addClass('active')
    $content2.removeClass('active')
    $title1.addClass('color')
    $title2.removeClass('color')
})

const $title2 = $('.title2')
$title2.on('click', (e) => {
    $content2.addClass('active')
    $content1.removeClass('active')
    $title2.addClass('color')
    $title1.removeClass('color')

})


