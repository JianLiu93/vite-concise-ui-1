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
        InputDemo1: {
            components: {
                UInput: {
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
            };
            setup(): {
                input1: import("vue").Ref<string>;
                input2: import("vue").Ref<string>;
                msg: string;
                name: string;
            };
        };
        InputDemo1Code: any;
        InputDemo2: {
            components: {
                UInput: {
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
            };
            setup(): {
                input1: import("vue").Ref<string>;
                msg: string;
                name: string;
            };
        };
        InputDemo2Code: any;
        InputDemo3: {
            components: {
                UInput: {
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
            };
            setup(): {
                input2: import("vue").Ref<string>;
                msg: string;
                name: string;
            };
        };
        InputDemo3Code: any;
        InputDemo4: {
            components: {
                UInput: {
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
            };
            setup(): {
                input: import("vue").Ref<string>;
                msg2: string;
                name2: string;
            };
        };
        InputDemo4Code: any;
    };
};
export default _default;
