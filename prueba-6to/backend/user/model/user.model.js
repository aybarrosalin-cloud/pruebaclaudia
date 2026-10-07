import { EntitySchema } from 'typeorm'

const User = new EntitySchema({
    name: 'User',
    tableName: 'users',

    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        name: {
            type: "varchar",
            length: 10
        },
        edad: {
            type: "varchar",
            length: 15
        }
    }
}) 

export default User