import type {Snippet} from "svelte";
import type {ThemeableComponentProps} from "../theme/theme.js";

interface BaseComponentProps extends ThemeableComponentProps
{
    id?: string;
    testid?: string;
}

interface ParentComponentProps extends BaseComponentProps
{
    children: Snippet<[ string | undefined, string|undefined ]>;
}

function buildTestId(id: string|undefined, testIdProp: string|undefined): string|undefined
{
    let valueToReturn: string|undefined = undefined;

    if (testIdProp != undefined)
    {
        valueToReturn = testIdProp;
    }
    else if (id != undefined)
    {
        valueToReturn = id.endsWith("id") ? `${id.slice(0, -2)}testid` : `${id}_testid`;
    }

    return valueToReturn;
}

export type{BaseComponentProps, ParentComponentProps};
export {buildTestId};