function devolveResultado(data) {
    // var dia = data;

    var chave = "?api_key=UTxsLjgPTQZfCVXDaJ9GkWGtKZr4UYafK3C9t7g9"
    var date = ("&date=" + data);
    const recebeDados = fetch('https://api.nasa.gov/planetary/apod' + chave + date);



    recebeDados.then(resposta => resposta.json())
        .then(r => {
            if (r.erro) {
                throw Error('Não foi possivel responder a requisição')
            } else {
                window.open(r.url);

            }
        })
        .catch(erro => console.log(erro));

}