import http from "@/common/http";

class LembreteService {
    create(data) {
        console.log(data);
        return http.post("/lembrete/adicionar", data);
    }
    load(id) {
        return http.get("/lembrete/" + id);
    }
    delete(id) {
        return http.delete("/lembrete/" + id);
    }
}
export default new LembreteService();