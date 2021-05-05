import { ReactElement } from 'react';
import { MouseSelectionProps } from '../components/SelectionContainer';
import { useSelectionLogic } from './useSelectionLogic';
import { OnSelectionChange } from '../utils/types';
interface UseSelectionContainerResult {
    /**
     * method to cancel current selecting
     */
    cancelCurrentSelection: ReturnType<typeof useSelectionLogic>['cancelCurrentSelection'];
    /**
     * ReactNode which displays mouse selection. It should be rendered at the top of container of elements we want to select
     */
    DragSelection: () => ReactElement;
}
export interface UseSelectionContainerParams<T extends HTMLElement> {
    onSelectionStart?: () => void;
    onSelectionEnd?: () => void;
    onSelectionChange: OnSelectionChange;
    isEnabled?: boolean;
    selectionProps?: MouseSelectionProps;
    eventsElement?: Window | T | null;
}
/**
 * Use this hook to enable mouse selection on a container.
 * To prevent interfering with drag-n-drop feature, add data-draggable='true' to draggable item. Selection won't fire when click happens on that element
 * @param onSelectionStart method to call when selection starts
 * @param onSelectionEnd method to call when selection ends
 * @param onSelectionChange method to call when selection changes
 * @param enabled if false, mouse selection is disabled (true by default)
 * @param selectionProps mouse selection configuration
 */
export declare function useSelectionContainer<T extends HTMLElement>({ onSelectionChange, onSelectionEnd, onSelectionStart, isEnabled, selectionProps, eventsElement, }: UseSelectionContainerParams<T>): UseSelectionContainerResult;
export {};
