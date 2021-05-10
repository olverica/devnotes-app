import Project from '~/services/notefs/project'
import Buidler from '~/services/notefs/builder'
import {Key} from '~/services/notefs/nodes/node'

interface AppendNodeRequest {
    parent: Key,
    name: string,
    description?: string
}


interface UpdateRequest {
    name?: string;
    color?: string;
}

export default class TagMapper {

    private project: Project

    constructor(project: Project) {
        this.project = project;
    }

    async createNote(request: AppendNodeRequest) {
        let created = await this.sendCreateNodeRequest(request);
        let note = this.createNode(created);

        this.project
            .selectTag(created.parent)
            .append(note);
    }

    async update(id: Key, request: UpdateRequest) {
        await this.sendUpdateRequest(id, request);

        this.project
            .selectTag(id)
            .update(request);
    }

    async delete(id: Key) {
        await this.sendDeleteRequest(id);

        this.project
            .selectTag(id)
            .delete();
    }


    private async sendCreateNodeRequest(request: AppendNodeRequest) {
        let created: any = request;
        created.id = this.generateId();

        return created
    }

    private async sendUpdateRequest(id: Key, request: UpdateRequest) {
        // 
    }

    private async sendDeleteRequest(id: Key) {
        // 
    }

    private createNode(created: any) {
        return Buidler.note()
            .id(created.id)
            .name(created.name)
            .description(created.description)
            .build();
    }

    private generateId(): string {
        return Date.now().toString();
    }
}