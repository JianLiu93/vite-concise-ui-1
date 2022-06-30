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
        DialogDemo1: {
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
                Dialog: {
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
                        visible: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        closeOnClickMask: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        OK: {
                            type: FunctionConstructor;
                        };
                        cancel: {
                            type: FunctionConstructor;
                        };
                    };
                    setup(props: any, context: any): {
                        close: () => void;
                        onClickMask: () => void;
                        onOK: () => void;
                        onCancel: () => void;
                    };
                };
            };
            setup(): {
                isShow: import("vue").Ref<boolean>;
                toggle: () => void;
                fn1: () => void;
                fn2: () => void;
            };
        };
        DialogDemo1Code: any;
        DialogDemo2: {
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
                Dialog: {
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
                        visible: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        closeOnClickMask: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        OK: {
                            type: FunctionConstructor;
                        };
                        cancel: {
                            type: FunctionConstructor;
                        };
                    };
                    setup(props: any, context: any): {
                        close: () => void;
                        onClickMask: () => void;
                        onOK: () => void;
                        onCancel: () => void;
                    };
                };
            };
            setup(): {
                isShow: import("vue").Ref<boolean>;
                toggle: () => void;
                fn1: () => void;
                fn2: () => void;
            };
        };
        DialogDemo2Code: any;
        DialogDemo3: {
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
                Dialog: {
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
                        visible: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        closeOnClickMask: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        OK: {
                            type: FunctionConstructor;
                        };
                        cancel: {
                            type: FunctionConstructor;
                        };
                    };
                    setup(props: any, context: any): {
                        close: () => void;
                        onClickMask: () => void;
                        onOK: () => void;
                        onCancel: () => void;
                    };
                };
            };
            setup(): {
                showDialog: () => void;
                showDialog2: () => void;
            };
        };
        DialogDemo3Code: any;
    };
};
export default _default;
