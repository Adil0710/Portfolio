interface ViewTransition {
  ready: Promise<void>;
  finished: Promise<void>;
  updateCallbackDone: Promise<void>;
}

interface Document {
  startViewTransition?: (
    callback: () => void | Promise<void>
  ) => ViewTransition;
}
