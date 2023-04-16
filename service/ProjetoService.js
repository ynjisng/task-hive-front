import http from "@/common/http";

class ProjetoService {
    create(data) {
        return http.post("/projeto/cadastrar", data);
    }
    list() {
        return http.get("/projeto/lista");
    }
    load(id) {
        return http.get("/projeto/" + id);
    }
    loadTarefas(id) {
        return http.get("/projeto/" + id + "/tarefas");
    }
    loadTarefasLista(id) {
        return http.get("/projeto/" + id + "/tarefaslista");
    }
}
export default new ProjetoService();