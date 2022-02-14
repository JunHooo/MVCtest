import './app4.css'
import $ from 'jquery'

const $yuan = $('.yuan')

$yuan.on('mouseenter', () => {
    $yuan.toggleClass('change')
})

