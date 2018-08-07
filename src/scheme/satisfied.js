import { schema } from 'normalizr'
import classes from './classes'
import teachers from './teachers'

const satisfiedSchema = new schema.Entity('satisfied',{
    class_info: classes,
    teacher_info: teachers
},{ idAttribute: 'time'})


const satisfiedListSchema = [satisfiedSchema];

export default satisfiedListSchema;