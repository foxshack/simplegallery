/**
 * Options for initializing the simple gallery
 */
export interface SimpleGalleryOptions {
  /**
   * CSS selector for gallery containers
   * @default '.gallery'
   */
  selector?: string;
}

/**
 * Initialize and setup the simple gallery
 * 
 * @param options - Configuration options for the gallery
 * 
 * @example
 * ```typescript
 * import simpleGallery from 'simplegallery';
 * 
 * // Use default selector '.gallery'
 * simpleGallery();
 * 
 * // Use custom selector
 * simpleGallery({ selector: '.my-gallery' });
 * ```
 */
declare function simpleGallery(options?: SimpleGalleryOptions): void;

export default simpleGallery;
