import {ValidatedParent} from '~/services/project/validators/bases/parent'
import ModelConvertor from '~/services/model/convertor'
import TreeNode from '~/services/notefs/node'
import Model from '~/services/model'


interface ChildConvertors<Child> {
    [type: string]: ModelConvertor<Model, Child>,
}

export default abstract class ParentConvertor<Validated extends ValidatedParent, Converted extends TreeNode, Child extends TreeNode> implements ModelConvertor<Validated, Converted> {

    protected childConvertors: ChildConvertors<Child> = {}

    protected abstract createParent(model: Validated, children: Child[]): Converted;


    public eat(model: Validated): Converted {
        let children = 
            this.parseChildren(model.children);
        
        let node = 
            this.createParent(model, children);

        return node;
    }

    private parseChildren(models: Model[]): Child[] {
        let children = [];

        for (let model of models) {
            let child = this.parseChild(model);
            children.push(child)
        }

        return children;
    }

    private parseChild(model: Model): Child {
        let entries = Object.entries(this.childConvertors);
        let childType = (model as any).type;

        for (let [type, convertor] of entries) {
            if (childType !== type)
                continue;

            let node = convertor.eat(model);
            return node;
        }

        throw Error('Cant convert child');
    }
}