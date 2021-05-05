import { Box, Point } from './types';
/** This method returns true if two boxes intersects
 * @param boxA
 * @param boxB
 */
export declare const boxesIntersect: (boxA: Box, boxB: Box) => boolean;
export declare const calculateSelectionBox: ({ startPoint, endPoint }: {
    startPoint: Point;
    endPoint: Point;
}) => {
    left: number;
    top: number;
    width: number;
    height: number;
};
export declare const calculateBoxArea: (box: Box) => number;
