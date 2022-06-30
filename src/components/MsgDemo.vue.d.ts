declare const _default: {
    components: {
        Demo: {
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
                component: {
                    type: ObjectConstructor;
                    require: boolean;
                };
                code: {
                    type: StringConstructor;
                    default: string;
                };
            };
            setup(props: any): {
                html: import("vue").ComputedRef<any>;
                codeIsShow: import("vue").Ref<boolean>;
                toggle: () => void;
            };
        };
    };
    setup(): {
        MessageDemo1: {
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
                open1: () => any;
            };
        };
        MessageDemo1Code: any;
        MessageDemo2: {
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
                open2: () => any;
                open3: () => any;
                open4: () => any;
                open5: () => any;
            };
        };
        MessageDemo2Code: any;
        MessageDemo3: {
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
                open6: () => any;
                open7: () => any;
            };
        };
        MessageDemo3Code: any;
        MessageDemo4: {
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
        MessageDemo4Code: any;
        MessageDemo5: {
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
                open10: () => any;
                open11: () => any;
            };
        };
        MessageDemo5Code: any;
    };
};
export default _default;
