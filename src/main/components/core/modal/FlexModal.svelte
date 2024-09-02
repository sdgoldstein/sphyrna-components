<svelte:options runes={true} />

<script lang="ts">
    import { Dialog as DialogPrimitive} from "bits-ui";
    import type {ParentComponentProps} from "../../component.js"
    import type { Snippet } from "svelte";
    import { X } from "lucide-svelte";

    interface FlexModalProps extends ParentComponentProps {
        open: boolean;
        header?:Snippet;
        footer?:Snippet;
    }

    let {
        open = $bindable(),
        header,
        children,
        footer,
    }: FlexModalProps = $props();
</script>

<DialogPrimitive.Root bind:open>
    <DialogPrimitive.Trigger />
    <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-overlay/50 w-full h-full"/>
        <DialogPrimitive.Content class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-[94%] rounded-lg bg-surface px-8 py-2">
            <div class="flex flex-col">
                <div class="w-full">
                    {@render header?.()}
                </div>
                <div class="w-full">
                    {@render children()}
                </div>
                <div class="w-full">
                    {@render footer?.()}
                </div>
            </div>
            <DialogPrimitive.Close class="absolute right-2 top-2 opacity-70 hover:opacity-100">
                <X size=16 />
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
</DialogPrimitive.Root>