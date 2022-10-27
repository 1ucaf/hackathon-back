import { DataSource } from "typeorm"
import { Developer } from "../../repository/entities/developer.entity"
import { Hackathon } from "../entities/hackathon.entity"

export const AppDataSource = new DataSource({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test',
    entities: [Developer, Hackathon],
    synchronize: true,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })