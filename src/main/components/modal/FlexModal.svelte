<script lang="ts">
    import { Dialog as DialogPrimitive } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../component.js";
    import type { Snippet } from "svelte";
    import { X } from "lucide-svelte";

    interface FlexModalProps extends ParentComponentProps {
        open: boolean;
        header?: Snippet<[string | undefined, string | undefined]>;
        footer?: Snippet<[string | undefined, string | undefined]>;
    }

    let {
        id,
        testid: testidProp,
        open = $bindable(),
        header,
        children: providedChildren,
        footer,
    }: FlexModalProps = $props();

    let testId: string | undefined = $derived(buildTestId(id, testidProp));
</script>

<DialogPrimitive.Root bind:open>
    <DialogPrimitive.Trigger />
    <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
            class="fixed inset-0 z-50 bg-overlay/50 w-full h-full"
        />
        <DialogPrimitive.Content
            {id}
            data-testid={testId}
            class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-[94%] min-w-[30%] rounded-lg bg-surface px-8 py-2"
        >
            <div class="flex flex-col">
                <div class="w-full">
                    {@render header?.(id, testId)}
                </div>
                <div class="w-full">
                    {@render providedChildren(id, testId)}
                </div>
                <div class="w-full">
                    {@render footer?.(id, testId)}
                </div>
            </div>
            <DialogPrimitive.Close
                class="absolute right-2 top-2 opacity-70 hover:opacity-100"
            >
                <X size="16" />
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
</DialogPrimitive.Root>
