declare const _default: {
    props: {
        space: {
            type: NumberConstructor;
            default: number;
        };
    };
    setup(props: any, context: any): {
        row: import("vue").Ref<HTMLDivElement>;
        colList: HTMLDivElement[];
        defaults: any;
        colSpace: import("vue").Ref<number>;
    };
};
export default _default;
