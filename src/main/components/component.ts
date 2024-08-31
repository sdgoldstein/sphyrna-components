import type {Snippet} from 'svelte';
import type {ThemeableComponentProps} from '../theme/theme.js';

interface BaseComponentProps extends ThemeableComponentProps {
  id?: string;
}

interface ParentComponentProps extends BaseComponentProps {
  children: Snippet;
}

export type{BaseComponentProps, ParentComponentProps};