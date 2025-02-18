import type {ZodType} from "zod";
import type {BaseComponentProps} from "../component";

interface FileInputProps extends BaseComponentProps
{
    name: string;
    placeholder?: string;
    schema?: ZodType;
    error?: string;
    value?: string;
}

export type{FileInputProps};