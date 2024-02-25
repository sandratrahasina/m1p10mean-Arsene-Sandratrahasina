import {
  NzModalModule,
  NzModalService
} from "./chunk-FSEFCYMU.js";
import {
  NzDrawerModule,
  NzDrawerService
} from "./chunk-YI23FGK5.js";
import {
  NZ_DATE_LOCALE,
  NzI18nModule,
  NzI18nService,
  provideNzI18n
} from "./chunk-2X2DHHBW.js";
import {
  addDays,
  addSeconds,
  differenceInCalendarDays,
  format,
  formatDistanceToNow,
  parse,
  parseISO
} from "./chunk-XRNNFB2N.js";
import {
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-IPKUYFYL.js";
import {
  ACLService
} from "./chunk-Y4W7AVST.js";
import {
  CdkScrollableModule,
  OverlayModule,
  ScrollDispatcher,
  ViewportRuler
} from "./chunk-Z4GMGEHN.js";
import {
  NzIconService
} from "./chunk-3MXKVZO7.js";
import {
  BellOutline,
  DeleteOutline,
  InboxOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  PlusOutline
} from "./chunk-5QBFNWJX.js";
import {
  NzConfigService
} from "./chunk-6WPOZNJ5.js";
import {
  coerceArray,
  coerceElement,
  coerceNumberProperty
} from "./chunk-YORGFY4X.js";
import {
  Directionality
} from "./chunk-DSM4JBCF.js";
import {
  takeUntilDestroyed
} from "./chunk-YWFK6PYB.js";
import {
  ALAIN_CONFIG,
  AlainConfigService,
  deepMerge
} from "./chunk-Q3BVRUJT.js";
import {
  Platform,
  _getEventTarget,
  _getShadowRoot,
  normalizePassiveListenerOptions
} from "./chunk-B7EG4KFO.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-TQFAWZD6.js";
import {
  DomSanitizer,
  Title
} from "./chunk-BPMU3QPJ.js";
import {
  HttpClient,
  HttpContextToken,
  HttpParams
} from "./chunk-TECWR7MN.js";
import {
  CommonModule,
  DOCUMENT,
  isPlatformServer,
  registerLocaleData
} from "./chunk-WL36VPKJ.js";
import {
  ChangeDetectorRef,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  LOCALE_ID,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Self,
  SkipSelf,
  TemplateRef,
  Version,
  ViewContainerRef,
  booleanAttribute,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵqueryRefresh
} from "./chunk-T4EVUEAM.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  animationFrameScheduler,
  catchError,
  delay,
  filter,
  finalize,
  interval,
  isObservable,
  map,
  merge,
  of,
  share,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError
} from "./chunk-JKR55PDT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  constructor(_document) {
    this._document = _document;
    this.positions = /* @__PURE__ */ new Map();
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var activeEventListenerOptions = normalizePassiveListenerOptions({
  passive: false
});
var MOUSE_EVENT_IGNORE_TIME = 800;
var dragImportantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var DragRef = class {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._passiveTransform = {
      x: 0,
      y: 0
    };
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._hasStartedDragging = false;
    this._moveEvents = new Subject();
    this._pointerMoveSubscription = Subscription.EMPTY;
    this._pointerUpSubscription = Subscription.EMPTY;
    this._scrollSubscription = Subscription.EMPTY;
    this._resizeSubscription = Subscription.EMPTY;
    this._boundaryElement = null;
    this._nativeInteractionsEnabled = true;
    this._handles = [];
    this._disabledHandles = /* @__PURE__ */ new Set();
    this._direction = "ltr";
    this.dragStartDelay = 0;
    this._disabled = false;
    this.beforeStarted = new Subject();
    this.started = new Subject();
    this.released = new Subject();
    this.ended = new Subject();
    this.entered = new Subject();
    this.exited = new Subject();
    this.dropped = new Subject();
    this.moved = this._moveEvents;
    this._pointerDown = (event) => {
      this.beforeStarted.next();
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    this._pointerMove = (event) => {
      const pointerPosition = this._getPointerPositionOnPage(event);
      if (!this._hasStartedDragging) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
          const container = this._dropContainer;
          if (!isDelayElapsed) {
            this._endDragSequence(event);
            return;
          }
          if (!container || !container.isDragging() && !container.isReceiving()) {
            event.preventDefault();
            this._hasStartedDragging = true;
            this._ngZone.run(() => this._startDragSequence(event));
          }
        }
        return;
      }
      event.preventDefault();
      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;
      this._updatePointerDirectionDelta(constrainedPointerPosition);
      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
      }
      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    this._pointerUp = (event) => {
      this._endDragSequence(event);
    };
    this._nativeDragStart = (event) => {
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          event.preventDefault();
        }
      } else if (!this.disabled) {
        event.preventDefault();
      }
    };
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }
      this._ngZone.runOutsideAngular(() => {
        element.addEventListener("mousedown", this._pointerDown, activeEventListenerOptions);
        element.addEventListener("touchstart", this._pointerDown, passiveEventListenerOptions);
        element.addEventListener("dragstart", this._nativeDragStart, activeEventListenerOptions);
      });
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners(this._rootElement);
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._anchor?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeSubscriptions();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeSubscriptions() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.remove();
    this._previewRef?.destroy();
    this._preview = this._previewRef = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeSubscriptions();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const dropContainer = this._dropContainer;
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const anchor = this._anchor = this._anchor || this._document.createComment("");
      const shadowRoot = this._getShadowRoot();
      parent.insertBefore(anchor, element);
      this._initialTransform = element.style.transform || "";
      this._preview = this._createPreviewElement();
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this._getPreviewInsertionPoint(parent, shadowRoot).appendChild(this._preview);
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasStartedDragging = this._hasMoved = false;
    this._removeSubscriptions();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Creates the element that will be rendered next to the user's pointer
   * and will be used as a preview of the element that is being dragged.
   */
  _createPreviewElement() {
    const previewConfig = this._previewTemplate;
    const previewClass = this.previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewRef = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      "pointer-events": "none",
      // We have to reset the margin, because it can throw off positioning relative to the viewport.
      "margin": "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": `${this._config.zIndex || 1e3}`
    }, dragImportantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.classList.add("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = getTransformTransitionDurationInMs(this._preview);
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || _getEventTarget(event) === this._preview && event.propertyName === "transform") {
            this._preview?.removeEventListener("transitionend", handler);
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add("cdk-drag-placeholder");
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? (
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
      // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
      // to have a value, but Firefox in device emulation mode has a bug where both can be empty
      // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
      // throwing an error. The value returned here will be incorrect, but since this only
      // breaks inside a developer tool and the value is only used for secondary information,
      // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
      event.touches[0] || event.changedTouches[0] || {
        pageX: 0,
        pageY: 0
      }
    ) : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners(element) {
    element.removeEventListener("mousedown", this._pointerDown, activeEventListenerOptions);
    element.removeEventListener("touchstart", this._pointerDown, passiveEventListenerOptions);
    element.removeEventListener("dragstart", this._nativeDragStart, activeEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const transform = getTransform(x, y);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.style.transform = combineTransforms(transform, initialTransform);
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
};
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  constructor(_element, _dragDropRegistry) {
    this._element = _element;
    this._dragDropRegistry = _dragDropRegistry;
    this._itemPositions = [];
    this.orientation = "vertical";
    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${Math.round(sibling.offset)}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${Math.round(sibling.offset)}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ? (
      // We use the coordinates of where the item entered the drop
      // zone to figure out at which index it should be inserted.
      this._getItemIndexFromPointerPosition(item, pointerX, pointerY)
    ) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      coerceElement(this._element).appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    this._activeDraggables.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    const items = this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex((currentItem) => currentItem.drag === item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? (
        // Round these down since most browsers report client rects with
        // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
        pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right)
      ) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
var DropListRef = class {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this.disabled = false;
    this.sortingDisabled = false;
    this.autoScrollDisabled = false;
    this.autoScrollStep = 2;
    this.enterPredicate = () => true;
    this.sortPredicate = () => true;
    this.beforeStarted = new Subject();
    this.entered = new Subject();
    this.exited = new Subject();
    this.dropped = new Subject();
    this.sorted = new Subject();
    this.receivingStarted = new Subject();
    this.receivingStopped = new Subject();
    this._isDragging = false;
    this._draggables = [];
    this._siblings = [];
    this._activeSiblings = /* @__PURE__ */ new Set();
    this._viewportScrollSubscription = Subscription.EMPTY;
    this._verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    this._horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._stopScrollTimers = new Subject();
    this._cachedShadowRoot = null;
    this._startScrollInterval = () => {
      this._stopScrolling();
      interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;
        if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
          node.scrollBy(0, -scrollStep);
        } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
          node.scrollBy(0, scrollStep);
        }
        if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
          node.scrollBy(-scrollStep, 0);
        } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
          node.scrollBy(scrollStep, 0);
        }
      });
    };
    this.element = coerceElement(element);
    this._document = _document;
    this.withScrollableParents([this.element]);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
    this._sortStrategy = new SingleAxisSortStrategy(this.element, _dragDropRegistry);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._sortStrategy.direction = direction;
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    this._sortStrategy.orientation = orientation;
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = coerceElement(this.element);
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._sortStrategy.direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = coerceElement(this.element).style;
    this.beforeStarted.next();
    this._isDragging = true;
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    const element = coerceElement(this.element);
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(element).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = coerceElement(this.element).style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    const nativeElement = coerceElement(this.element);
    return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(coerceElement(this.element));
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var activeCapturingEventOptions = normalizePassiveListenerOptions({
  passive: false,
  capture: true
});
var _DragDropRegistry = class _DragDropRegistry {
  constructor(_ngZone, _document) {
    this._ngZone = _ngZone;
    this._dropInstances = /* @__PURE__ */ new Set();
    this._dragInstances = /* @__PURE__ */ new Set();
    this._activeDragInstances = [];
    this._globalListeners = /* @__PURE__ */ new Map();
    this._draggingPredicate = (item) => item.isDragging();
    this.pointerMove = new Subject();
    this.pointerUp = new Subject();
    this.scroll = new Subject();
    this._preventDefaultWhileDragging = (event) => {
      if (this._activeDragInstances.length > 0) {
        event.preventDefault();
      }
    };
    this._persistentTouchmoveListener = (event) => {
      if (this._activeDragInstances.length > 0) {
        if (this._activeDragInstances.some(this._draggingPredicate)) {
          event.preventDefault();
        }
        this.pointerMove.next(event);
      }
    };
    this._document = _document;
  }
  /** Adds a drop container to the registry. */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._document.addEventListener("touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._document.removeEventListener("touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */
  startDragging(drag, event) {
    if (this._activeDragInstances.indexOf(drag) > -1) {
      return;
    }
    this._activeDragInstances.push(drag);
    if (this._activeDragInstances.length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      this._globalListeners.set(isTouchEvent2 ? "touchend" : "mouseup", {
        handler: (e) => this.pointerUp.next(e),
        options: true
      }).set("scroll", {
        handler: (e) => this.scroll.next(e),
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        options: true
      }).set("selectstart", {
        handler: this._preventDefaultWhileDragging,
        options: activeCapturingEventOptions
      });
      if (!isTouchEvent2) {
        this._globalListeners.set("mousemove", {
          handler: (e) => this.pointerMove.next(e),
          options: activeCapturingEventOptions
        });
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners.forEach((config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }
  /** Stops dragging a drag item instance. */
  stopDragging(drag) {
    const index = this._activeDragInstances.indexOf(drag);
    if (index > -1) {
      this._activeDragInstances.splice(index, 1);
      if (this._activeDragInstances.length === 0) {
        this._clearGlobalListeners();
      }
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */
  isDragging(drag) {
    return this._activeDragInstances.indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */
  scrolled(shadowRoot) {
    const streams = [this.scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const eventOptions = true;
          const callback = (event) => {
            if (this._activeDragInstances.length) {
              observer.next(event);
            }
          };
          shadowRoot.addEventListener("scroll", callback, eventOptions);
          return () => {
            shadowRoot.removeEventListener("scroll", callback, eventOptions);
          };
        });
      }));
    }
    return merge(...streams);
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /** Clears out the global event listeners from the `document`. */
  _clearGlobalListeners() {
    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });
    this._globalListeners.clear();
  }
};
_DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
  return new (t || _DragDropRegistry)(ɵɵinject(NgZone), ɵɵinject(DOCUMENT));
};
_DragDropRegistry.ɵprov = ɵɵdefineInjectable({
  token: _DragDropRegistry,
  factory: _DragDropRegistry.ɵfac,
  providedIn: "root"
});
var DragDropRegistry = _DragDropRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
var _DragDrop = class _DragDrop {
  constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
};
_DragDrop.ɵfac = function DragDrop_Factory(t) {
  return new (t || _DragDrop)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone), ɵɵinject(ViewportRuler), ɵɵinject(DragDropRegistry));
};
_DragDrop.ɵprov = ɵɵdefineInjectable({
  token: _DragDrop,
  factory: _DragDrop.ɵfac,
  providedIn: "root"
});
var DragDrop = _DragDrop;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: ViewportRuler
  }, {
    type: DragDropRegistry
  }], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var _CdkDragHandle = class _CdkDragHandle {
  /** Whether starting to drag through this handle is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  constructor(element, parentDrag) {
    this.element = element;
    this._stateChanges = new Subject();
    this._disabled = false;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag = parentDrag;
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
};
_CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
  return new (t || _CdkDragHandle)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CDK_DRAG_PARENT, 12));
};
_CdkDragHandle.ɵdir = ɵɵdefineDirective({
  type: _CdkDragHandle,
  selectors: [["", "cdkDragHandle", ""]],
  hostAttrs: [1, "cdk-drag-handle"],
  inputs: {
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkDragHandleDisabled", "disabled", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DRAG_HANDLE,
    useExisting: _CdkDragHandle
  }]), ɵɵInputTransformsFeature]
});
var CdkDragHandle = _CdkDragHandle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      standalone: true,
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_DRAG_PARENT]
    }, {
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var _CdkDragPlaceholder = class _CdkDragPlaceholder {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
_CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
  return new (t || _CdkDragPlaceholder)(ɵɵdirectiveInject(TemplateRef));
};
_CdkDragPlaceholder.ɵdir = ɵɵdefineDirective({
  type: _CdkDragPlaceholder,
  selectors: [["ng-template", "cdkDragPlaceholder", ""]],
  inputs: {
    data: "data"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DRAG_PLACEHOLDER,
    useExisting: _CdkDragPlaceholder
  }])]
});
var CdkDragPlaceholder = _CdkDragPlaceholder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [{
    type: TemplateRef
  }], {
    data: [{
      type: Input
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var _CdkDragPreview = class _CdkDragPreview {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this.matchSize = false;
  }
};
_CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
  return new (t || _CdkDragPreview)(ɵɵdirectiveInject(TemplateRef));
};
_CdkDragPreview.ɵdir = ɵɵdefineDirective({
  type: _CdkDragPreview,
  selectors: [["ng-template", "cdkDragPreview", ""]],
  inputs: {
    data: "data",
    matchSize: [InputFlags.HasDecoratorInputTransform, "matchSize", "matchSize", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DRAG_PREVIEW,
    useExisting: _CdkDragPreview
  }]), ɵɵInputTransformsFeature]
});
var CdkDragPreview = _CdkDragPreview;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [{
    type: TemplateRef
  }], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var DRAG_HOST_CLASS = "cdk-drag";
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var _CdkDrag = class _CdkDrag {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || this.dropContainer && this.dropContainer.disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  constructor(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
    this.element = element;
    this.dropContainer = dropContainer;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._selfHandle = _selfHandle;
    this._parentDrag = _parentDrag;
    this._destroyed = new Subject();
    this.started = new EventEmitter();
    this.released = new EventEmitter();
    this.ended = new EventEmitter();
    this.entered = new EventEmitter();
    this.exited = new EventEmitter();
    this.dropped = new EventEmitter();
    this.moved = new Observable((observer) => {
      const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);
      return () => {
        subscription.unsubscribe();
      };
    });
    this._dragRef = dragDrop.createDrag(element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    _CdkDrag._dragInstances.push(this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);
      dropContainer.addItem(this);
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1), takeUntil(this._destroyed)).subscribe(() => {
        this._updateRootElement();
        this._setupHandlesListener();
        if (this.freeDragPosition) {
          this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
      });
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    const index = _CdkDrag._dragInstances.indexOf(this);
    if (index > -1) {
      _CdkDrag._dragInstances.splice(index, 1);
    }
    this._ngZone.runOutsideAngular(() => {
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  /** Syncs the root element with the `DragRef`. */
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : (
        // Comment tag doesn't have closest method, so use parent's one.
        element.parentElement?.closest(this.rootElementSelector)
      );
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        if (parent.classList.contains(DRAG_HOST_CLASS)) {
          ref.withParent(_CdkDrag._dragInstances.find((drag) => {
            return drag.element.nativeElement === parent;
          })?._dragRef || null);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */
  _setupHandlesListener() {
    this._handles.changes.pipe(
      startWith(this._handles),
      // Sync the new handles with the DragRef.
      tap((handles) => {
        const childHandleElements = handles.filter((handle) => handle._parentDrag === this).map((handle) => handle.element);
        if (this._selfHandle && this.rootElementSelector) {
          childHandleElements.push(this.element);
        }
        this._dragRef.withHandles(childHandleElements);
      }),
      // Listen if the state of any of the handles changes.
      switchMap((handles) => {
        return merge(...handles.map((item) => {
          return item._stateChanges.pipe(startWith(item));
        }));
      }),
      takeUntil(this._destroyed)
    ).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
};
_CdkDrag._dragInstances = [];
_CdkDrag.ɵfac = function CdkDrag_Factory(t) {
  return new (t || _CdkDrag)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CDK_DROP_LIST, 12), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_DRAG_CONFIG, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(DragDrop), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(CDK_DRAG_HANDLE, 10), ɵɵdirectiveInject(CDK_DRAG_PARENT, 12));
};
_CdkDrag.ɵdir = ɵɵdefineDirective({
  type: _CdkDrag,
  selectors: [["", "cdkDrag", ""]],
  contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CDK_DRAG_PREVIEW, 5);
      ɵɵcontentQuery(dirIndex, CDK_DRAG_PLACEHOLDER, 5);
      ɵɵcontentQuery(dirIndex, CDK_DRAG_HANDLE, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._previewTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._placeholderTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._handles = _t);
    }
  },
  hostAttrs: [1, "cdk-drag"],
  hostVars: 4,
  hostBindings: function CdkDrag_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    }
  },
  inputs: {
    data: [InputFlags.None, "cdkDragData", "data"],
    lockAxis: [InputFlags.None, "cdkDragLockAxis", "lockAxis"],
    rootElementSelector: [InputFlags.None, "cdkDragRootElement", "rootElementSelector"],
    boundaryElement: [InputFlags.None, "cdkDragBoundary", "boundaryElement"],
    dragStartDelay: [InputFlags.None, "cdkDragStartDelay", "dragStartDelay"],
    freeDragPosition: [InputFlags.None, "cdkDragFreeDragPosition", "freeDragPosition"],
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkDragDisabled", "disabled", booleanAttribute],
    constrainPosition: [InputFlags.None, "cdkDragConstrainPosition", "constrainPosition"],
    previewClass: [InputFlags.None, "cdkDragPreviewClass", "previewClass"],
    previewContainer: [InputFlags.None, "cdkDragPreviewContainer", "previewContainer"]
  },
  outputs: {
    started: "cdkDragStarted",
    released: "cdkDragReleased",
    ended: "cdkDragEnded",
    entered: "cdkDragEntered",
    exited: "cdkDragExited",
    dropped: "cdkDragDropped",
    moved: "cdkDragMoved"
  },
  exportAs: ["cdkDrag"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DRAG_PARENT,
    useExisting: _CdkDrag
  }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var CdkDrag = _CdkDrag;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      standalone: true,
      host: {
        "class": DRAG_HOST_CLASS,
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_DROP_LIST]
    }, {
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DRAG_CONFIG]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DragDrop
  }, {
    type: ChangeDetectorRef
  }, {
    type: CdkDragHandle,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [CDK_DRAG_HANDLE]
    }]
  }, {
    type: CdkDrag,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [CDK_DRAG_PARENT]
    }]
  }], {
    _handles: [{
      type: ContentChildren,
      args: [CDK_DRAG_HANDLE, {
        descendants: true
      }]
    }],
    _previewTemplate: [{
      type: ContentChild,
      args: [CDK_DRAG_PREVIEW]
    }],
    _placeholderTemplate: [{
      type: ContentChild,
      args: [CDK_DRAG_PLACEHOLDER]
    }],
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var _CdkDropListGroup = class _CdkDropListGroup {
  constructor() {
    this._items = /* @__PURE__ */ new Set();
    this.disabled = false;
  }
  ngOnDestroy() {
    this._items.clear();
  }
};
_CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
  return new (t || _CdkDropListGroup)();
};
_CdkDropListGroup.ɵdir = ɵɵdefineDirective({
  type: _CdkDropListGroup,
  selectors: [["", "cdkDropListGroup", ""]],
  inputs: {
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
  },
  exportAs: ["cdkDropListGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DROP_LIST_GROUP,
    useExisting: _CdkDropListGroup
  }]), ɵɵInputTransformsFeature]
});
var CdkDropListGroup = _CdkDropListGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      standalone: true,
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _uniqueIdCounter = 0;
var _CdkDropList = class _CdkDropList {
  /** Whether starting a dragging sequence from this container is disabled. */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  constructor(element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._dir = _dir;
    this._group = _group;
    this._destroyed = new Subject();
    this.connectedTo = [];
    this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
    this.enterPredicate = () => true;
    this.sortPredicate = () => true;
    this.dropped = new EventEmitter();
    this.entered = new EventEmitter();
    this.exited = new EventEmitter();
    this.sorted = new EventEmitter();
    this._unsortedItems = /* @__PURE__ */ new Set();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(element.nativeElement, "cdkDropList");
    }
    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (_group) {
      _group._items.add(this);
    }
  }
  /** Registers an items with the drop list. */
  addItem(item) {
    this._unsortedItems.add(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Removes an item from the drop list. */
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef();
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */
  _syncItemsWithRef() {
    this._dropListRef.withItems(this.getSortedItems().map((item) => item._dragRef));
  }
};
_CdkDropList._dropLists = [];
_CdkDropList.ɵfac = function CdkDropList_Factory(t) {
  return new (t || _CdkDropList)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DragDrop), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(CDK_DROP_LIST_GROUP, 12), ɵɵdirectiveInject(CDK_DRAG_CONFIG, 8));
};
_CdkDropList.ɵdir = ɵɵdefineDirective({
  type: _CdkDropList,
  selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
  hostAttrs: [1, "cdk-drop-list"],
  hostVars: 7,
  hostBindings: function CdkDropList_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id);
      ɵɵclassProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    }
  },
  inputs: {
    connectedTo: [InputFlags.None, "cdkDropListConnectedTo", "connectedTo"],
    data: [InputFlags.None, "cdkDropListData", "data"],
    orientation: [InputFlags.None, "cdkDropListOrientation", "orientation"],
    id: "id",
    lockAxis: [InputFlags.None, "cdkDropListLockAxis", "lockAxis"],
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkDropListDisabled", "disabled", booleanAttribute],
    sortingDisabled: [InputFlags.HasDecoratorInputTransform, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
    enterPredicate: [InputFlags.None, "cdkDropListEnterPredicate", "enterPredicate"],
    sortPredicate: [InputFlags.None, "cdkDropListSortPredicate", "sortPredicate"],
    autoScrollDisabled: [InputFlags.HasDecoratorInputTransform, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
    autoScrollStep: [InputFlags.None, "cdkDropListAutoScrollStep", "autoScrollStep"]
  },
  outputs: {
    dropped: "cdkDropListDropped",
    entered: "cdkDropListEntered",
    exited: "cdkDropListExited",
    sorted: "cdkDropListSorted"
  },
  exportAs: ["cdkDropList"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    // Prevent child drop lists from picking up the same group as their parent.
    {
      provide: CDK_DROP_LIST_GROUP,
      useValue: void 0
    },
    {
      provide: CDK_DROP_LIST,
      useExisting: _CdkDropList
    }
  ]), ɵɵInputTransformsFeature]
});
var CdkDropList = _CdkDropList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      standalone: true,
      providers: [
        // Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: void 0
        },
        {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }
      ],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DragDrop
  }, {
    type: ChangeDetectorRef
  }, {
    type: ScrollDispatcher
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: CdkDropListGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DROP_LIST_GROUP]
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DRAG_CONFIG]
    }]
  }], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var _DragDropModule = class _DragDropModule {
};
_DragDropModule.ɵfac = function DragDropModule_Factory(t) {
  return new (t || _DragDropModule)();
};
_DragDropModule.ɵmod = ɵɵdefineNgModule({
  type: _DragDropModule,
  imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
  exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
});
_DragDropModule.ɵinj = ɵɵdefineInjector({
  providers: [DragDrop],
  imports: [CdkScrollableModule]
});
var DragDropModule = _DragDropModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// node_modules/@delon/util/fesm2022/date-time.mjs
function toDate(value, options) {
  const { formatString, defaultValue, timestampSecond } = __spreadValues({
    formatString: "yyyy-MM-dd HH:mm:ss",
    defaultValue: /* @__PURE__ */ new Date(NaN),
    timestampSecond: false
  }, typeof options === "string" ? { formatString: options } : options);
  if (value == null) {
    return defaultValue;
  }
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === "number" || typeof value === "string" && /^[0-9]+$/.test(value)) {
    const valueNumber = +value;
    return new Date(timestampSecond ? valueNumber * 1e3 : valueNumber);
  }
  let tryDate = parseISO(value);
  if (isNaN(tryDate)) {
    tryDate = parse(value, formatString, /* @__PURE__ */ new Date());
  }
  return isNaN(tryDate) ? defaultValue : tryDate;
}
function formatDate(value, formatString, dateLocale) {
  value = toDate(value);
  if (isNaN(value))
    return "";
  const langOpt = { locale: dateLocale };
  return formatString === "fn" ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
}
var DateTimePickerUtil = class {
  /**
   * Current local time
   *
   * 当前本地时间
   */
  get now() {
    return /* @__PURE__ */ new Date();
  }
  /**
   * Current local date (not including time part)
   *
   * 当前本地日期（不包含时间部分）
   */
  get date() {
    return this.removeTime(this.now);
  }
  /**
   * Remove the time part of the date
   *
   * 移除日期的时间部分
   */
  removeTime(d) {
    return new Date(d.toDateString());
  }
  /**
   * Format date-time
   *
   * 格式化日期
   */
  format(d, formatString = "yyyy-MM-dd HH:mm:ss") {
    return format(d, formatString);
  }
  genTick(count) {
    return new Array(count).fill(0).map((_, idx) => idx);
  }
  /**
   * Calculate the number of days between two dates, `0` means the same day
   *
   * 计算两个日期相差天数，`0` 表示同一天
   */
  getDiffDays(dateLeft, dateRight) {
    return differenceInCalendarDays(dateLeft, typeof dateRight === "number" ? addDays(this.date, dateRight) : dateRight || this.date);
  }
  /**
   * Disabled Before date (Default: today), Generally serves `nzDisabledDate`
   *
   * 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
   */
  disabledBeforeDate(options) {
    return (d) => this.getDiffDays(d, options?.offsetDays) < 0;
  }
  /**
   * Disabled After date (Default: today), Generally serves `nzDisabledDate`
   *
   * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
   */
  disabledAfterDate(options) {
    return (d) => this.getDiffDays(d, options?.offsetDays) > 0;
  }
  baseDisabledTime(type, offsetSeconds) {
    const tick24 = this.genTick(24);
    const tick60 = this.genTick(60);
    return (current) => {
      const cur = current;
      if (cur == null) {
        return {};
      }
      const now = addSeconds(this.now, offsetSeconds || 0);
      const nowHours = now.getHours();
      const nowMinutes = now.getMinutes();
      const curHours = cur.getHours();
      const isToday = this.getDiffDays(this.removeTime(cur)) === 0;
      return {
        nzDisabledHours: () => {
          if (!isToday)
            return [];
          return type === "before" ? tick24.slice(0, nowHours) : tick24.slice(nowHours + 1);
        },
        nzDisabledMinutes: () => {
          if (isToday && curHours === nowHours) {
            return type === "before" ? tick60.slice(0, nowMinutes) : tick60.slice(nowMinutes + 1);
          }
          return [];
        },
        nzDisabledSeconds: () => {
          if (isToday && curHours === nowHours && cur.getMinutes() === nowMinutes) {
            const nowSeconds = now.getSeconds();
            return type === "before" ? tick60.slice(0, nowSeconds) : tick60.slice(nowSeconds + 1);
          }
          return [];
        }
      };
    };
  }
  /**
   * Disabled Before time (Default: now), Generally serves `nzDisabledTime`
   *
   * 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
   */
  disabledBeforeTime(options) {
    return this.baseDisabledTime("before", options?.offsetSeconds);
  }
  /**
   * Disabled After time (Default: now), Generally serves `nzDisabledTime`
   *
   * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
   */
  disabledAfterTime(options) {
    return this.baseDisabledTime("after", options?.offsetSeconds);
  }
};
var dateTimePickerUtil = new DateTimePickerUtil();

