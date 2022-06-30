declare const _default: {
    components: {
        ConCol: {
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
        ConRow: {
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
    };
    setup(): void;
};
export default _default;
