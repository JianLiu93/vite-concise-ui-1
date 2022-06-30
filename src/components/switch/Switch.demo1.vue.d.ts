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
        checked: import("vue").Ref<boolean>;
    };
};
export default _default;