// node_modules/@delon/theme/fesm2022/theme.mjs
function stepPreloader() {
  const doc = inject(DOCUMENT);
  const ssr = isPlatformServer(inject(PLATFORM_ID));
  if (ssr) {
    return () => {
    };
  }
  const body = doc.querySelector("body");
  body.style.overflow = "hidden";
  let done = false;
  return () => {
    if (done)
      return;
    done = true;
    const preloader = doc.querySelector(".preloader");
    if (preloader == null)
      return;
    const CLS = "preloader-hidden";
    preloader.addEventListener("transitionend", () => {
      preloader.className = CLS;
    });
    preloader.className += ` ${CLS}-add ${CLS}-add-active`;
    body.style.overflow = "";
  };
}
var ALAIN_I18N_TOKEN = new InjectionToken("alainI18nToken", {
  providedIn: "root",
  factory: () => new AlainI18NServiceFake(inject(AlainConfigService))
});
var _AlainI18nBaseService = class _AlainI18nBaseService {
  get change() {
    return this._change$.asObservable().pipe(filter((w) => w != null));
  }
  get defaultLang() {
    return this._defaultLang;
  }
  get currentLang() {
    return this._currentLang;
  }
  get data() {
    return this._data;
  }
  constructor(cogSrv) {
    this._change$ = new BehaviorSubject(null);
    this._currentLang = "";
    this._defaultLang = "";
    this._data = {};
    this.cog = cogSrv.merge("themeI18n", {
      interpolation: ["{{", "}}"]
    });
  }
  /**
   * Flattened data source
   *
   * @example
   * {
   *   "name": "Name",
   *   "sys": {
   *     "": "System",
   *     "title": "Title"
   *   }
   * }
   * =>
   * {
   *   "name": "Name",
   *   "sys": "System",
   *   "sys.title": "Title"
   * }
   */
  flatData(data, parentKey) {
    const res = {};
    for (const key of Object.keys(data)) {
      const value = data[key];
      if (typeof value === "object") {
        const child = this.flatData(value, parentKey.concat(key));
        Object.keys(child).forEach((childKey) => res[childKey] = child[childKey]);
      } else {
        res[(key ? parentKey.concat(key) : parentKey).join(".")] = `${value}`;
      }
    }
    return res;
  }
  fanyi(path, params) {
    let content = this._data[path] || "";
    if (!content)
      return path;
    if (!params)
      return content;
    if (typeof params === "object") {
      const interpolation = this.cog.interpolation;
      const objParams = params;
      Object.keys(objParams).forEach((key) => content = content.replace(new RegExp(`${interpolation[0]}\\s?${key}\\s?${interpolation[1]}`, "g"), `${objParams[key]}`));
    }
    (Array.isArray(params) ? params : [params]).forEach((item, index) => content = content.replace(new RegExp(`\\{\\s?${index}\\s?\\}`, "g"), `${item}`));
    return content;
  }
};
_AlainI18nBaseService.ɵfac = function AlainI18nBaseService_Factory(t) {
  return new (t || _AlainI18nBaseService)(ɵɵinject(AlainConfigService));
};
_AlainI18nBaseService.ɵprov = ɵɵdefineInjectable({
  token: _AlainI18nBaseService,
  factory: _AlainI18nBaseService.ɵfac
});
var AlainI18nBaseService = _AlainI18nBaseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlainI18nBaseService, [{
    type: Injectable
  }], () => [{
    type: AlainConfigService
  }], null);
})();
var _AlainI18NServiceFake = class _AlainI18NServiceFake extends AlainI18nBaseService {
  use(lang, data) {
    this._data = this.flatData(data ?? {}, []);
    this._currentLang = lang;
    this._change$.next(lang);
  }
  getLangs() {
    return [];
  }
};
_AlainI18NServiceFake.ɵfac = /* @__PURE__ */ (() => {
  let ɵAlainI18NServiceFake_BaseFactory;
  return function AlainI18NServiceFake_Factory(t) {
    return (ɵAlainI18NServiceFake_BaseFactory || (ɵAlainI18NServiceFake_BaseFactory = ɵɵgetInheritedFactory(_AlainI18NServiceFake)))(t || _AlainI18NServiceFake);
  };
})();
_AlainI18NServiceFake.ɵprov = ɵɵdefineInjectable({
  token: _AlainI18NServiceFake,
  factory: _AlainI18NServiceFake.ɵfac,
  providedIn: "root"
});
var AlainI18NServiceFake = _AlainI18NServiceFake;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlainI18NServiceFake, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MenuService = class _MenuService {
  constructor() {
    this.i18nSrv = inject(ALAIN_I18N_TOKEN, {
      optional: true
    });
    this.aclService = inject(ACLService, {
      optional: true
    });
    this._change$ = new BehaviorSubject([]);
    this.data = [];
    this.openStrictly = false;
    this.i18n$ = this.i18nSrv?.change.subscribe(() => this.resume());
  }
  get change() {
    return this._change$.pipe(share());
  }
  get menus() {
    return this.data;
  }
  visit(data, callback) {
    const inFn = (list, parentMenu, depth) => {
      for (const item of list) {
        callback(item, parentMenu, depth);
        if (item.children && item.children.length > 0) {
          inFn(item.children, item, depth + 1);
        } else {
          item.children = [];
        }
      }
    };
    inFn(data, null, 0);
  }
  add(items) {
    this.data = items;
    this.resume();
  }
  fixItem(item) {
    item._aclResult = true;
    if (!item.link)
      item.link = "";
    if (!item.externalLink)
      item.externalLink = "";
    if (item.badge) {
      if (item.badgeDot !== true) {
        item.badgeDot = false;
      }
      if (!item.badgeStatus) {
        item.badgeStatus = "error";
      }
    }
    if (!Array.isArray(item.children)) {
      item.children = [];
    }
    if (typeof item.icon === "string") {
      let type = "class";
      let value = item.icon;
      if (~item.icon.indexOf(`anticon-`)) {
        type = "icon";
        value = value.split("-").slice(1).join("-");
      } else if (/^https?:\/\//.test(item.icon)) {
        type = "img";
      }
      item.icon = {
        type,
        value
      };
    }
    if (item.icon != null) {
      item.icon = __spreadValues({
        theme: "outline",
        spin: false
      }, item.icon);
    }
    item.text = item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;
    item.group = item.group !== false;
    item._hidden = typeof item.hide === "undefined" ? false : item.hide;
    item.disabled = typeof item.disabled === "undefined" ? false : item.disabled;
    item._aclResult = item.acl && this.aclService ? this.aclService.can(item.acl) : true;
    item.open = item.open != null ? item.open : false;
  }
  resume(callback) {
    let i = 1;
    const shortcuts = [];
    this.visit(this.data, (item, parent, depth) => {
      item._id = i++;
      item._parent = parent;
      item._depth = depth;
      this.fixItem(item);
      if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
        shortcuts.push(item);
      }
      if (callback)
        callback(item, parent, depth);
    });
    this.loadShortcut(shortcuts);
    this._change$.next(this.data);
  }
  /**
   * 加载快捷菜单，加载位置规则如下：
   * 1、统一在下标0的节点下（即【主导航】节点下方）
   *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
   *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
   *      3、否则放在0节点位置
   */
  loadShortcut(shortcuts) {
    if (shortcuts.length === 0 || this.data.length === 0) {
      return;
    }
    const ls = this.data[0].children;
    let pos = ls.findIndex((w) => w.shortcutRoot === true);
    if (pos === -1) {
      pos = ls.findIndex((w) => w.link.includes("dashboard"));
      pos = (pos !== -1 ? pos : -1) + 1;
      const shortcutMenu = {
        text: "快捷菜单",
        i18n: "shortcut",
        icon: "icon-rocket",
        children: []
      };
      this.data[0].children.splice(pos, 0, shortcutMenu);
    }
    let _data = this.data[0].children[pos];
    if (_data.i18n && this.i18nSrv)
      _data.text = this.i18nSrv.fanyi(_data.i18n);
    _data = Object.assign(_data, {
      shortcutRoot: true,
      _id: -1,
      _parent: null,
      _depth: 1
    });
    _data.children = shortcuts.map((i) => {
      i._depth = 2;
      i._parent = _data;
      return i;
    });
  }
  /**
   * 清空菜单
   */
  clear() {
    this.data = [];
    this._change$.next(this.data);
  }
  /**
   * Use `url` or `key` to find menus
   *
   * 利用 `url` 或 `key` 查找菜单
   */
  find(options) {
    const opt = __spreadValues({
      recursive: false,
      ignoreHide: false
    }, options);
    if (opt.key != null) {
      return this.getItem(opt.key);
    }
    let url = opt.url;
    let item = null;
    while (!item && url) {
      this.visit(opt.data ?? this.data, (i) => {
        if (opt.ignoreHide && i.hide) {
          return;
        }
        if (opt.cb) {
          const res = opt.cb(i);
          if (!item && typeof res === "boolean" && res) {
            item = i;
          }
        }
        if (i.link != null && i.link === url) {
          item = i;
        }
      });
      if (!opt.recursive)
        break;
      if (/[?;]/g.test(url)) {
        url = url.split(/[?;]/g)[0];
      } else {
        url = url.split("/").slice(0, -1).join("/");
      }
    }
    return item;
  }
  /**
   * 根据url获取菜单列表
   * - 若 `recursive: true` 则会自动向上递归查找
   *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
   */
  getPathByUrl(url, recursive = false) {
    const ret = [];
    let item = this.find({
      url,
      recursive
    });
    if (!item)
      return ret;
    do {
      ret.splice(0, 0, item);
      item = item._parent;
    } while (item);
    return ret;
  }
  /**
   * Get menu based on `key`
   */
  getItem(key) {
    let res = null;
    this.visit(this.data, (item) => {
      if (res == null && item.key === key) {
        res = item;
      }
    });
    return res;
  }
  /**
   * Set menu based on `key`
   */
  setItem(key, value, options) {
    const item = typeof key === "string" ? this.getItem(key) : key;
    if (item == null)
      return;
    Object.keys(value).forEach((k) => {
      item[k] = value[k];
    });
    this.fixItem(item);
    if (options?.emit !== false)
      this._change$.next(this.data);
  }
  /**
   * Open menu based on `key` or menu object
   */
  open(keyOrItem, options) {
    let item = typeof keyOrItem === "string" ? this.find({
      key: keyOrItem
    }) : keyOrItem;
    if (item == null)
      return;
    this.visit(this.menus, (i) => {
      i._selected = false;
      if (!this.openStrictly)
        i.open = false;
    });
    do {
      item._selected = true;
      item.open = true;
      item = item._parent;
    } while (item);
    if (options?.emit !== false)
      this._change$.next(this.data);
  }
  openAll(status) {
    this.toggleOpen(null, {
      allStatus: status
    });
  }
  toggleOpen(keyOrItem, options) {
    let item = typeof keyOrItem === "string" ? this.find({
      key: keyOrItem
    }) : keyOrItem;
    if (item == null) {
      this.visit(this.menus, (i) => {
        i._selected = false;
        i.open = options?.allStatus === true;
      });
    } else {
      if (!this.openStrictly) {
        this.visit(this.menus, (i) => {
          if (i !== item)
            i.open = false;
        });
        let pItem = item._parent;
        while (pItem) {
          pItem.open = true;
          pItem = pItem._parent;
        }
      }
      item.open = !item.open;
    }
    if (options?.emit !== false)
      this._change$.next(this.data);
  }
  ngOnDestroy() {
    this._change$.unsubscribe();
    this.i18n$?.unsubscribe();
  }
};
_MenuService.ɵfac = function MenuService_Factory(t) {
  return new (t || _MenuService)();
};
_MenuService.ɵprov = ɵɵdefineInjectable({
  token: _MenuService,
  factory: _MenuService.ɵfac,
  providedIn: "root"
});
var MenuService = _MenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var ALAIN_SETTING_KEYS = new InjectionToken("ALAIN_SETTING_KEYS");
var ALAIN_SETTING_DEFAULT = {
  provide: ALAIN_SETTING_KEYS,
  useValue: {
    layout: "layout",
    user: "user",
    app: "app"
  }
};
var _SettingsService = class _SettingsService {
  constructor() {
    this.KEYS = inject(ALAIN_SETTING_KEYS);
    this.platform = inject(Platform);
    this.notify$ = new Subject();
    this._app = null;
    this._user = null;
    this._layout = null;
  }
  getData(key) {
    if (!this.platform.isBrowser) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key) || "null") || null;
  }
  setData(key, value) {
    if (!this.platform.isBrowser) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }
  get layout() {
    if (!this._layout) {
      this._layout = __spreadValues({
        fixed: true,
        collapsed: false,
        boxed: false,
        lang: null
      }, this.getData(this.KEYS.layout));
      this.setData(this.KEYS.layout, this._layout);
    }
    return this._layout;
  }
  get app() {
    if (!this._app) {
      this._app = __spreadValues({
        year: (/* @__PURE__ */ new Date()).getFullYear()
      }, this.getData(this.KEYS.app));
      this.setData(this.KEYS.app, this._app);
    }
    return this._app;
  }
  get user() {
    if (!this._user) {
      this._user = __spreadValues({}, this.getData(this.KEYS.user));
      this.setData(this.KEYS.user, this._user);
    }
    return this._user;
  }
  get notify() {
    return this.notify$.asObservable();
  }
  setLayout(name, value) {
    if (typeof name === "string") {
      this.layout[name] = value;
    } else {
      this._layout = name;
    }
    this.setData(this.KEYS.layout, this._layout);
    this.notify$.next({
      type: "layout",
      name,
      value
    });
    return true;
  }
  getLayout() {
    return this._layout;
  }
  setApp(value) {
    this._app = value;
    this.setData(this.KEYS.app, value);
    this.notify$.next({
      type: "app",
      value
    });
  }
  getApp() {
    return this._app;
  }
  setUser(value) {
    this._user = value;
    this.setData(this.KEYS.user, value);
    this.notify$.next({
      type: "user",
      value
    });
  }
  getUser() {
    return this._user;
  }
};
_SettingsService.ɵfac = function SettingsService_Factory(t) {
  return new (t || _SettingsService)();
};
_SettingsService.ɵprov = ɵɵdefineInjectable({
  token: _SettingsService,
  factory: _SettingsService.ɵfac,
  providedIn: "root"
});
var SettingsService = _SettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var REP_MAX = 6;
var SPAN_MAX = 24;
var _ResponsiveService = class _ResponsiveService {
  constructor(cogSrv) {
    this.cog = cogSrv.merge("themeResponsive", {
      rules: {
        1: {
          xs: 24
        },
        2: {
          xs: 24,
          sm: 12
        },
        3: {
          xs: 24,
          sm: 12,
          md: 8
        },
        4: {
          xs: 24,
          sm: 12,
          md: 8,
          lg: 6
        },
        5: {
          xs: 24,
          sm: 12,
          md: 8,
          lg: 6,
          xl: 4
        },
        6: {
          xs: 24,
          sm: 12,
          md: 8,
          lg: 6,
          xl: 4,
          xxl: 2
        }
      }
    });
    if (Object.keys(this.cog.rules).map((i) => +i).some((i) => i < 1 || i > REP_MAX)) {
      throw new Error(`[theme] the responseive rule index value range must be 1-${REP_MAX}`);
    }
  }
  genCls(count, defaultCol = 1) {
    const rule = __spreadValues({}, this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)]);
    const antColClass = "ant-col";
    const itemMaxSpan = SPAN_MAX / defaultCol;
    const paddingSpan = (value) => {
      if (value == null || defaultCol <= 1 || count >= defaultCol)
        return value;
      return Math.max(value, count * itemMaxSpan);
    };
    const clsMap = [`${antColClass}-xs-${paddingSpan(rule.xs)}`];
    if (rule.sm)
      clsMap.push(`${antColClass}-sm-${paddingSpan(rule.sm)}`);
    if (rule.md)
      clsMap.push(`${antColClass}-md-${paddingSpan(rule.md)}`);
    if (rule.lg)
      clsMap.push(`${antColClass}-lg-${paddingSpan(rule.lg)}`);
    if (rule.xl)
      clsMap.push(`${antColClass}-xl-${paddingSpan(rule.xl)}`);
    if (rule.xxl)
      clsMap.push(`${antColClass}-xxl-${paddingSpan(rule.xxl)}`);
    return clsMap;
  }
};
_ResponsiveService.ɵfac = function ResponsiveService_Factory(t) {
  return new (t || _ResponsiveService)(ɵɵinject(AlainConfigService));
};
_ResponsiveService.ɵprov = ɵɵdefineInjectable({
  token: _ResponsiveService,
  factory: _ResponsiveService.ɵfac,
  providedIn: "root"
});
var ResponsiveService = _ResponsiveService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AlainConfigService
  }], null);
})();
var HTML_DIR = "dir";
var RTL_DIRECTION = "direction";
var RTL_NZ_COMPONENTS = ["modal", "drawer", "message", "notification", "image"];
var RTL_DELON_COMPONENTS = ["loading", "onboarding"];
var LTR = "ltr";
var RTL = "rtl";
var _RTLService = class _RTLService {
  /**
   * Get or Set the current text direction
   *
   * 获取或设置当前文字方向
   */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    this._dir = value;
    this.updateLibConfig();
    this.updateHtml();
    Promise.resolve().then(() => {
      this.d.value = value;
      this.d.change.emit(value);
      this.srv.setLayout(RTL_DIRECTION, value);
    });
  }
  /**
   * Get the next text direction
   *
   * 获取下一次文字方向
   */
  get nextDir() {
    return this.dir === LTR ? RTL : LTR;
  }
  /**
   * Subscription change notification
   *
   * 订阅变更通知
   */
  get change() {
    return this.srv.notify.pipe(filter((w) => w.name === RTL_DIRECTION), map((v) => v.value));
  }
  constructor() {
    this.d = inject(Directionality);
    this.nz = inject(NzConfigService);
    this.delon = inject(AlainConfigService);
    this.platform = inject(Platform);
    this.doc = inject(DOCUMENT);
    this.srv = inject(SettingsService);
    this._dir = LTR;
    this.dir = this.srv.layout.direction === RTL ? RTL : LTR;
  }
  /**
   * Toggle text direction
   *
   * 切换文字方向
   */
  toggle() {
    this.dir = this.nextDir;
  }
  updateHtml() {
    if (!this.platform.isBrowser) {
      return;
    }
    const htmlEl = this.doc.querySelector("html");
    if (htmlEl) {
      const dir = this.dir;
      htmlEl.style.direction = dir;
      htmlEl.classList.remove(RTL, LTR);
      htmlEl.classList.add(dir);
      htmlEl.setAttribute(HTML_DIR, dir);
    }
  }
  updateLibConfig() {
    RTL_NZ_COMPONENTS.forEach((name) => {
      this.nz.set(name, {
        nzDirection: this.dir
      });
    });
    RTL_DELON_COMPONENTS.forEach((name) => {
      this.delon.set(name, {
        direction: this.dir
      });
    });
  }
};
_RTLService.ɵfac = function RTLService_Factory(t) {
  return new (t || _RTLService)();
};
_RTLService.ɵprov = ɵɵdefineInjectable({
  token: _RTLService,
  factory: _RTLService.ɵfac,
  providedIn: "root"
});
var RTLService = _RTLService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RTLService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _TitleService = class _TitleService {
  constructor() {
    this.destroy$ = inject(DestroyRef);
    this._prefix = "";
    this._suffix = "";
    this._separator = " - ";
    this._reverse = false;
    this.DELAY_TIME = 25;
    this.doc = inject(DOCUMENT);
    this.injector = inject(Injector);
    this.title = inject(Title);
    this.menuSrv = inject(MenuService);
    this.i18nSrv = inject(ALAIN_I18N_TOKEN, {
      optional: true
    });
    this.default = `Not Page Name`;
    this.i18nSrv?.change.pipe(takeUntilDestroyed()).subscribe(() => this.setTitle());
  }
  /**
   * Set separator
   *
   * 设置分隔符
   */
  set separator(value) {
    this._separator = value;
  }
  /**
   * Set prefix
   *
   * 设置前缀
   */
  set prefix(value) {
    this._prefix = value;
  }
  /**
   * Set suffix
   *
   * 设置后缀
   */
  set suffix(value) {
    this._suffix = value;
  }
  /**
   * Set whether to reverse
   *
   * 设置是否反转
   */
  set reverse(value) {
    this._reverse = value;
  }
  getByElement() {
    return of("").pipe(delay(this.DELAY_TIME), map(() => {
      const el = (this.selector != null ? this.doc.querySelector(this.selector) : null) || this.doc.querySelector(".alain-default__content-title h1") || this.doc.querySelector(".page-header__title");
      if (el) {
        let text = "";
        el.childNodes.forEach((val) => {
          if (!text && val.nodeType === 3) {
            text = val.textContent.trim();
          }
        });
        return text || el.firstChild.textContent.trim();
      }
      return "";
    }));
  }
  getByRoute() {
    let next = this.injector.get(ActivatedRoute);
    while (next.firstChild)
      next = next.firstChild;
    const data = next.snapshot && next.snapshot.data || {};
    if (data.titleI18n && this.i18nSrv)
      data.title = this.i18nSrv.fanyi(data.titleI18n);
    return isObservable(data.title) ? data.title : of(data.title);
  }
  getByMenu() {
    const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
    if (!menus || menus.length <= 0)
      return of("");
    const item = menus[menus.length - 1];
    let title;
    if (item.i18n && this.i18nSrv)
      title = this.i18nSrv.fanyi(item.i18n);
    return of(title || item.text);
  }
  /**
   * Set the document title
   */
  setTitle(title) {
    this.tit$?.unsubscribe();
    this.tit$ = of(title).pipe(switchMap((tit) => tit ? of(tit) : this.getByRoute()), switchMap((tit) => tit ? of(tit) : this.getByMenu()), switchMap((tit) => tit ? of(tit) : this.getByElement()), map((tit) => tit || this.default), map((title2) => !Array.isArray(title2) ? [title2] : title2), takeUntilDestroyed(this.destroy$)).subscribe((titles) => {
      let newTitles = [];
      if (this._prefix) {
        newTitles.push(this._prefix);
      }
      newTitles.push(...titles.filter((title2) => !!title2));
      if (this._suffix) {
        newTitles.push(this._suffix);
      }
      if (this._reverse) {
        newTitles = newTitles.reverse();
      }
      this.title.setTitle(newTitles.join(this._separator));
    });
  }
  /**
   * Set i18n key of the document title
   */
  setTitleByI18n(key, params) {
    this.setTitle(this.i18nSrv?.fanyi(key, params));
  }
  ngOnDestroy() {
    this.tit$?.unsubscribe();
  }
};
_TitleService.ɵfac = function TitleService_Factory(t) {
  return new (t || _TitleService)();
};
_TitleService.ɵprov = ɵɵdefineInjectable({
  token: _TitleService,
  factory: _TitleService.ɵfac,
  providedIn: "root"
});
var TitleService = _TitleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _I18nPipe = class _I18nPipe {
  constructor() {
    this.i18n = inject(ALAIN_I18N_TOKEN);
  }
  transform(key, params) {
    return this.i18n.fanyi(key, params);
  }
};
_I18nPipe.ɵfac = function I18nPipe_Factory(t) {
  return new (t || _I18nPipe)();
};
_I18nPipe.ɵpipe = ɵɵdefinePipe({
  name: "i18n",
  type: _I18nPipe,
  pure: true,
  standalone: true
});
var I18nPipe = _I18nPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nPipe, [{
    type: Pipe,
    args: [{
      name: "i18n",
      standalone: true
    }]
  }], null, null);
})();
var _AlainI18NGuardService = class _AlainI18NGuardService {
  constructor() {
    this.i18nSrv = inject(ALAIN_I18N_TOKEN, {
      optional: true
    });
    this.cogSrv = inject(AlainConfigService);
  }
  process(route) {
    const lang = route.params && route.params[this.cogSrv.get("themeI18n")?.paramNameOfUrlGuard ?? "i18n"];
    if (lang != null) {
      this.i18nSrv?.use(lang);
    }
    return of(true);
  }
};
_AlainI18NGuardService.ɵfac = function AlainI18NGuardService_Factory(t) {
  return new (t || _AlainI18NGuardService)();
};
_AlainI18NGuardService.ɵprov = ɵɵdefineInjectable({
  token: _AlainI18NGuardService,
  factory: _AlainI18NGuardService.ɵfac,
  providedIn: "root"
});
var AlainI18NGuardService = _AlainI18NGuardService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlainI18NGuardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var alainI18nCanActivate = (childRoute) => inject(AlainI18NGuardService).process(childRoute);
var alainI18nCanActivateChild = (route) => inject(AlainI18NGuardService).process(route);
var CLS_DRAG = "MODAL-DRAG";
var _ModalHelper = class _ModalHelper {
  constructor() {
    this.srv = inject(NzModalService);
    this.drag = inject(DragDrop);
    this.doc = inject(DOCUMENT);
  }
  createDragRef(options, wrapCls) {
    const wrapEl = this.doc.querySelector(wrapCls);
    const modalEl = wrapEl.firstChild;
    const handelEl = options.handleCls ? wrapEl.querySelector(options.handleCls) : null;
    if (handelEl) {
      handelEl.classList.add(`${CLS_DRAG}-HANDLE`);
    }
    return this.drag.createDrag(handelEl ?? modalEl).withHandles([handelEl ?? modalEl]).withBoundaryElement(wrapEl).withRootElement(modalEl);
  }
  /**
   * 构建一个对话框
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * @example
   * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
   * this.nzModalRef.close(data);
   * this.nzModalRef.close();
   * // 关闭
   * this.nzModalRef.destroy();
   */
  create(comp, params, options) {
    options = deepMerge({
      size: "lg",
      exact: true,
      includeTabs: false
    }, options);
    return new Observable((observer) => {
      const {
        size,
        includeTabs,
        modalOptions,
        drag,
        useNzData
      } = options;
      let cls = [];
      let width = "";
      if (size) {
        if (typeof size === "number") {
          width = `${size}px`;
        } else if (["sm", "md", "lg", "xl"].includes(size)) {
          cls.push(`modal-${size}`);
        } else {
          width = size;
        }
      }
      if (includeTabs) {
        cls.push(`modal-include-tabs`);
      }
      if (modalOptions && modalOptions.nzWrapClassName) {
        cls.push(modalOptions.nzWrapClassName);
        delete modalOptions.nzWrapClassName;
      }
      let dragOptions;
      let dragWrapCls = `${CLS_DRAG}-${+/* @__PURE__ */ new Date()}`;
      let dragRef;
      if (drag != null && drag !== false) {
        dragOptions = __spreadValues({
          handleCls: `.modal-header, .ant-modal-title`
        }, typeof drag === "object" ? drag : {});
        cls.push(CLS_DRAG, dragWrapCls);
      }
      const subject = this.srv.create(__spreadValues({
        nzWrapClassName: cls.join(" "),
        nzContent: comp,
        nzWidth: width ? width : void 0,
        nzFooter: null,
        nzData: params
      }, modalOptions));
      if (useNzData !== true) {
        Object.assign(subject.componentInstance, params);
      }
      subject.afterOpen.pipe(take(1), filter(() => dragOptions != null)).subscribe(() => {
        dragRef = this.createDragRef(dragOptions, `.${dragWrapCls}`);
      });
      subject.afterClose.pipe(take(1)).subscribe((res) => {
        if (options.exact === true) {
          if (res != null) {
            observer.next(res);
          }
        } else {
          observer.next(res);
        }
        observer.complete();
        dragRef?.dispose();
      });
    });
  }
  /**
   * 构建静态框，点击蒙层不允许关闭
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
   * this.nzModalRef.close(data);
   * this.nzModalRef.close();
   * // 关闭
   * this.nzModalRef.destroy();
   */
  createStatic(comp, params, options) {
    const modalOptions = __spreadValues({
      nzMaskClosable: false
    }, options && options.modalOptions);
    return this.create(comp, params, __spreadProps(__spreadValues({}, options), {
      modalOptions
    }));
  }
};
_ModalHelper.ɵfac = function ModalHelper_Factory(t) {
  return new (t || _ModalHelper)();
};
_ModalHelper.ɵprov = ɵɵdefineInjectable({
  token: _ModalHelper,
  factory: _ModalHelper.ɵfac,
  providedIn: "root"
});
var ModalHelper = _ModalHelper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalHelper, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _DrawerHelper = class _DrawerHelper {
  constructor() {
    this.srv = inject(NzDrawerService);
    this.parentDrawer = inject(_DrawerHelper, {
      optional: true,
      skipSelf: true
    });
    this.openDrawersAtThisLevel = [];
  }
  get openDrawers() {
    return this.parentDrawer ? this.parentDrawer.openDrawers : this.openDrawersAtThisLevel;
  }
  /**
   * 构建一个抽屉
   */
  create(title, comp, params, options) {
    options = deepMerge({
      size: "md",
      footer: true,
      footerHeight: 50,
      exact: true,
      drawerOptions: {
        nzPlacement: "right",
        nzWrapClassName: ""
      }
    }, options);
    return new Observable((observer) => {
      const {
        size,
        footer,
        footerHeight,
        drawerOptions
      } = options;
      const defaultOptions = {
        nzContent: comp,
        nzContentParams: params,
        nzTitle: title
      };
      if (typeof size === "number") {
        defaultOptions[drawerOptions.nzPlacement === "top" || drawerOptions.nzPlacement === "bottom" ? "nzHeight" : "nzWidth"] = options.size;
      } else if (!drawerOptions.nzWidth) {
        defaultOptions.nzWrapClassName = `${drawerOptions.nzWrapClassName} drawer-${options.size}`.trim();
        delete drawerOptions.nzWrapClassName;
      }
      if (footer) {
        defaultOptions.nzBodyStyle = {
          "padding-bottom.px": footerHeight + 24
        };
      }
      const ref = this.srv.create(__spreadValues(__spreadValues({}, defaultOptions), drawerOptions));
      this.openDrawers.push(ref);
      const afterClose$ = ref.afterClose.subscribe((res) => {
        if (options.exact === true) {
          if (res != null) {
            observer.next(res);
          }
        } else {
          observer.next(res);
        }
        observer.complete();
        afterClose$.unsubscribe();
        this.close(ref);
      });
    });
  }
  close(ref) {
    const idx = this.openDrawers.indexOf(ref);
    if (idx === -1)
      return;
    this.openDrawers.splice(idx, 1);
  }
  closeAll() {
    let i = this.openDrawers.length;
    while (i--) {
      this.openDrawers[i].close();
    }
  }
  /**
   * 构建一个抽屉，点击蒙层不允许关闭
   */
  static(title, comp, params, options) {
    const drawerOptions = __spreadValues({
      nzMaskClosable: false
    }, options && options.drawerOptions);
    return this.create(title, comp, params, __spreadProps(__spreadValues({}, options), {
      drawerOptions
    }));
  }
};
_DrawerHelper.ɵfac = function DrawerHelper_Factory(t) {
  return new (t || _DrawerHelper)();
};
_DrawerHelper.ɵprov = ɵɵdefineInjectable({
  token: _DrawerHelper,
  factory: _DrawerHelper.ɵfac,
  providedIn: "root"
});
var DrawerHelper = _DrawerHelper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerHelper, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var __HttpClient = class __HttpClient {
  constructor(cogSrv) {
    this.http = inject(HttpClient);
    this.lc = 0;
    this.cog = cogSrv.merge("themeHttp", {
      nullValueHandling: "include",
      dateValueHandling: "timestamp"
    });
  }
  /**
   * Get whether it's loading
   *
   * 获取是否正在加载中
   */
  get loading() {
    return this.lc > 0;
  }
  /**
   * Get the currently loading count
   *
   * 获取当前加载中的数量
   */
  get loadingCount() {
    return this.lc;
  }
  parseParams(params) {
    const newParams = {};
    if (params instanceof HttpParams) {
      return params;
    }
    const {
      nullValueHandling,
      dateValueHandling
    } = this.cog;
    Object.keys(params).forEach((key) => {
      let paramValue = params[key];
      if (nullValueHandling === "ignore" && paramValue == null)
        return;
      if (paramValue instanceof Date && (dateValueHandling === "timestamp" || dateValueHandling === "timestampSecond")) {
        paramValue = dateValueHandling === "timestamp" ? paramValue.valueOf() : Math.trunc(paramValue.valueOf() / 1e3);
      }
      newParams[key] = paramValue;
    });
    return new HttpParams({
      fromObject: newParams
    });
  }
  appliedUrl(url, params) {
    if (!params)
      return url;
    url += ~url.indexOf("?") ? "" : "?";
    const arr = [];
    Object.keys(params).forEach((key) => {
      arr.push(`${key}=${params[key]}`);
    });
    return url + arr.join("&");
  }
  setCount(count) {
    Promise.resolve(null).then(() => this.lc = count <= 0 ? 0 : count);
  }
  push() {
    this.setCount(++this.lc);
  }
  pop() {
    this.setCount(--this.lc);
  }
  /**
   * Clean loading count
   *
   * 清空加载中
   */
  cleanLoading() {
    this.setCount(0);
  }
  get(url, params, options = {}) {
    return this.request("GET", url, __spreadValues({
      params
    }, options));
  }
  post(url, body, params, options = {}) {
    return this.request("POST", url, __spreadValues({
      body,
      params
    }, options));
  }
  delete(url, params, options = {}) {
    return this.request("DELETE", url, __spreadValues({
      params
    }, options));
  }
  // #endregion
  // #region jsonp
  /**
   * **JSONP Request**
   *
   * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
   */
  jsonp(url, params, callbackParam = "JSONP_CALLBACK") {
    return of(null).pipe(
      // Make sure to always be asynchronous, see issues: https://github.com/ng-alain/ng-alain/issues/1954
      delay(0),
      tap(() => this.push()),
      switchMap(() => this.http.jsonp(this.appliedUrl(url, params), callbackParam)),
      finalize(() => this.pop())
    );
  }
  patch(url, body, params, options = {}) {
    return this.request("PATCH", url, __spreadValues({
      body,
      params
    }, options));
  }
  put(url, body, params, options = {}) {
    return this.request("PUT", url, __spreadValues({
      body,
      params
    }, options));
  }
  form(url, body, params, options = {}) {
    return this.request("POST", url, __spreadProps(__spreadValues({
      body,
      params
    }, options), {
      headers: {
        "content-type": `application/x-www-form-urlencoded`
      }
    }));
  }
  request(method, url, options = {}) {
    if (options.params)
      options.params = this.parseParams(options.params);
    return of(null).pipe(
      // Make sure to always be asynchronous, see issues: https://github.com/ng-alain/ng-alain/issues/1954
      delay(0),
      tap(() => this.push()),
      switchMap(() => this.http.request(method, url, options)),
      finalize(() => this.pop())
    );
  }
};
__HttpClient.ɵfac = function _HttpClient_Factory(t) {
  return new (t || __HttpClient)(ɵɵinject(AlainConfigService));
};
__HttpClient.ɵprov = ɵɵdefineInjectable({
  token: __HttpClient,
  factory: __HttpClient.ɵfac,
  providedIn: "root"
});
var _HttpClient = __HttpClient;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_HttpClient, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AlainConfigService
  }], null);
})();
var _BaseApi = class _BaseApi {
  constructor() {
    this.injector = inject(Injector);
  }
};
_BaseApi.ɵfac = function BaseApi_Factory(t) {
  return new (t || _BaseApi)();
};
_BaseApi.ɵprov = ɵɵdefineInjectable({
  token: _BaseApi,
  factory: _BaseApi.ɵfac
});
var BaseApi = _BaseApi;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseApi, [{
    type: Injectable
  }], null, null);
})();
var paramKey = `__api_params`;
function setParam(target, key = paramKey) {
  let params = target[key];
  if (typeof params === "undefined") {
    params = target[key] = {};
  }
  return params;
}
function BaseUrl(url) {
  return function(target) {
    const params = setParam(target.prototype);
    params.baseUrl = url;
    return target;
  };
}
function BaseHeaders(headers) {
  return function(target) {
    const params = setParam(target.prototype);
    params.baseHeaders = headers;
    return target;
  };
}
function makeParam(paramName) {
  return function(key) {
    return function(target, propertyKey, index) {
      const params = setParam(setParam(target), propertyKey);
      let tParams = params[paramName];
      if (typeof tParams === "undefined") {
        tParams = params[paramName] = [];
      }
      tParams.push({
        key,
        index
      });
    };
  };
}
var Path = makeParam("path");
var Query = makeParam("query");
var Body = makeParam("body")();
var Headers = makeParam("headers");
var Payload = makeParam("payload")();
function getValidArgs(data, key, args) {
  if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
    return void 0;
  }
  return args[data[key][0].index];
}
function genBody(data, payload) {
  if (Array.isArray(data) || Array.isArray(payload)) {
    return Object.assign([], data, payload);
  }
  return __spreadValues(__spreadValues({}, data), payload);
}
function makeMethod(method) {
  return function(url = "", options) {
    return (_target, targetKey, descriptor) => {
      descriptor.value = function(...args) {
        options = options || {};
        const injector = this.injector;
        const http = injector.get(_HttpClient, null);
        if (http == null) {
          throw new TypeError(`Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.`);
        }
        const baseData = setParam(this);
        const data = setParam(baseData, targetKey);
        let requestUrl = url || "";
        requestUrl = [baseData.baseUrl || "", requestUrl.startsWith("/") ? requestUrl.substring(1) : requestUrl].join("/");
        if (requestUrl.length > 1 && requestUrl.endsWith("/")) {
          requestUrl = requestUrl.substring(0, requestUrl.length - 1);
        }
        if (options.acl) {
          const aclSrv = injector.get(ACLService, null);
          if (aclSrv && !aclSrv.can(options.acl)) {
            return throwError(() => ({
              url: requestUrl,
              status: 401,
              statusText: `From Http Decorator`
            }));
          }
          delete options.acl;
        }
        requestUrl = requestUrl.replace(/::/g, "^^");
        (data.path || []).filter((w) => typeof args[w.index] !== "undefined").forEach((i) => {
          requestUrl = requestUrl.replace(new RegExp(`:${i.key}`, "g"), encodeURIComponent(args[i.index]));
        });
        requestUrl = requestUrl.replace(/\^\^/g, `:`);
        const params = (data.query || []).reduce((p, i) => {
          p[i.key] = args[i.index];
          return p;
        }, {});
        const headers = (data.headers || []).reduce((p, i) => {
          p[i.key] = args[i.index];
          return p;
        }, {});
        if (method === "FORM") {
          headers["content-type"] = "application/x-www-form-urlencoded";
        }
        const payload = getValidArgs(data, "payload", args);
        const supportedBody = ["POST", "PUT", "PATCH", "DELETE"].some((v) => v === method);
        return http.request(method, requestUrl, __spreadValues({
          body: supportedBody ? genBody(getValidArgs(data, "body", args), payload) : null,
          params: !supportedBody ? __spreadValues(__spreadValues({}, params), payload) : params,
          headers: __spreadValues(__spreadValues({}, baseData.baseHeaders), headers)
        }, options));
      };
      return descriptor;
    };
  };
}
var OPTIONS = makeMethod("OPTIONS");
var GET = makeMethod("GET");
var POST = makeMethod("POST");
var DELETE = makeMethod("DELETE");
var PUT = makeMethod("PUT");
var HEAD = makeMethod("HEAD");
var PATCH = makeMethod("PATCH");
var JSONP = makeMethod("JSONP");
var FORM = makeMethod("FORM");
var CUSTOM_ERROR = new HttpContextToken(() => false);
var IGNORE_BASE_URL = new HttpContextToken(() => false);
var RAW_BODY = new HttpContextToken(() => false);
var DELON_LOCALE = new InjectionToken("delon-locale");
var zhCN = {
  abbr: "zh-CN",
  exception: {
    403: "抱歉，你无权访问该页面",
    404: "抱歉，你访问的页面不存在",
    500: "抱歉，服务器出错了",
    backToHome: "返回首页"
  },
  noticeIcon: {
    emptyText: "暂无数据",
    clearText: "清空"
  },
  reuseTab: {
    close: "关闭标签",
    closeOther: "关闭其它标签",
    closeRight: "关闭右侧标签",
    refresh: "刷新"
  },
  tagSelect: {
    expand: "展开",
    collapse: "收起"
  },
  miniProgress: {
    target: "目标值："
  },
  st: {
    total: "共 {{total}} 条",
    filterConfirm: "确定",
    filterReset: "重置"
  },
  sf: {
    submit: "提交",
    reset: "重置",
    search: "搜索",
    edit: "保存",
    addText: "添加",
    removeText: "移除",
    checkAllText: "全选",
    error: {
      "false schema": `布尔模式出错`,
      $ref: `无法找到引用{ref}`,
      additionalItems: `不允许超过{limit}个元素`,
      additionalProperties: `不允许有额外的属性`,
      anyOf: `数据应为 anyOf 所指定的其中一个`,
      dependencies: `应当拥有属性{property}的依赖属性{deps}`,
      enum: `应当是预设定的枚举值之一`,
      format: `格式不正确`,
      type: `类型应当是 {type}`,
      required: `必填项`,
      maxLength: `至多 {limit} 个字符`,
      minLength: `至少 {limit} 个字符以上`,
      minimum: `必须 {comparison}{limit}`,
      formatMinimum: `必须 {comparison}{limit}`,
      maximum: `必须 {comparison}{limit}`,
      formatMaximum: `必须 {comparison}{limit}`,
      maxItems: `不应多于 {limit} 个项`,
      minItems: `不应少于 {limit} 个项`,
      maxProperties: `不应多于 {limit} 个属性`,
      minProperties: `不应少于 {limit} 个属性`,
      multipleOf: `应当是 {multipleOf} 的整数倍`,
      not: `不应当匹配 "not" schema`,
      oneOf: `只能匹配一个 "oneOf" 中的 schema`,
      pattern: `数据格式不正确`,
      uniqueItems: `不应当含有重复项 (第 {j} 项与第 {i} 项是重复的)`,
      custom: `格式不正确`,
      propertyNames: `属性名 "{propertyName}" 无效`,
      patternRequired: `应当有属性匹配模式 {missingPattern}`,
      switch: `由于 {caseIndex} 失败，未通过 "switch" 校验`,
      const: `应当等于常量`,
      contains: `应当包含一个有效项`,
      formatExclusiveMaximum: `formatExclusiveMaximum 应当是布尔值`,
      formatExclusiveMinimum: `formatExclusiveMinimum 应当是布尔值`,
      if: `应当匹配模式 "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `跳过`,
    prev: `上一项`,
    next: `下一项`,
    done: `完成`
  }
};
var _DelonLocaleService = class _DelonLocaleService {
  constructor(locale) {
    this._locale = zhCN;
    this.change$ = new BehaviorSubject(this._locale);
    this.setLocale(locale || zhCN);
  }
  get change() {
    return this.change$.asObservable();
  }
  setLocale(locale) {
    if (this._locale && this._locale.abbr === locale.abbr) {
      return;
    }
    this._locale = locale;
    this.change$.next(locale);
  }
  get locale() {
    return this._locale;
  }
  getData(path) {
    return this._locale[path] || {};
  }
};
_DelonLocaleService.ɵfac = function DelonLocaleService_Factory(t) {
  return new (t || _DelonLocaleService)(ɵɵinject(DELON_LOCALE));
};
_DelonLocaleService.ɵprov = ɵɵdefineInjectable({
  token: _DelonLocaleService,
  factory: _DelonLocaleService.ɵfac
});
var DelonLocaleService = _DelonLocaleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DelonLocaleService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DELON_LOCALE]
    }]
  }], null);
})();
function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
  return exist || new DelonLocaleService(locale);
}
var DELON_LOCALE_SERVICE_PROVIDER = {
  provide: DelonLocaleService,
  useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE]
};
var _DelonLocaleModule = class _DelonLocaleModule {
};
_DelonLocaleModule.ɵfac = function DelonLocaleModule_Factory(t) {
  return new (t || _DelonLocaleModule)();
};
_DelonLocaleModule.ɵmod = ɵɵdefineNgModule({
  type: _DelonLocaleModule
});
_DelonLocaleModule.ɵinj = ɵɵdefineInjector({
  providers: [{
    provide: DELON_LOCALE,
    useValue: zhCN
  }, DELON_LOCALE_SERVICE_PROVIDER]
});
var DelonLocaleModule = _DelonLocaleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DelonLocaleModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DELON_LOCALE,
        useValue: zhCN
      }, DELON_LOCALE_SERVICE_PROVIDER]
    }]
  }], null, null);
})();
var enUS = {
  abbr: "en-US",
  exception: {
    403: `Sorry, you don't have access to this page`,
    404: `Sorry, the page you visited does not exist`,
    500: `Sorry, the server is reporting an error`,
    backToHome: "Back To Home"
  },
  noticeIcon: {
    emptyText: "No data",
    clearText: "Clear"
  },
  reuseTab: {
    close: "Close tab",
    closeOther: "Close other tabs",
    closeRight: "Close tabs to right",
    refresh: "Refresh"
  },
  tagSelect: {
    expand: "Expand",
    collapse: "Collapse"
  },
  miniProgress: {
    target: "Target: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} of {{total}}",
    filterConfirm: "OK",
    filterReset: "Reset"
  },
  sf: {
    submit: "Submit",
    reset: "Reset",
    search: "Search",
    edit: "Save",
    addText: "Add",
    removeText: "Remove",
    checkAllText: "Check all",
    error: {
      "false schema": `Boolean schema is false`,
      $ref: `Can't resolve reference {ref}`,
      additionalItems: `Should not have more than {limit} item`,
      additionalProperties: `Should not have additional properties`,
      anyOf: `Should match some schema in "anyOf"`,
      dependencies: `should have property {deps} when property {property} is present`,
      enum: `Should be equal to one of predefined values`,
      format: `Should match format "{format}"`,
      type: `Should be {type}`,
      required: `Required`,
      maxLength: `Should not be longer than {limit} character`,
      minLength: `Should not be shorter than {limit} character`,
      minimum: `Should be {comparison} {limit}`,
      formatMinimum: `Should be {comparison} {limit}`,
      maximum: `Should be {comparison} {limit}`,
      formatMaximum: `Should be {comparison} {limit}`,
      maxItems: `Should not have more than {limit} item`,
      minItems: `Should not have less than {limit} item`,
      maxProperties: `Should not have more than {limit} property`,
      minProperties: `Should not have less than {limit} property`,
      multipleOf: `Should be a multiple of {multipleOf}`,
      not: `Should not be valid according to schema in "not"`,
      oneOf: `Should match exactly one schema in "oneOf"`,
      pattern: `Should match pattern "{pattern}"`,
      uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
      custom: `Should match format`,
      propertyNames: `Property name "{propertyName}" is invalid`,
      patternRequired: `Should have property matching pattern "{missingPattern}"`,
      switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
      const: `Should be equal to constant`,
      contains: `Should contain a valid item`,
      formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
      if: `Should match "{failingKeyword}" schema`
    }
  },
  onboarding: {
    skip: `Skip`,
    prev: `Prev`,
    next: `Next`,
    done: `Done`
  }
};
var zhTW = {
  abbr: "zh-TW",
  exception: {
    403: "抱歉，你無權訪問該頁面",
    404: "抱歉，你訪問的頁面不存在",
    500: "抱歉，服務器出錯了",
    backToHome: "返回首頁"
  },
  noticeIcon: {
    emptyText: "暫無數據",
    clearText: "清空"
  },
  reuseTab: {
    close: "關閉標簽",
    closeOther: "關閉其它標簽",
    closeRight: "關閉右側標簽",
    refresh: "刷新"
  },
  tagSelect: {
    expand: "展開",
    collapse: "收起"
  },
  miniProgress: {
    target: "目標值："
  },
  st: {
    total: "共 {{total}} 條",
    filterConfirm: "確定",
    filterReset: "重置"
  },
  sf: {
    submit: "提交",
    reset: "重置",
    search: "搜索",
    edit: "保存",
    addText: "添加",
    removeText: "移除",
    checkAllText: "全選",
    error: {
      "false schema": `佈爾模式出錯`,
      $ref: `無法找到引用{ref}`,
      additionalItems: `不允許超過{ref}`,
      additionalProperties: `不允許有額外的屬性`,
      anyOf: `數據應為 anyOf 所指定的其中一個`,
      dependencies: `應當擁有屬性{property}的依賴屬性{deps}`,
      enum: `應當是預設定的枚舉值之一`,
      format: `格式不正確`,
      type: `類型應當是 {type}`,
      required: `必填項`,
      maxLength: `至多 {limit} 個字符`,
      minLength: `至少 {limit} 個字符以上`,
      minimum: `必須 {comparison}{limit}`,
      formatMinimum: `必須 {comparison}{limit}`,
      maximum: `必須 {comparison}{limit}`,
      formatMaximum: `必須 {comparison}{limit}`,
      maxItems: `不應多於 {limit} 個項`,
      minItems: `不應少於 {limit} 個項`,
      maxProperties: `不應多於 {limit} 個屬性`,
      minProperties: `不應少於 {limit} 個屬性`,
      multipleOf: `應當是 {multipleOf} 的整數倍`,
      not: `不應當匹配 "not" schema`,
      oneOf: `隻能匹配一個 "oneOf" 中的 schema`,
      pattern: `數據格式不正確`,
      uniqueItems: `不應當含有重複項 (第 {j} 項與第 {i} 項是重複的)`,
      custom: `格式不正確`,
      propertyNames: `屬性名 "{propertyName}" 無效`,
      patternRequired: `應當有屬性匹配模式 {missingPattern}`,
      switch: `由於 {caseIndex} 失敗，未通過 "switch" 校驗`,
      const: `應當等於常量`,
      contains: `應當包含一個有效項`,
      formatExclusiveMaximum: `formatExclusiveMaximum 應當是佈爾值`,
      formatExclusiveMinimum: `formatExclusiveMinimum 應當是佈爾值`,
      if: `應當匹配模式 "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `跳過`,
    prev: `上一項`,
    next: `下一項`,
    done: `完成`
  }
};
var trTR = {
  abbr: "tr-TR",
  exception: {
    403: `Üzgünüz, bu sayfaya erişiminiz yok`,
    404: `Maalesef bu sayfa mevcut değil`,
    500: `Üzgünüz, sunucu hatası`,
    backToHome: `Ana Sayfa'ya geri dön`
  },
  noticeIcon: {
    emptyText: "Veri yok",
    clearText: "Temiz"
  },
  reuseTab: {
    close: "Sekmeyi Kapat",
    closeOther: "Diğer sekmeleri kapat",
    closeRight: "Sağdaki sekmeleri kapat",
    refresh: "täzele"
  },
  tagSelect: {
    expand: "Genişlet",
    collapse: "Daralt"
  },
  miniProgress: {
    target: "Hedef: "
  },
  st: {
    total: "{{range[0]}} ile {{range[1]}} arasında {{total}}",
    filterConfirm: "Tamam",
    filterReset: "Sıfırla"
  },
  sf: {
    submit: "Gönder",
    reset: "Sıfırla",
    search: "Ara",
    edit: "Kaydet",
    addText: "Ekle",
    removeText: "Kaldır",
    checkAllText: "Tümünü kontrol et",
    error: {
      "false schema": `Boolean schema is false`,
      $ref: `Can't resolve reference {ref}`,
      additionalItems: `Should not have more than {limit} item`,
      additionalProperties: `Should not have additional properties`,
      anyOf: `Should match some schema in "anyOf"`,
      dependencies: `should have property {deps} when property {property} is present`,
      enum: `Should be equal to one of predefined values`,
      format: `Should match format "{format}"`,
      type: `Should be {type}`,
      required: `Required`,
      maxLength: `Should not be longer than {limit} character`,
      minLength: `Should not be shorter than {limit} character`,
      minimum: `Should be {comparison} {limit}`,
      formatMinimum: `Should be {comparison} {limit}`,
      maximum: `Should be {comparison} {limit}`,
      formatMaximum: `Should be {comparison} {limit}`,
      maxItems: `Should not have more than {limit} item`,
      minItems: `Should not have less than {limit} item`,
      maxProperties: `Should not have more than {limit} property`,
      minProperties: `Should not have less than {limit} property`,
      multipleOf: `Should be a multiple of {multipleOf}`,
      not: `Should not be valid according to schema in "not"`,
      oneOf: `Should match exactly one schema in "oneOf"`,
      pattern: `Should match pattern "{pattern}"`,
      uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
      custom: `Should match format`,
      propertyNames: `Property name "{propertyName}" is invalid`,
      patternRequired: `Should have property matching pattern "{missingPattern}"`,
      switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
      const: `Should be equal to constant`,
      contains: `Should contain a valid item`,
      formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
      if: `Should match "{failingKeyword}" schema`
    }
  },
  onboarding: {
    skip: `Atla`,
    prev: `Önceki`,
    next: `Sonraki`,
    done: `Bitti`
  }
};
var plPL = {
  abbr: "pl-PL",
  exception: {
    403: `Niestety, nie masz uprawnień do tej strony`,
    404: `Niestety, ta strona nie istnieje`,
    500: `Niestety, błąd serwera`,
    backToHome: "Powróć do strony głównej"
  },
  noticeIcon: {
    emptyText: "Brak danych",
    clearText: "Wyczyść"
  },
  reuseTab: {
    close: "Zamknij kartę",
    closeOther: "Zamknij inne karty",
    closeRight: "Zamknij karty po prawej",
    refresh: "Refresh"
  },
  tagSelect: {
    expand: "Rozszerz",
    collapse: "Zmniejsz"
  },
  miniProgress: {
    target: "Cel: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} z {{total}}",
    filterConfirm: "OK",
    filterReset: "Wyczyść"
  },
  sf: {
    submit: "Wyślij",
    reset: "Resetuj",
    search: "Szukaj",
    edit: "Zapisz",
    addText: "Dodaj",
    removeText: "Usuń",
    checkAllText: "Zaznacz wszystkie",
    error: {
      "false schema": `Boolean schema is false`,
      $ref: `Can't resolve reference {ref}`,
      additionalItems: `Should not have more than {limit} item`,
      additionalProperties: `Should not have additional properties`,
      anyOf: `Should match some schema in "anyOf"`,
      dependencies: `should have property {deps} when property {property} is present`,
      enum: `Should be equal to one of predefined values`,
      format: `Should match format "{format}"`,
      type: `Should be {type}`,
      required: `Required`,
      maxLength: `Should not be longer than {limit} character`,
      minLength: `Should not be shorter than {limit} character`,
      minimum: `Should be {comparison} {limit}`,
      formatMinimum: `Should be {comparison} {limit}`,
      maximum: `Should be {comparison} {limit}`,
      formatMaximum: `Should be {comparison} {limit}`,
      maxItems: `Should not have more than {limit} item`,
      minItems: `Should not have less than {limit} item`,
      maxProperties: `Should not have more than {limit} property`,
      minProperties: `Should not have less than {limit} property`,
      multipleOf: `Should be a multiple of {multipleOf}`,
      not: `Should not be valid according to schema in "not"`,
      oneOf: `Should match exactly one schema in "oneOf"`,
      pattern: `Should match pattern "{pattern}"`,
      uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
      custom: `Should match format`,
      propertyNames: `Property name "{propertyName}" is invalid`,
      patternRequired: `Should have property matching pattern "{missingPattern}"`,
      switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
      const: `Should be equal to constant`,
      contains: `Should contain a valid item`,
      formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
      if: `Should match "{failingKeyword}" schema`
    }
  },
  onboarding: {
    skip: `Pominąć`,
    prev: `Poprzedni`,
    next: `Kolejny`,
    done: `Gotowe`
  }
};
var elGR = {
  abbr: "el-GR",
  exception: {
    403: `Λυπούμαστε, δεν έχετε πρόσβαση σε αυτήν τη σελίδα`,
    404: `Λυπούμαστε, η σελίδα αυτή δεν βρέθηκε`,
    500: `Λυπούμαστε, σφάλμα διακομιστή`,
    backToHome: "Επιστροφή στην αρχική σελίδα"
  },
  noticeIcon: {
    emptyText: "Δεν υπάρχουν δεδομένα",
    clearText: "Καθαρισμός"
  },
  reuseTab: {
    close: "Κλείσιμο καρτέλας",
    closeOther: "Κλείσιμο των άλλων καρτέλων",
    closeRight: "Κλείσιμο των καρτελών δεξιά",
    refresh: "Ανανέωση"
  },
  tagSelect: {
    expand: "Επέκταση",
    collapse: "Σύμπτυξη"
  },
  miniProgress: {
    target: "Στόχος: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} από {{total}}",
    filterConfirm: "ΟΚ",
    filterReset: "Επαναφορά"
  },
  sf: {
    submit: "Υποβολή",
    reset: "Επαναφορά",
    search: "Αναζήτηση",
    edit: "Αποθήκευση",
    addText: "Προσθήκη",
    removeText: "Αφαίρεση",
    checkAllText: "Επιλογή όλων",
    error: {
      "false schema": `Η δυαδική δομή είναι ψευδής`,
      $ref: `Δεν είναι δυνατή η επίλυση της αναφοράς {ref}`,
      additionalItems: `Δεν πρέπει να έχει περισσότερα από {limit} στοιχεία`,
      additionalProperties: `Δεν πρέπει να έχει επιπλέον χαρακτηριστικά`,
      anyOf: `Πρέπει να ταιριάζει με κάποια απο τις δομές στο "anyOf"`,
      dependencies: `τα χαρακτηριστικά {deps} είναι απαραίτητα, όταν υπάρχει το χαρακτηριστικό {property}`,
      enum: `Πρέπει να είναι ίσο με μία από τις προκαθορισμένες τιμές`,
      format: `Πρέπει να έχει την μορφή "{format}"`,
      type: `Πρέπει να είναι {type}`,
      required: `Απαιτείται`,
      maxLength: `Δεν πρέπει να είναι μεγαλύτερο από {limit} χαρακτήρες`,
      minLength: `Δεν πρέπει να είναι μικρότερο από {limit} χαρακτήρες`,
      minimum: `Πρέπει να είναι {comparison} {limit}`,
      formatMinimum: `Πρέπει να είναι {comparison} {limit}`,
      maximum: `Πρέπει να είναι {comparison} {limit}`,
      formatMaximum: `Πρέπει να είναι {comparison} {limit}`,
      maxItems: `Δεν πρέπει να έχει περισσότερα από {limit} στοιχεία`,
      minItems: `Δεν πρέπει να έχει λιγότερα από {limit} στοιχεία`,
      maxProperties: `Δεν πρέπει να έχει περισσότερα από {limit} χαρακτηριστικά`,
      minProperties: `Δεν πρέπει να έχει λιγότερα από {limit} χαρακτηριστικά`,
      multipleOf: `Πρέπει να είναι πολλαπλάσιο του {multipleOf}`,
      not: `Δεν πρέπει να είναι εγκύρο, σύμφωνα με την δομή στο "not"`,
      oneOf: `Πρέπει να ταιριάζει με ακριβώς μια απο τις δομές στο "oneOf"`,
      pattern: `Πρέπει να ταιριάζει με το πρότυπο "{pattern}"`,
      uniqueItems: `Τα στοιχεία δεν πρέπει να επαναλαμβάνονται (τα στοιχεία ## {j} και {i} είναι ίδια)`,
      custom: `Πρέπει να έχει την μορφή`,
      propertyNames: `Το όνομα του χαρακτηριστικού "{propertyName}" δεν είναι έγκυρο`,
      patternRequired: `Πρέπει να υπάρχει το χαρακτηριστικό αντιπαραβολής προτύπου "{missingPattern}"`,
      switch: `Πρέπει να περάσει ο έλεγχος εγκυρότητας της λέξης-κλειδιού με την χρήση της "switch", η περίπτωση {caseIndex} αποτυγχάνει`,
      const: `Πρέπει να είναι ίσο με σταθερά`,
      contains: `Πρέπει να περιέχει κάποιο έγκυρο στοιχείο`,
      formatExclusiveMaximum: `formatExclusiveMaximum πρέπει να είναι boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum πρέπει να είναι boolean`,
      if: `Πρέπει να ταιριάζει στην δομή "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Παράλειψη`,
    prev: `Προηγούμενο`,
    next: `Επόμενο`,
    done: `Ολοκληρώθηκε`
  }
};
var koKR = {
  abbr: "ko-KR",
  exception: {
    403: `죄송합니다.이 페이지에 액세스 할 수 없습니다.`,
    404: `죄송합니다. 해당 페이지가 없습니다.`,
    500: `죄송합니다, 서버 오류가 있습니다.`,
    backToHome: "홈으로 돌아갑니다."
  },
  noticeIcon: {
    emptyText: "데이터 없음",
    clearText: "지우기"
  },
  reuseTab: {
    close: "탭 닫기",
    closeOther: "다른 탭 닫기",
    closeRight: "오른쪽 탭 닫기",
    refresh: "새롭게 하다"
  },
  tagSelect: {
    expand: "펼치기",
    collapse: "접기"
  },
  miniProgress: {
    target: "대상: "
  },
  st: {
    total: "전체 {{total}}건",
    filterConfirm: "확인",
    filterReset: "초기화"
  },
  sf: {
    submit: "제출",
    reset: "재설정",
    search: "검색",
    edit: "저장",
    addText: "추가",
    removeText: "제거",
    checkAllText: "모두 확인",
    error: {
      "false schema": `Boolean schema is false`,
      $ref: `Can't resolve reference {ref}`,
      additionalItems: `Should not have more than {limit} item`,
      additionalProperties: `Should not have additional properties`,
      anyOf: `Should match some schema in "anyOf"`,
      dependencies: `should have property {deps} when property {property} is present`,
      enum: `Should be equal to one of predefined values`,
      format: `Should match format "{format}"`,
      type: `Should be {type}`,
      required: `Required`,
      maxLength: `Should not be longer than {limit} character`,
      minLength: `Should not be shorter than {limit} character`,
      minimum: `Should be {comparison} {limit}`,
      formatMinimum: `Should be {comparison} {limit}`,
      maximum: `Should be {comparison} {limit}`,
      formatMaximum: `Should be {comparison} {limit}`,
      maxItems: `Should not have more than {limit} item`,
      minItems: `Should not have less than {limit} item`,
      maxProperties: `Should not have more than {limit} property`,
      minProperties: `Should not have less than {limit} property`,
      multipleOf: `Should be a multiple of {multipleOf}`,
      not: `Should not be valid according to schema in "not"`,
      oneOf: `Should match exactly one schema in "oneOf"`,
      pattern: `Should match pattern "{pattern}"`,
      uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
      custom: `Should match format`,
      propertyNames: `Property name "{propertyName}" is invalid`,
      patternRequired: `Should have property matching pattern "{missingPattern}"`,
      switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
      const: `Should be equal to constant`,
      contains: `Should contain a valid item`,
      formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
      if: `Should match "{failingKeyword}" schema`
    }
  },
  onboarding: {
    skip: `건너 뛰기`,
    prev: `이전`,
    next: `다음`,
    done: `끝난`
  }
};
var hrHR = {
  abbr: "hr-HR",
  exception: {
    403: `Nažalost, nemate pristup ovoj lokaciji`,
    404: `Nažalost, lokacija ne postoji`,
    500: `Nažalost, server je javio pogrešku`,
    backToHome: "Nazad na početnu stranicu"
  },
  noticeIcon: {
    emptyText: "Nema podataka",
    clearText: "Obriši"
  },
  reuseTab: {
    close: "Zatvori karticu",
    closeOther: "Zatvori druge kartice",
    closeRight: "Zatvori kartice desno",
    refresh: "Refresh"
  },
  tagSelect: {
    expand: "Proširi",
    collapse: "Skupi"
  },
  miniProgress: {
    target: "Cilj: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} od {{total}}",
    filterConfirm: "U redu",
    filterReset: "Poništi"
  },
  sf: {
    submit: "Pošalji",
    reset: "Poništi",
    search: "Pretraži",
    edit: "Spremi",
    addText: "Dodaj",
    removeText: "Ukloni",
    checkAllText: "Označi sve"
  },
  onboarding: {
    skip: `Preskočiti`,
    prev: `Prethodna`,
    next: `Sljedeći`,
    done: `Sastavljeno`
  }
};
var jaJP = {
  abbr: "ja-JP",
  exception: {
    403: "ページへのアクセス権限がありません",
    404: "ページが存在しません",
    500: "サーバーエラーが発生しました",
    backToHome: "ホームに戻る"
  },
  noticeIcon: {
    emptyText: "データが有りません",
    clearText: "クリア"
  },
  reuseTab: {
    close: "タブを閉じる",
    closeOther: "他のタブを閉じる",
    closeRight: "右のタブを閉じる",
    refresh: "リフレッシュ"
  },
  tagSelect: {
    expand: "展開する",
    collapse: "折りたたむ"
  },
  miniProgress: {
    target: "設定値: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} / {{total}}",
    filterConfirm: "確定",
    filterReset: "リセット"
  },
  sf: {
    submit: "送信",
    reset: "リセット",
    search: "検索",
    edit: "保存",
    addText: "追加",
    removeText: "削除",
    checkAllText: "全選択",
    error: {
      "false schema": `真偽値スキーマが不正です`,
      $ref: `参照を解決できません: {ref}`,
      additionalItems: `{limit}個を超えるアイテムを含めることはできません`,
      additionalProperties: `追加のプロパティを使用しないでください`,
      anyOf: `"anyOf"のスキーマと一致する必要があります`,
      dependencies: `プロパティ {property} を指定した場合、次の依存関係を満たす必要があります: {deps}`,
      enum: `定義された値のいずれかに等しくなければなりません`,
      format: `入力形式に一致しません: "{format}"`,
      type: `型が不正です: {type}`,
      required: `必須項目です`,
      maxLength: `最大文字数: {limit}`,
      minLength: `最少文字数: {limit}`,
      minimum: `値が不正です: {comparison} {limit}`,
      formatMinimum: `値が不正です: {comparison} {limit}`,
      maximum: `値が不正です: {comparison} {limit}`,
      formatMaximum: `値が不正です: {comparison} {limit}`,
      maxItems: `最大選択数は {limit} より小さい必要があります`,
      minItems: `最小選択数は {limit} より大きい必要があります`,
      maxProperties: `値を{limit}より大きくすることはできません`,
      minProperties: `値を{limit}より小さくすることはできません`,
      multipleOf: `値は次の数の倍数である必要があります: {multipleOf}`,
      not: `値が不正です:`,
      oneOf: `値が不正です:`,
      pattern: `次のパターンに一致する必要があります: "{pattern}"`,
      uniqueItems: `値が重複しています: 選択肢: {j} 、{i}`,
      custom: `形式と一致する必要があります`,
      propertyNames: `次のプロパティの値が無効です: "{propertyName}"`,
      patternRequired: `次のパターンに一致するプロパティが必須です: "{missingPattern}"`,
      switch: `"switch" キーワードの値が不正です: {caseIndex}`,
      const: `値が定数に一致しません`,
      contains: `有効なアイテムを含める必要があります`,
      formatExclusiveMaximum: `formatExclusiveMaximum は真偽値である必要があります`,
      formatExclusiveMinimum: `formatExclusiveMaximum は真偽値である必要があります`,
      if: `パターンと一致する必要があります: "{failingKeyword}" `
    }
  },
  onboarding: {
    skip: `スキップ`,
    prev: `前へ`,
    next: `次`,
    done: `できた`
  }
};
var slSI = {
  abbr: "sl-SI",
  exception: {
    403: `Žal nimate dostopa do te strani`,
    404: `Žal stran, ki ste jo obiskali, ne obstaja`,
    500: `Žal strežnik poroča o napaki`,
    backToHome: "Nazaj domov"
  },
  noticeIcon: {
    emptyText: "Ni podatkov",
    clearText: "Počisti"
  },
  reuseTab: {
    close: "Zapri zavihek",
    closeOther: "Zaprite druge zavihke",
    closeRight: "Zaprite zavihke na desni"
  },
  tagSelect: {
    expand: "Razširi",
    collapse: "Strni"
  },
  miniProgress: {
    target: "Cilj: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} of {{total}}",
    filterConfirm: "OK",
    filterReset: "Reset"
  },
  sf: {
    submit: "Pošlji",
    reset: "Reset",
    search: "Išči",
    edit: "Shrani",
    addText: "Dodaj",
    removeText: "Odstrani",
    checkAllText: "Preveri vse",
    error: {
      "false schema": `Boolova shema je napačna`,
      $ref: `Referenc ni mogoče razrešiti {ref}`,
      additionalItems: `Ne sme imeti več kot {limit} artiklov`,
      additionalProperties: `Ne bi smel imeti dodatnih lastnosti`,
      anyOf: `Se mora ujemati s shemo v "anyOf"`,
      dependencies: `mora imeti lastnosti {deps} ko je artikel {property} prisoten`,
      enum: `Mora biti enaka eni od vnaprej določenih vrednosti`,
      format: `Naj ustreza formatu "{format}"`,
      type: `Naj bo {type}`,
      required: `Zahtevano`,
      maxLength: `Ne sme biti daljši od {limit} znakov`,
      minLength: `Ne sme biti krajši od {limit} znakov`,
      minimum: `Naj bo {comparison} {limit}`,
      formatMinimum: `Naj bo {comparison} {limit}`,
      maximum: `Naj bo {comparison} {limit}`,
      formatMaximum: `Naj bo {comparison} {limit}`,
      maxItems: `Ne sme imeti več kot {limit} artiklov`,
      minItems: `Ne sme imeti manj kot {limit} artiklov`,
      maxProperties: `Ne sme imeti več kot {limit} lastnosti`,
      minProperties: `Ne sme imeti manj kot {limit} lastnosti`,
      multipleOf: `Mora biti večkratnik od {multipleOf}`,
      not: `Ne sme biti veljaven po shemi v "not"`,
      oneOf: `Naj ustreza natančno eni shemi v "oneOf"`,
      pattern: `Naj se ujema z vzorcem "{pattern}"`,
      uniqueItems: `Ne bi smel imeti dvojnikov (items ## {j} in {i} so identični)`,
      custom: `Naj ustreza formatu`,
      propertyNames: `Ime artikla "{propertyName}" je neveljavno`,
      patternRequired: `Mora imeti vzorec ujemanja lastnosti "{missingPattern}"`,
      switch: `Mora prestati "switch" validacijo ključne besede, primer {caseIndex} ne uspe`,
      const: `Naj bo enako konstanti`,
      contains: `Naj vsebuje veljaven artikel`,
      formatExclusiveMaximum: `formatExclusiveMaximum naj bo boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum naj bo boolean`,
      if: `Naj se ujema s shemo "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Preskoči`,
    prev: `Prejšnje`,
    next: `Naslednji`,
    done: `Končano`
  }
};
var frFR = {
  abbr: "fr-FR",
  exception: {
    403: `Désolé, vous n'avez pas accès à cette page`,
    404: `Désolé, la page que vous avez visitée n'existe pas`,
    500: `Désolé, le serveur signale une erreur`,
    backToHome: "Retour à l'accueil"
  },
  noticeIcon: {
    emptyText: "Pas de données",
    clearText: "Effacer"
  },
  reuseTab: {
    close: "Fermer l'onglet",
    closeOther: "Fermer les autres onglets",
    closeRight: "Fermer les onglets à droite",
    refresh: "Rafraîchir"
  },
  tagSelect: {
    expand: "Etendre",
    collapse: "Effondrer"
  },
  miniProgress: {
    target: "Cible: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} de {{total}}",
    filterConfirm: "OK",
    filterReset: "Réinitialiser"
  },
  sf: {
    submit: "Soumettre",
    reset: "Réinitialiser",
    search: "Rechercher",
    edit: "Sauvegarder",
    addText: "Ajouter",
    removeText: "Supprimer",
    checkAllText: "Cochez toutes",
    error: {
      "false schema": `Boolean schema is false`,
      $ref: `Can't resolve reference {ref}`,
      additionalItems: `Should not have more than {limit} item`,
      additionalProperties: `Should not have additional properties`,
      anyOf: `Should match some schema in "anyOf"`,
      dependencies: `should have property {deps} when property {property} is present`,
      enum: `Should be equal to one of predefined values`,
      format: `Should match format "{format}"`,
      type: `Should be {type}`,
      required: `Required`,
      maxLength: `Should not be longer than {limit} character`,
      minLength: `Should not be shorter than {limit} character`,
      minimum: `Should be {comparison} {limit}`,
      formatMinimum: `Should be {comparison} {limit}`,
      maximum: `Should be {comparison} {limit}`,
      formatMaximum: `Should be {comparison} {limit}`,
      maxItems: `Should not have more than {limit} item`,
      minItems: `Should not have less than {limit} item`,
      maxProperties: `Should not have more than {limit} property`,
      minProperties: `Should not have less than {limit} property`,
      multipleOf: `Should be a multiple of {multipleOf}`,
      not: `Should not be valid according to schema in "not"`,
      oneOf: `Should match exactly one schema in "oneOf"`,
      pattern: `Should match pattern "{pattern}"`,
      uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
      custom: `Should match format`,
      propertyNames: `Property name "{propertyName}" is invalid`,
      patternRequired: `Should have property matching pattern "{missingPattern}"`,
      switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
      const: `Should be equal to constant`,
      contains: `Should contain a valid item`,
      formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
      if: `Should match "{failingKeyword}" schema`
    }
  },
  onboarding: {
    skip: `Passer`,
    prev: `Précédent`,
    next: `Suivant`,
    done: `Terminé`
  }
};
var esES = {
  abbr: "es-ES",
  exception: {
    403: `Lo sentimos, no tiene acceso a esta página`,
    404: `Lo sentimos, la página que ha visitado no existe`,
    500: `Lo siento, error interno del servidor `,
    backToHome: "Volver a la página de inicio"
  },
  noticeIcon: {
    emptyText: "No hay datos",
    clearText: "Limpiar"
  },
  reuseTab: {
    close: "Cerrar pestaña",
    closeOther: "Cerrar otras pestañas",
    closeRight: "Cerrar pestañas a la derecha",
    refresh: "Actualizar"
  },
  tagSelect: {
    expand: "Expandir",
    collapse: "Ocultar"
  },
  miniProgress: {
    target: "Target: "
  },
  st: {
    total: "{{rango[0]}} - {{rango[1]}} de {{total}}",
    filterConfirm: "Aceptar",
    filterReset: "Reiniciar"
  },
  sf: {
    submit: "Submit",
    reset: "Reiniciar",
    search: "Buscar",
    edit: "Guardar",
    addText: "Añadir",
    removeText: "Eliminar",
    checkAllText: "Comprobar todo",
    error: {
      "false schema": `Boolean schema is false`,
      $ref: `Can't resolve reference {ref}`,
      additionalItems: `Should not have more than {limit} item`,
      additionalProperties: `Should not have additional properties`,
      anyOf: `Should match some schema in "anyOf"`,
      dependencies: `should have property {deps} when property {property} is present`,
      enum: `Should be equal to one of predefined values`,
      format: `Should match format "{format}"`,
      type: `Should be {type}`,
      required: `Required`,
      maxLength: `Should not be longer than {limit} character`,
      minLength: `Should not be shorter than {limit} character`,
      minimum: `Should be {comparison} {limit}`,
      formatMinimum: `Should be {comparison} {limit}`,
      maximum: `Should be {comparison} {limit}`,
      formatMaximum: `Should be {comparison} {limit}`,
      maxItems: `Should not have more than {limit} item`,
      minItems: `Should not have less than {limit} item`,
      maxProperties: `Should not have more than {limit} property`,
      minProperties: `Should not have less than {limit} property`,
      multipleOf: `Should be a multiple of {multipleOf}`,
      not: `Should not be valid according to schema in "not"`,
      oneOf: `Should match exactly one schema in "oneOf"`,
      pattern: `Should match pattern "{pattern}"`,
      uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
      custom: `Should match format`,
      propertyNames: `Property name "{propertyName}" is invalid`,
      patternRequired: `Should have property matching pattern "{missingPattern}"`,
      switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
      const: `Should be equal to constant`,
      contains: `Should contain a valid item`,
      formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
      if: `Should match "{failingKeyword}" schema`
    }
  },
  onboarding: {
    skip: `Omitir`,
    prev: `Previo`,
    next: `Siguiente`,
    done: `Terminado`
  }
};
var itIT = {
  abbr: "it-IT",
  exception: {
    403: `Spiacenti, non hai accesso a questa pagina`,
    404: `Spiacenti, la pagina che hai visitato non esiste`,
    500: `Spiacenti, il server sta riscontrando un errore`,
    backToHome: "Torna alla Home"
  },
  noticeIcon: {
    emptyText: "Nessun dato",
    clearText: "Cancella memoria locale"
  },
  reuseTab: {
    close: "Chiudi la scheda",
    closeOther: "Chiudi le altre schede",
    closeRight: "Chiudi le schede a destra",
    refresh: "Aggiorna"
  },
  tagSelect: {
    expand: "Espandi",
    collapse: "Comprimi"
  },
  miniProgress: {
    target: "Obiettivo: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} di {{total}}",
    filterConfirm: "OK",
    filterReset: "Reimposta"
  },
  sf: {
    submit: "Invia",
    reset: "Reimposta",
    search: "Cerca",
    edit: "Salva",
    addText: "Aggiungi",
    removeText: "Rimuovi",
    checkAllText: "Seleziona tutto",
    error: {
      "false schema": `Lo schema booleano è falso`,
      $ref: `Impossibile risolvere il riferimento {ref}`,
      additionalItems: `Non deve avere più di {limit} elementi`,
      additionalProperties: `Non deve avere proprietà aggiuntive`,
      anyOf: `Deve corrispondere a uno schema in "anyOf"`,
      dependencies: `Deve avere una proprietà {deps} quando è presente la proprietà {property}`,
      enum: `Deve essere uguale a uno dei valori predefiniti`,
      format: `Deve corrispondere al formato "{format}"`,
      type: `Deve essere {type}`,
      required: `Obbligatorio`,
      maxLength: `Non deve essere superiore a {limit} caratteri`,
      minLength: `Non deve essere superiore a {limit} caratteri`,
      minimum: `Deve essere {comparison} {limit}`,
      formatMinimum: `Deve essere {comparison} {limit}`,
      maximum: `Deve essere {comparison} {limit}`,
      formatMaximum: `Deve essere {comparison} {limit}`,
      maxItems: `Non deve avere più di {limit} elementi`,
      minItems: `Non deve avere meno di {limit} elementi`,
      maxProperties: `Non deve avere più di {limit} proprietà`,
      minProperties: `Non deve avere meno di {limit} proprietà`,
      multipleOf: `Deve essere un multiplo di {multipleOf}`,
      not: `Non deve essere valido secondo lo schema in "not"`,
      oneOf: `Deve corrispondere esattamente a uno schema in "oneOf"`,
      pattern: `Deve corrispondere al modello "{pattern}"`,
      uniqueItems: `Non deve avere elementi duplicati (gli elementi ## {j} e {i} sono identici)`,
      custom: `Deve corrispondere al formato "{format}"`,
      propertyNames: `Il nome della proprietà "{propertyName}" non è valido`,
      patternRequired: `Deve avere una proprietà corrispondete al modello "{missingPattern}"`,
      switch: `Deve superare la convalida della parola chiave "switch", il caso {caseIndex} non è riuscito`,
      const: `Deve essere uguale alla costante`,
      contains: `Deve contenere un elemento valido`,
      formatExclusiveMaximum: `formatExclusiveMaximum deve essere booleano`,
      formatExclusiveMinimum: `formatExclusiveMaximum deve essere booleano`,
      if: `Deve corrispondere allo schema "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Salta`,
    prev: `Precedente`,
    next: `Successivo`,
    done: `Fatto`
  }
};
var viVI = {
  abbr: "vi-VI",
  exception: {
    403: `Xin lỗi, bạn không có quyền truy cập vào trang này`,
    404: `Xin lỗi, trang bạn truy cập không tồn tại`,
    500: `Xin lỗi, máy chủ đang báo cáo một lỗi`,
    backToHome: "Quay lại Trang chủ"
  },
  noticeIcon: {
    emptyText: "Không có dữ liệu",
    clearText: "Xóa"
  },
  reuseTab: {
    close: "Đóng tab",
    closeOther: "Đóng các tab khác",
    closeRight: "Đóng các tab bên phải",
    refresh: "Làm mới"
  },
  tagSelect: {
    expand: "Mở rộng",
    collapse: "Thu gọn"
  },
  miniProgress: {
    target: "Mục tiêu: "
  },
  st: {
    total: "{{range[0]}} - {{range[1]}} của {{total}}",
    filterConfirm: "OK",
    filterReset: "Đặt lại"
  },
  sf: {
    submit: "Gửi",
    reset: "Đặt lại",
    search: "Tìm kiếm",
    edit: "Lưu",
    addText: "Thêm",
    removeText: "Xóa",
    checkAllText: "Chọn tất cả",
    error: {
      "false schema": `Mô hình Boolean sai`,
      $ref: `Không thể giải quyết tham chiếu {ref}`,
      additionalItems: `Không nên có nhiều hơn {limit} mục`,
      additionalProperties: `Không nên có các thuộc tính bổ sung`,
      anyOf: `Nên phù hợp với một số mô hình trong "anyOf"`,
      dependencies: `nên có thuộc tính {deps} khi thuộc tính {property} hiện diện`,
      enum: `Nên bằng với một trong số các giá trị được xác định trước`,
      format: `Nên phù hợp với định dạng "{format}"`,
      type: `Nên là {type}`,
      required: `Bắt buộc`,
      maxLength: `Không nên dài hơn {limit} ký tự`,
      minLength: `Không nên ngắn hơn {limit} ký tự`,
      minimum: `Nên là {comparison} {limit}`,
      formatMinimum: `Nên là {comparison} {limit}`,
      maximum: `Nên là {comparison} {limit}`,
      formatMaximum: `Nên là {comparison} {limit}`,
      maxItems: `Không nên có nhiều hơn {limit} mục`,
      minItems: `Không nên có ít hơn {limit} mục`,
      maxProperties: `Không nên có nhiều hơn {limit} thuộc tính`,
      minProperties: `Không nên có ít hơn {limit} thuộc tính`,
      multipleOf: `Nên là bội số của {multipleOf}`,
      not: `Không nên hợp lệ theo mô hình trong "not"`,
      oneOf: `Nên phù hợp chính xác với một mô hình trong "oneOf"`,
      pattern: `Nên phù hợp với mẫu "{pattern}"`,
      uniqueItems: `Không nên có các mục trùng lặp (mục ## {j} và {i} giống nhau)`,
      custom: `Nên phù hợp với định dạng`,
      propertyNames: `Tên thuộc tính "{propertyName}" không hợp lệ`,
      patternRequired: `Nên có thuộc tính phù hợp với mẫu "{missingPattern}"`,
      switch: `Nên vượt qua việc xác nhận từ khóa "switch", trường hợp {caseIndex} thất bại`,
      const: `Nên bằng với hằng số`,
      contains: `Nên chứa một mục hợp lệ`,
      formatExclusiveMaximum: `formatExclusiveMaximum nên là boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum nên là boolean`,
      if: `Nên phù hợp với mô hình "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Bỏ qua`,
    prev: `Trước`,
    next: `Tiếp`,
    done: `Hoàn thành`
  }
};
var _DatePipe = class _DatePipe {
  constructor() {
    this.nzI18n = inject(NzI18nService);
    this.defFormat = inject(AlainConfigService).get("themePipe")?.dateFormat ?? "yyyy-MM-dd HH:mm";
  }
  transform(value, formatString) {
    return formatDate(value, formatString ?? this.defFormat, this.nzI18n.getDateLocale());
  }
};
_DatePipe.ɵfac = function DatePipe_Factory(t) {
  return new (t || _DatePipe)();
};
_DatePipe.ɵpipe = ɵɵdefinePipe({
  name: "_date",
  type: _DatePipe,
  pure: true,
  standalone: true
});
var DatePipe = _DatePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePipe, [{
    type: Pipe,
    args: [{
      name: "_date",
      standalone: true
    }]
  }], null, null);
})();
var _KeysPipe = class _KeysPipe {
  transform(value, keyIsNumber = false) {
    const ret = [];
    Object.keys(value).forEach((key) => {
      ret.push({
        key: keyIsNumber ? +key : key,
        value: value[key]
      });
    });
    return ret;
  }
};
_KeysPipe.ɵfac = function KeysPipe_Factory(t) {
  return new (t || _KeysPipe)();
};
_KeysPipe.ɵpipe = ɵɵdefinePipe({
  name: "keys",
  type: _KeysPipe,
  pure: true,
  standalone: true
});
var KeysPipe = _KeysPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeysPipe, [{
    type: Pipe,
    args: [{
      name: "keys",
      standalone: true
    }]
  }], null, null);
})();
var ICON_YES = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>`;
var ICON_NO = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>`;
var CLS_YES = `class="yn__yes"`;
var CLS_NO = `class="yn__no"`;
function yn(value, opt) {
  let html = "";
  let {
    yes,
    no,
    mode
  } = __spreadValues({}, opt);
  yes = yes || "是";
  no = no || "否";
  switch (mode) {
    case "full":
      html = value ? `<i ${CLS_YES}>${ICON_YES}<span>${yes}</span></i>` : `<i ${CLS_NO}>${ICON_NO}<span>${no}</span></i>`;
      break;
    case "text":
      html = value ? `<i ${CLS_YES}>${yes}</i>` : `<i ${CLS_NO}>${no}</i>`;
      break;
    default:
      html = value ? `<i ${CLS_YES} title="${yes}">${ICON_YES}</i>` : `<i ${CLS_NO} title="${no}">${ICON_NO}</i>`;
      break;
  }
  return html;
}
var _YNPipe = class _YNPipe {
  constructor() {
    this.dom = inject(DomSanitizer);
  }
  transform(value, yes, no, mode, isSafeHtml = true) {
    const html = yn(value, {
      yes,
      no,
      mode
    });
    return isSafeHtml ? this.dom.bypassSecurityTrustHtml(html) : html;
  }
};
_YNPipe.ɵfac = function YNPipe_Factory(t) {
  return new (t || _YNPipe)();
};
_YNPipe.ɵpipe = ɵɵdefinePipe({
  name: "yn",
  type: _YNPipe,
  pure: true,
  standalone: true
});
var YNPipe = _YNPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YNPipe, [{
    type: Pipe,
    args: [{
      name: "yn",
      standalone: true
    }]
  }], null, null);
})();
var _HTMLPipe = class _HTMLPipe {
  constructor() {
    this.dom = inject(DomSanitizer);
  }
  transform(html) {
    return html ? this.dom.bypassSecurityTrustHtml(html) : "";
  }
};
_HTMLPipe.ɵfac = function HTMLPipe_Factory(t) {
  return new (t || _HTMLPipe)();
};
_HTMLPipe.ɵpipe = ɵɵdefinePipe({
  name: "html",
  type: _HTMLPipe,
  pure: true,
  standalone: true
});
var HTMLPipe = _HTMLPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HTMLPipe, [{
    type: Pipe,
    args: [{
      name: "html",
      standalone: true
    }]
  }], null, null);
})();
var _URLPipe = class _URLPipe {
  constructor() {
    this.dom = inject(DomSanitizer);
  }
  transform(url) {
    return url ? this.dom.bypassSecurityTrustUrl(url) : "";
  }
};
_URLPipe.ɵfac = function URLPipe_Factory(t) {
  return new (t || _URLPipe)();
};
_URLPipe.ɵpipe = ɵɵdefinePipe({
  name: "url",
  type: _URLPipe,
  pure: true,
  standalone: true
});
var URLPipe = _URLPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(URLPipe, [{
    type: Pipe,
    args: [{
      name: "url",
      standalone: true
    }]
  }], null, null);
})();
var HELPERS = [ModalHelper, DrawerHelper];
var PIPES = [DatePipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
var ICONS = [BellOutline, DeleteOutline, PlusOutline, InboxOutline];
var _AlainThemeModule = class _AlainThemeModule {
  constructor(iconSrv) {
    iconSrv.addIcon(...ICONS);
  }
  static forRoot() {
    return {
      ngModule: _AlainThemeModule,
      providers: HELPERS
    };
  }
  static forChild() {
    return {
      ngModule: _AlainThemeModule,
      providers: HELPERS
    };
  }
};
_AlainThemeModule.ɵfac = function AlainThemeModule_Factory(t) {
  return new (t || _AlainThemeModule)(ɵɵinject(NzIconService));
};
_AlainThemeModule.ɵmod = ɵɵdefineNgModule({
  type: _AlainThemeModule,
  imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule, DatePipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe],
  exports: [DatePipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe, DelonLocaleModule]
});
_AlainThemeModule.ɵinj = ɵɵdefineInjector({
  providers: [ALAIN_SETTING_DEFAULT],
  imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule, DelonLocaleModule]
});
var AlainThemeModule = _AlainThemeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlainThemeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule, ...PIPES],
      providers: [ALAIN_SETTING_DEFAULT],
      exports: [...PIPES, DelonLocaleModule]
    }]
  }], () => [{
    type: NzIconService
  }], null);
})();
function provideAlain(options) {
  const lang = options?.defaultLang;
  const provides = [{
    provide: ALAIN_CONFIG,
    useValue: options?.config
  }, {
    provide: DELON_LOCALE,
    useValue: lang?.delon ?? zhCN
  }, DELON_LOCALE_SERVICE_PROVIDER, importProvidersFrom([NzDrawerModule, NzModalModule]), ALAIN_SETTING_DEFAULT];
  if (lang) {
    registerLocaleData(lang.ng, lang.abbr);
    provides.push({
      provide: LOCALE_ID,
      useValue: lang.abbr
    }, provideNzI18n(lang.zorro), {
      provide: NZ_DATE_LOCALE,
      useValue: lang.date
    });
  }
  const i18nCls = options?.i18nClass;
  if (i18nCls) {
    provides.push({
      provide: ALAIN_I18N_TOKEN,
      useClass: i18nCls,
      multi: false
    });
  }
  const icons = [BellOutline, DeleteOutline, PlusOutline, InboxOutline, MenuFoldOutline, MenuUnfoldOutline, ...options.icons ?? []];
  provides.push({
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => {
      inject(NzIconService, {
        optional: true
      })?.addIcon(...icons);
    }
  });
  return makeEnvironmentProviders(provides);
}
var PreloadOptionalModules = class {
  preload(route, fn) {
    return route.data?.preload === true ? fn().pipe(catchError(() => of(null))) : of(null);
  }
};
var VERSION = new Version("17.2.0");

