declare const _default: {
    components: {
        Switch: {
            props: {
                value: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: StringConstructor;
                    default: string;
                };
            };
            setup(props: any, context: any): {
                toggle: () => void;
            };
        };
    };
    setup(): {
        toggle1: import("vue").Ref<boolean>;
        toggle2: import("vue").Ref<boolean>;
        toggle3: import("vue").Ref<boolean>;
    };
};
export default _default;
