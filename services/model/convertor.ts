
export default abstract class ModelConvertor<ValidatedModel, ConvertedModel> {

    public abstract eat(model: ValidatedModel): ConvertedModel;
}