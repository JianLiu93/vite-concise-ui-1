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
        SwitchDemo1: {
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
        SwitchDemo1Code: any;
        SwitchDemo2: {
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
        SwitchDemo2Code: any;
        SwitchDemo3: {
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
        SwitchDemo3Code: any;
    };
};
export default _default;
