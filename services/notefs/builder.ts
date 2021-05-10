import FolderBuilder from '~/services/notefs/nodes/builders/folder'
import NoteBuilder from '~/services/notefs/nodes/builders/note'
import RootBuilder from '~/services/notefs/nodes/builders/root'
import TagBuilder from '~/services/notefs/nodes/builders/tag'


export default class TreeBuilder {

    public static folder() {
        return new FolderBuilder();
    }

    public static root() {
        return new RootBuilder();
    }

    public static note() {
        return new NoteBuilder();
    }

    public static tag() {
        return new TagBuilder();
    }
} 