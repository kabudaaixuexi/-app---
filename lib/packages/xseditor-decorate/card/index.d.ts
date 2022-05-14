declare const _default: {
    xs_tag: string;
    xs_type: number;
    xs_data: {
        class: string;
        onClick: (e: Target) => void;
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
                class: string;
                onClick: () => void;
            };
            children: {
                xs_type: number;
                xs_value: string;
            }[];
        }[];
        xs_value?: undefined;
    })[];
};
export default _default;
