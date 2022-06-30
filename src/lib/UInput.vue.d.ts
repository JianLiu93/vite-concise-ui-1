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
    props: {
        value: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        fieldName: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: StringConstructor;
            default: string;
        };
    };
    setup(props: any, context: any): {
        text: import("vue").Ref<string>;
        showPW: import("vue").Ref<boolean>;
        submit: () => void;
        togglePW: () => void;
        width: string;
    };
};
export default _default;
