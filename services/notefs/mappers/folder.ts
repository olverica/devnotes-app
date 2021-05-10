import Project from '~/services/notefs/project'
import Buidler from '~/services/notefs/builder'
import {Key} from '~/services/notefs/nodes/node'

interface CreateNodeRequest {
    parent: Key,
    name: string,
    description?: string
}

interface CreateTagRequest {
    parent: Key,
    name: string,
    color: string
}

interface UpdateRequest {
    name?: string;
}

export default class FolderMapper {

    private project: Project


    constructor(project: Project) {
        this.project = project;
    }

    public async createNote(request: CreateNodeRequest) {
        let note = 
            await this.sendCreateNodeRequest(request);

        this.project
            .selectFolder(request.parent)
            .append(note);
    }

    public async createTag(request: CreateTagRequest) {
        let tag = 
            await this.sendCreateTagRequest(request);

        this.project
            .selectFolder(request.parent)
            .append(tag);
    }

    public async update(id: Key, request: UpdateRequest) {
        await this.sendUpdateRequest(id, request);

        this.project
            .selectFolder(id)
            .update(request);
    }

    public async delete(id: Key) {
        await this.sendDeleteRequest(id);

        this.project
            .selectFolder(id)
            .delete();
    }

    private async sendCreateNodeRequest(request: CreateNodeRequest) {
        let created: any = request;
        created.id = this.generateId();

        return  Buidler.note()
            .id(created.id)
            .name(created.name)
            .description(created.description)
            .build();
    }

    private async sendCreateTagRequest(request: CreateTagRequest) {
        let created: any = request;
        created.id = this.generateId();

        return  Buidler.tag()
            .id(created.id)
            .name(created.name)
            .color(created.color)
            .build();
    }

    private async sendUpdateRequest(id: Key, request: UpdateRequest) {
        // 
    }

    private async sendDeleteRequest(id: Key) {
        // 
    }

    private generateId(): string {
        return Date.now().toString();
    }
}