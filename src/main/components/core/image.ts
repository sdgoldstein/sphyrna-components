import type {BaseComponentProps} from "../component";

interface ImageProps extends BaseComponentProps
{
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export type{ImageProps};