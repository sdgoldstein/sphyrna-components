<script lang="ts">
    import { DEFAULT_COLOR_CATEGORY_VARIANT } from "../../../theme/theme";
    import { buildTestId } from "../../component";
    import type { DatatableProps } from "./datatable";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        columnDefinitions,
        rowData,
        ...restProps
    }: DatatableProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const tableStyleClass = "w-full text-center border-collapse text-sm";
    const tablwHeadStyleClass = "border-b border-surface-darkest";
    const tableBodyStyleClass = "divide-y d divide-surface-darkest";
</script>

<table class={tableStyleClass} {id} data-testid={testId} {...restProps}>
    <thead class={tablwHeadStyleClass}>
        <tr>
            {#each columnDefinitions as nextColumnDefinition}
                <th>{nextColumnDefinition.columnLabel}</th>
            {/each}
        </tr>
    </thead>
    <tbody class={tableBodyStyleClass}>
        {#each rowData as nextDataRow}
            <tr>
                {#each columnDefinitions as nextColumnDefinition}
                    <td
                        >{nextDataRow.getData(
                            nextColumnDefinition.columnName,
                        )}</td
                    >
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
