declare const _default: (el: Element | Target, Config: Target) => {
    children: ({
        xs_tag: string;
        xs_type: number;
        xs_data: {
            class: string;
        };
        children: ({
            xs_tag: string;
            xs_type: number;
            xs_data: {
                class: string;
                type: string;
                accept: string;
                onChange: (e: any) => void;
            };
            children: never[];
            xs_value?: undefined;
        } | {
            xs_type: number;
            xs_value: string;
            xs_tag?: undefined;
            xs_data?: undefined;
            children?: undefined;
        })[];
    } | {
        xs_tag: string;
        xs_type: number;
        xs_data: {
            class: string;
            onClick: (e: any) => void;
        };
        children: {
            xs_type: number;
            xs_value: string;
        }[];
    } | {
        xs_tag: string;
        xs_type: number;
        xs_data: {
            class: string;
            onClick: (e: any) => void;
        };
        children: ({
            xs_type: number;
            xs_value: string;
            xs_tag?: undefined;
            xs_data?: undefined;
            children?: undefined;
        } | {
            xs_tag: string;
            xs_type: number;
            xs_data: {
                class: string;
                id: string;
            };
            children: {
                xs_type: number;
                xs_tag: string;
                xs_data: {
                    onClick: () => void;
                };
                children: {
                    xs_type: number;
                    xs_value: string;
                }[];
            }[];
            xs_value?: undefined;
        })[];
    })[];
    xs_data: {
        class: string;
    };
    xs_tag: string;
    xs_type: number;
    xs_value: undefined;
};
export default _default;
