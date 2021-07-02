import {ValidatedGarbage, ValidatedGarbageChild} from '~/services/project/validators/garbage'
import GarbageNode, {GarbageChild} from '~/services/notefs/nodes/garbage'
import FolderConvertor from '~/services/project/convertors/folder'
import NoteConvertor from '~/services/project/convertors/note'
import ModelConvertor from '~/services/model/convertor'


export default class GarbageConvertor extends ModelConvertor<ValidatedGarbage, GarbageNode> {

    protected childConvertors = {
        note: new NoteConvertor(),
        folder: new FolderConvertor()
    }


    public eat(model: ValidatedGarbage): GarbageNode {
        let node = 
            this.parseNode(model.node);
        
        let garbage = 
            this.createGarbage(model, node);

        return garbage;
    }

    private parseNode(model: ValidatedGarbageChild) {
        let entries = Object.entries(this.childConvertors);

        for (let [type, convertor] of entries) {
            if (type !== model.type)
                continue;

            let node = convertor.eat(model as any);
            return node;
        }

        throw Error('Cant find correct convertor');
    } 
    
    protected createGarbage(model: ValidatedGarbage, node: GarbageChild) {
        return new GarbageNode(
            model.id,
            model.deletedAt,
            node,
        )
    }
}