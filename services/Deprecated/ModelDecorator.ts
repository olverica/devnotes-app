import Model from '~/services/Model'

function ModelDecorator(target: object) {
    return Model<target>;
}