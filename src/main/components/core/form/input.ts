import type {ZodType} from "zod";
import type {BaseComponentProps} from "../../component.js";

export interface InputProps extends BaseComponentProps {
    name: string;
    placeholder?: string;
    schema?: ZodType;
    error?: string;
    value?: string;
}