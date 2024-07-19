/////////////////////////////
/// AudioWorklet Iterable APIs
/////////////////////////////

interface AbortSignal {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/any_static) */
    any(signals: Iterable<AbortSignal>): AbortSignal;
}

interface MessageEvent<T = any> {
    /** @deprecated */
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: Iterable<MessagePort>): void;
}

interface URLSearchParams {
    [Symbol.iterator](): BuiltinIterator<[string, string], BuiltinIteratorReturn>;
    /** Returns an array of key, value pairs for every entry in the search params. */
    entries(): BuiltinIterator<[string, string], BuiltinIteratorReturn>;
    /** Returns a list of keys in the search params. */
    keys(): BuiltinIterator<string, BuiltinIteratorReturn>;
    /** Returns a list of values in the search params. */
    values(): BuiltinIterator<string, BuiltinIteratorReturn>;
}
