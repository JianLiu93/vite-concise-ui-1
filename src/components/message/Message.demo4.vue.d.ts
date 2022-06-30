declare const _default: {
    components: {
        Message: {
            components: {
                Icon: import("vue").DefineComponent<{
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
            };
            props: {
                text: {
                    type: StringConstructor;
                    default: string;
                };
                type: {
                    type: StringConstructor;
                    default: string;
                };
                closeable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                center: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                remain: {
                    type: NumberConstructor;
                    default: number;
                };
            };
            setup(props: any, context: any): {
                style: {
                    info: {
                        icon: string;
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                    };
                    warn: {
                        icon: string;
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                    };
                    error: {
                        icon: string;
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                    };
                    success: {
                        icon: string;
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                    };
                };
                visible: import("vue").Ref<boolean>;
                close: () => void;
            };
        };
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
        open8: () => any;
        open9: () => any;
    };
};
export default _default;
