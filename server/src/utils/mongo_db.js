require('dotenv').config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version


class MongoDB_Class {
    client = new MongoClient(process.env.ATLAS_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    })

        async run() {
            await this.client.connect();
        }
        
        async get_details(){
            // Send a ping to confirm a successful connection
            const result = await this.client.db("quickPrac").collection("user").findOne({});
            console.log(result.name);
            this.con_close()
        }
        
        async con_close(){
            await this.client.close();
            //console.log(res);
        }

}


const obj = new MongoDB_Class();

obj.run().catch(console.dir);
obj.get_details();
// con_close()