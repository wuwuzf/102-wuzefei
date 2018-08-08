import { schema } from 'normalizr'
import teachers from './teachers'
import classes from './classes'
import comments from './comments'

const homeworks = new schema.Entity('homeworks',{
    classInfo: classes,
    teacherInfo: teachers,
    comments: comments
},{idAttribute:'id'});


const homeworksSchema = [ homeworks];
export default homeworksSchema;