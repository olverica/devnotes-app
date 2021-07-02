import {Key, ParentNode} from '~/services/notefs/node'
import ParentContainer from '~/services/notefs/containers/parent'
import NoteContainer from '~/services/notefs/containers/note'
import NoteNode from '~/services/notefs/nodes/note'
import Builder from '~/services/notefs/builder'


interface UpdateRequest {
    name?: string;
    description?: string;
}

interface CreateRequest {
    name: string;
    description?: string;
    parent: ParentNode<NoteNode>
}

export default class NoteMapper {

    async create(request: CreateRequest) {
        let note = await this.sendCreateRequest(request);

        let container = new ParentContainer<NoteNode>(request.parent);
        container.addChild(note);
    }
    
    async update(request: UpdateRequest, note: NoteNode) {
        await this.sendUpdateRequest(request);

        let container = new NoteContainer(note)
        container.update(request);
    }

    async delete(note: NoteNode) {
        await this.sendDeleteRequest();

        let container = new NoteContainer(note);
        container.detach();
    }

    private async sendUpdateRequest(request: UpdateRequest) {
        // 
    }

    private async sendDeleteRequest() {
        // 
    }

    private async sendCreateRequest(request: CreateRequest) {
        let date = Date.now();

        return Builder.note()
            .id(date)
            .name(request.name)
            .description(request.description)
            .build();
    }
}