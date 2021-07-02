import TrashBinNode, {TrashChild} from '~/services/notefs/nodes/trash-bin'
import {ValidatedTrash} from '~/services/project/validators/trash-bin'
import GarbageConvertor from '~/services/project/convertors/garbage'
import ParentConvertor from '~/services/project/convertors/bases/parent'


export default class TrashConvertor extends ParentConvertor<ValidatedTrash, TrashBinNode, TrashChild> {

    protected childConvertors = {
        garbage: new GarbageConvertor(),
    }
    

    protected createParent(model: ValidatedTrash, children: TrashChild[]) {
        return new TrashBinNode(
            model.id,
            children
        )
    }
}