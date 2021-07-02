import UserParser from '~/models/parsers/user'
import build from '~/services/model/build'
import Model from '~/services/model'


export interface UserModel extends Model {
    name: string
}


export default build<UserModel>({
    path: 'user',
    parser: new UserParser()
})