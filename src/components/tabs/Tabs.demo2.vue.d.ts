declare const _default: {
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
export default _default;
