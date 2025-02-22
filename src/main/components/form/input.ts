import type {ZodType} from "zod";
import type {BaseComponentProps} from "../component.js";

interface InputProps extends BaseComponentProps
{
    name: string;
    placeholder?: string;
    schema?: ZodType;
    error?: string;
    value?: string;
}

export type{InputProps};