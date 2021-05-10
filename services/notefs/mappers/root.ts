import Project from '~/services/notefs/project'
import Buidler from '~/services/notefs/builder'
import {Key} from '~/services/notefs/nodes/node'

interface CreateNodeRequest {
    parent: Key,
    name: string,
    description?: string
}

interface CreateFolderRequest {
    parent: Key,
    name: string,
}

interface UpdateRequest {
    name?: string;
}

export default class RootMapper {

    private project: Project
    

    constructor(project: Project) {
        this.project = project;
    }

    public async createNote(request: CreateNodeRequest) {
        let note = 
            await this.sendCreateNodeRequest(request);

        this.project
            .selectRoot()
            .append(note);
    }

    public async createFolder(request: CreateFolderRequest) {
        let folder = 
            await this.sendCreateFolderRequest(request);

        this.project
            .selectRoot()
            .append(folder);
    }

    public async update(id: Key, request: UpdateRequest) {
        await this.sendUpdateRequest(id, request);

        this.project
            .selectRoot()
            .update(request);
    }

    public async delete(id: Key) {
        await this.sendDeleteRequest(id);

        this.project
            .selectRoot()
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

    private async sendCreateFolderRequest(request: CreateNodeRequest) {
        let created: any = request;
        created.id = this.generateId();

        return  Buidler.folder()
            .id(created.id)
            .name(created.name)
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