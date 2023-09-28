class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service")
            throw error;
        }
    }
    async destroy(id){
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went ")
            
        }
    }
    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went ")
            
        }
    }
    async getAll(){
        try {
            const response = await this.repository.getAll();
        } catch (error) {
            console.log("Something went ")
            
        }
    }
    async update(id,data){
        try {
            const response = await this.repository.update(id,data)
        } catch (error) {
            console.log("Something went ")
            
        }
    }
}

module.exports = CrudService;