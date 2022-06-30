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
        TabsDemo1: {
            components: {
                Tab: {
                    name: string;
                };
                Tabs: {
                    props: {
                        selected: {
                            type: StringConstructor;
                            require: boolean;
                        };
                        disable: {
                            type: ArrayConstructor;
                            default: any[];
                        };
                    };
                    setup(props: any, context: any): {
                        defaults: any;
                        current: import("vue").ComputedRef<any>;
                        titles: any;
                        select: (title: string) => void;
                        selectedItem: import("vue").Ref<HTMLDivElement>;
                        indicator: import("vue").Ref<HTMLDivElement>;
                        container: import("vue").Ref<HTMLDivElement>;
                    };
                };
            };
            setup(): {
                def_title: import("vue").Ref<string>;
            };
        };
        TabsDemo1Code: any;
        TabsDemo2: {
            components: {
                Tab: {
                    name: string;
                };
                Tabs: {
                    props: {
                        selected: {
                            type: StringConstructor;
                            require: boolean;
                        };
                        disable: {
                            type: ArrayConstructor;
                            default: any[];
                        };
                    };
                    setup(props: any, context: any): {
                        defaults: any;
                        current: import("vue").ComputedRef<any>;
                        titles: any;
                        select: (title: string) => void;
                        selectedItem: import("vue").Ref<HTMLDivElement>;
                        indicator: import("vue").Ref<HTMLDivElement>;
                        container: import("vue").Ref<HTMLDivElement>;
                    };
                };
            };
            setup(): {
                def_title: import("vue").Ref<string>;
                disable_list: string[];
            };
        };
        TabsDemo2Code: any;
    };
};
export default _default;