export {
  CdkDragHandle,
  CdkDrag,
  toDate,
  formatDate,
  stepPreloader,
  ALAIN_I18N_TOKEN,
  AlainI18nBaseService,
  AlainI18NServiceFake,
  MenuService,
  ALAIN_SETTING_KEYS,
  ALAIN_SETTING_DEFAULT,
  SettingsService,
  REP_MAX,
  SPAN_MAX,
  ResponsiveService,
  HTML_DIR,
  RTL_DIRECTION,
  RTL_NZ_COMPONENTS,
  RTL_DELON_COMPONENTS,
  LTR,
  RTL,
  RTLService,
  TitleService,
  I18nPipe,
  AlainI18NGuardService,
  alainI18nCanActivate,
  alainI18nCanActivateChild,
  ModalHelper,
  DrawerHelper,
  _HttpClient,
  BaseApi,
  BaseUrl,
  BaseHeaders,
  Path,
  Query,
  Body,
  Headers,
  Payload,
  OPTIONS,
  GET,
  POST,
  DELETE,
  PUT,
  HEAD,
  PATCH,
  JSONP,
  FORM,
  CUSTOM_ERROR,
  IGNORE_BASE_URL,
  RAW_BODY,
  DELON_LOCALE,
  zhCN,
  DelonLocaleService,
  DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
  DELON_LOCALE_SERVICE_PROVIDER,
  DelonLocaleModule,
  enUS,
  zhTW,
  trTR,
  plPL,
  elGR,
  koKR,
  hrHR,
  jaJP,
  slSI,
  frFR,
  esES,
  itIT,
  viVI,
  DatePipe,
  KeysPipe,
  yn,
  YNPipe,
  HTMLPipe,
  URLPipe,
  AlainThemeModule,
  provideAlain,
  PreloadOptionalModules,
  VERSION
};
//# sourceMappingURL=chunk-KGHF7NNJ.js.map
