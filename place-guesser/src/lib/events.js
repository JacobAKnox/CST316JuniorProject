let event_map = {}

export function subscribe(event, handler) {
    if (!(event in event_map)) {
        event_map[event] = []
    }
    event_map[event].push(handler)
}

export function signal_event(event, args) {
    if(!(event in event_map)) {
        return;
    }
    event_map[event].forEach(f => {
        f(args);
    });
}