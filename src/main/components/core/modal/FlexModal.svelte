<svelte:options runes={true} />

<script lang="ts">
    import { Dialog as DialogPrimitive} from "bits-ui";
    import type {ParentComponentProps} from "../../component.js"
    import type { Snippet } from "svelte";

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

<DialogPrimitive.Root bind:open={open}>
    <DialogPrimitive.Trigger />
    <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/80 w-full h-full"/>
            <DialogPrimitive.Content class="fixed left-[50%] top-[50%] z-50 max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-surface pr-8 pl-8 pt-2 pb-2">
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
            <DialogPrimitive.Close class="absolute right-1 top-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98">
              <div class="size-4 text-foreground">
                X 
              </div>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
</DialogPrimitive.Root>