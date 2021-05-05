/**
 * This method checks if current element is draggable - it's 'draggable' prop is true
 * It checks element itself and all its parent until draggable is true or element tagName is body or main
 * @param target
 */
export declare const isElementDraggable: (target: HTMLElement) => boolean;
