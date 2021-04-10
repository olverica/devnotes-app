
import Node from '~/services/navigation/Node'

export default class File implements Node {
  private name: string = 'repo';

  public getName() {
    return this.name;
  }
}