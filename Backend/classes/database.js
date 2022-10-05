const { MongoClient } = require("mongodb");
// Connection URI

module.exports = class databaseClient {
    constructor() {
        this.client = undefined;
        this.database = undefined;
        this.collection = undefined;
        this.initialize();
    }
    async initialize() {
        const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_ADDRESS}:${process.env.MONGOPORT}?retryWrites=true&writeConcern=majority`;
        this.client = new MongoClient(uri);
        try {
            this.client = client.db(process.env.MONGO_DB);
            this.collection = this.client.collection(process.env.MONGO_COLLECTION);            
        } catch (error) {
            throw new Error(error);
        }
    }

    async GetByOrgName(name) {
        try {
            let result = [];
            const query = {
                packet_type: "company", data: {
                     name: name 
                    }
                }
            const cursor = this.collection.find(query);
            await cursor.forEach((x) => {
                result.append(x);                
            });

            return result;
            } catch (error) {
            throw new Error(error);
        }
    }
    
    async GetEventById(id) {
        try {
            let result = [];
            const query = {
                packet_type: "event", _id: id
            }
            const cursor = this.collection.find(query);
            await cursor.forEach((x) => {
                result.append(x);
            })
            return result;
        } catch (error) {
            throw new Error(error)
        }
    }

    async GetEventByOrgnumber(number) {
        try {
            let result = [];
            const query = {
                packet_type: "event", data : { 
                    OrgNr: number
                }
            }
            const options = {
                sort:{"data.date": 1},
                projection: { _id:1, data: {type: 1, date: 1,}}
            }
            const cursor = this.collection.find(query, options);
            await cursor.forEach((x) => {
                result.append(x);
            });
            return result;
        } catch (error) {
            throw new Error(error);
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


run().catch(console.dir);