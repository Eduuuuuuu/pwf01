'use strict'

const forma_1 = document.getElementById('forma_1')
const forma_2 = document.getElementById('forma_2')
const forma_3 = document.getElementById('forma_3')
const forma_4 = document.getElementById('forma_4')
const forma_5 = document.getElementById('forma_5')
const forma_6 = document.getElementById('forma_6')
const forma_7 = document.getElementById('forma_7')
const forma_8 = document.getElementById('forma_8')
const tudo = document.getElementById('container')

function mudarCor(){
    forma_1.classList.toggle('vermelho')
}forma_1.addEventListener('click', mudarCor)

function mudarForma(){
    forma_2.classList.toggle('circulo')
}forma_2.addEventListener('click', mudarForma)

function mudarTamanho(){
    forma_3.classList.toggle('zoom')
}forma_3.addEventListener('click', mudarTamanho)

function girar() {
    forma_4.classList.toggle('giro')
}forma_4.addEventListener('click', girar)

function imagem() {
    forma_5.classList.toggle('imagem')
}forma_5.addEventListener('click', imagem)

function windowsUp() {
    window.location.href = "https://longdogechallenge.com/"
}forma_6.addEventListener('click', windowsUp)

function sumir() {
    forma_7.classList.toggle('sumir')
}forma_7.addEventListener('click', sumir)

function batata(){
    tudo.classList.toggle('batata')
}forma_8.addEventListener('click', batata)