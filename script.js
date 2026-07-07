function mudarTema(){
    if (document.body.classList.contains("tema-claro")){
        document.body.classList.add("tema-escuro")
        document.body.classList.remove("tema-claro")
        document.getElementById("temaBtn").textContent = "🌙"
    }
    else{
        document.body.classList.add("tema-claro")
        document.body.classList.remove("tema-escuro")
        document.getElementById("temaBtn").textContent = "☀️"
    }
}