document.addEventListener('DOMContentLoaded', function() {
    /*
        Inicializa uma medição de tempo, que será gravada no
        banco de dados cujo endereço é passado como parâmetro.
    */
    let ab = start('https://teste-ab-9f84c.firebaseio.com/')

    /*
        Seleciona o elemento que, quando clicado, finaliza a
        medição de tempo e envia o resultado para o banco.
    */
    let element = document.querySelector('.continue')

    element.addEventListener('click', function() {
        /*
            Finaliza medição e envia resultado para banco.
        */
        ab.finish()
    })
})
