import { RefObject } from 'react';
import { MouseSelectionRef } from '../utils/types';
import { UseSelectionContainerParams } from './useSelectionContainer';
interface UseSelectionLogicResult {
    cancelCurrentSelection: () => void;
}
interface UseSelectionLogicParams<T extends HTMLElement> extends Pick<UseSelectionContainerParams<T>, 'onSelectionChange' | 'onSelectionEnd' | 'onSelectionStart' | 'isEnabled' | 'eventsElement'> {
    containerRef: RefObject<MouseSelectionRef>;
}
/**
 * This hook contains logic for selecting. It starts 'selection' on mousedown event and finishes it on mouseup event.
 * When mousemove event is detected and user is selecting, it calls onSelectionChange and containerRef.drawSelectionBox
 * @param containerRef reference to a component which displays selection
 * @param onSelectionEnd method to call when selection ends
 * @param onSelectionStart method to call when selection starts
 * @param onSelectionChange method to call when selection box is changed. This method is throttled with 150ms
 * @param enabled if false, mousedown event is not attached
 * @param eventsElement element which should listen to mouse events
 */
export declare function useSelectionLogic<T extends HTMLElement>({ containerRef, onSelectionChange, onSelectionStart, onSelectionEnd, isEnabled, eventsElement, }: UseSelectionLogicParams<T>): UseSelectionLogicResult;
export {};
