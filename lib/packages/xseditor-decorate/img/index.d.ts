export default function (Config: Target): {
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
            onChange: (e: Target) => void;
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
};
