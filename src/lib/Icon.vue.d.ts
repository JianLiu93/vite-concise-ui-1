declare const _default: import("vue").DefineComponent<{
    prefix: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    symbolId: import("vue").ComputedRef<string>;
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefix: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    size: string;
    prefix: string;
    color: string;
}>;
export default _default;
