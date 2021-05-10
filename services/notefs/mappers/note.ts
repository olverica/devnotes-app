import Project from '~/services/notefs/project'
import {Key} from '~/services/notefs/nodes/node'


interface UpdateRequest {
    name?: string;
    description?: string;
}

export default class TagMapper {

    private project: Project


    constructor(project: Project) {
        this.project = project;
    }

    async update(id: Key, request: UpdateRequest) {
        await this.sendUpdateRequest(id, request);

        this.project
            .selectNote(id)
            .update(request);
    }

    async delete(id: Key) {
        await this.sendDeleteRequest(id);

        this.project
            .selectNote(id)
            .delete();
    }

    private async sendUpdateRequest(id: Key, request: UpdateRequest) {
        // 
    }

    private async sendDeleteRequest(id: Key) {
        // 
    }
}