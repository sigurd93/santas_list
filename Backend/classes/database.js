const mongoClient = require("mongodb").MongoClient;

module.exports = class databaseClient {
    constructor() {
        this.client = undefined;
        this.database = undefined;
        this.collection = undefined;
        this.initialize();
        this.str = "";
    }
    async initialize() {
        const uri = `mongodb://${process.env.MONGO_ADDRESS}:${process.env.MONGOPORT}/`;
        console.log(uri)
        this.client = new mongoClient(uri);
        this.database = this.client.db(process.env.MONGO_DB);
        this.collection = this.database.collection(process.env.MONGO_COLLECTION);     
    
    }

    async GetOrg() {
        await this.client.connect();
        try {
            const query = {
                "packet_type": "company"
            }
            let cursor = this.collection.find(query);
            await cursor.forEach((res) => {
                this.str = this.str + JSON.stringify(res);
            });
            await cursor.close();
            console.log(this.str);
            return JSON.stringify(this.str);
        } catch (error) {
            throw error
        } finally {
            this.str = "";
            this.client.close();
        }
    }

    async GetByOrgName(name) {
        await this.client.connect();
        try {
            if (!name) {
                return "trenger navn"
            }
            console.log(name)
            const query = {
                "packet_type": "company", "data.Name": name 
                }
            let cursor = this.collection.find(query);
            await cursor.forEach((res) => {
                this.str = this.str + JSON.stringify(res);
            })
            await cursor.close()
            console.log(this.str);
            return this.str;
            } catch (error) {
            throw new Error(error);
        } finally {
            this.str = "";
            this.client.close();
        }
    }
    
    async GetEventById(id) {
        try {
            await this.client.connect();
            let result;
            const query = {
                "packet_type": "event", "_id": id
            }
            let cursor = this.collection.find(query);
            await cursor.forEach((res) => {
                this.str = this.str + JSON.stringify(res)
            })
            return result;
        } catch (error) {
            throw new Error(error)
        } finally {
            this.str = "";
            this.client.close();
        }
    }

    async GetEventByOrgNumber(number) {
        try {
            await this.client.connect();
            const query = {
                "packet_type": "event", "data.OrgNr": number
                }
            const options = {
                "sort":{"data.Dato": 1},
                "projection": { "_id":1, "data.type": 1, "data.Dato": 1,}
            }
            let cursor = this.collection.find(query, options)
            await cursor.forEach((res) => {
                this.str = this.str + JSON.stringify(res)
            })
            return result;
        } catch (error) {
            throw new Error(error);
        } finally {
            this.str = "";
            this.client.close();
        }
    }

    async PostCompany(company) {
        try {
            
        } catch (error) {


            
            
        }
    }

    async PostReview(packet) {

    }
}