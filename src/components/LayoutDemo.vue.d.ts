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
        LayoutDemo1: {
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
        LayoutDemo1Code: any;
        LayoutDemo2: {
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
        LayoutDemo2Code: any;
        LayoutDemo3: {
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
        LayoutDemo3Code: any;
        LayoutDemo4: {
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
        LayoutDemo4Code: any;
        LayoutDemo5: {
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
        LayoutDemo5Code: any;
    };
};
export default _default;
