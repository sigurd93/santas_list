const { MongoClient } = require("mongodb");
// Connection URI

module.exports = class databaseClient {
    constructor() {
        this.client = undefined;
        this.initialize();
    }
    async initialize() {
        const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_ADDRESS}:${process.env.MONGOPORT}`
        this.client = new MongoClient(uri);
        try {
            await this.client.connect();
        } catch (error) {
            throw new Error(error);
        }
    }

    async GetByName(name) {
        try {
            
        } catch (error) {
            
        }
    }
    
    async GetByOrgnumber(number) {

    }

    async GetByStudent(name) {

    }

    async PostReview(packet) {

    }
}


run().catch(console.dir);