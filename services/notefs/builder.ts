import ProjectBuilder from '~/services/notefs/builders/project'
import FolderBuilder from '~/services/notefs/builders/folder'
import NoteBuilder from '~/services/notefs/builders/note'
import RootBuilder from '~/services/notefs/builders/root'
import TagBuilder from '~/services/notefs/builders/tag'


export default class TreeBuilder {

    public static project() {
        return new ProjectBuilder();
    }

    public static folder() {
        return new FolderBuilder();
    }

    public static note() {
        return new NoteBuilder();
    }

    public static root() {
        return new RootBuilder();
    }

    public static tag() {
        return new TagBuilder();
    }
}