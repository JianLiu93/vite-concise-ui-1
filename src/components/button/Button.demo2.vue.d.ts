declare const _default: {
    components: {
        Button: {
            props: {
                theme: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: StringConstructor;
                    default: string;
                };
                level: {
                    type: StringConstructor;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            setup(props: any): {
                classes: import("vue").ComputedRef<{
                    [x: string]: any;
                }>;
            };
        };
    };
    setup(): {
        onClick1: () => void;
        onClick2: () => void;
        onClick3: () => void;
    };
};
export default _default;
