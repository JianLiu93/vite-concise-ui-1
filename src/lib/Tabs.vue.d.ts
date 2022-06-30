declare const _default: {
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
export default _default;
