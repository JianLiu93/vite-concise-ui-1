declare const _default: {
    name: string;
    props: {
        space: {
            type: NumberConstructor;
            default: number;
        };
        span: {
            type: NumberConstructor;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
    };
    setup(props: any, context: any): {
        col: import("vue").Ref<HTMLDivElement>;
    };
};
export default _default;
