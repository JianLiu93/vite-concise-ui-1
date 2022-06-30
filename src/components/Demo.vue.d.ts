import 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';
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
export default _default;
