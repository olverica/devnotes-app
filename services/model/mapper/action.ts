import Model, {Key} from '~/services/model'


export interface MapperAllAction<T extends Model> {
    proceed(): Promise<T[]>
}

export interface MapperDeleteAction {
    proceed(key: Key): Promise<void>
}

export interface MapperGetAction<T extends Model> {
    proceed(key: Key): Promise<T>
}

export interface MapperUpdateAction<T extends Model> {
    proceed(key: Key, data: object): Promise<T>
}

export interface MapperCreateAction<T extends Model> {
    proceed(data: object): Promise<T>
}


export type CreateBuilder<T extends Model> = () => MapperCreateAction<T>;

export type UpdateBuilder<T extends Model> = () => MapperUpdateAction<T>;

export type GetBuilder<T extends Model> = () => MapperGetAction<T>;

export type AllBuilder<T extends Model> = () => MapperAllAction<T>;

export type DeleteBuilder = () => MapperDeleteAction;


export interface ActionsSchema<T extends Model> {
    all: AllBuilder<T>;
    get: GetBuilder<T>;
    delete: DeleteBuilder;
    create: CreateBuilder<T>;
    update: UpdateBuilder<T>;
}