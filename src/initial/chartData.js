function getData() {
    return [
        { date: new Date("2024-11-01T03:00:00"), open: 2550.0, high: 2560.5, low: 2540.5, close: 2555.0, volume: 2000000 },
        { date: new Date("2024-11-01T06:00:00"), open: 2555.0, high: 2565.0, low: 2548.0, close: 2552.0, volume: 1800000 },
        { date: new Date("2024-11-01T09:00:00"), open: 2552.0, high: 2570.0, low: 2550.0, close: 2562.5, volume: 2100000 },
        { date: new Date("2024-11-01T12:00:00"), open: 2562.5, high: 2575.0, low: 2555.0, close: 2570.0, volume: 2300000 },
        { date: new Date("2024-11-01T15:00:00"), open: 2570.0, high: 2578.0, low: 2560.0, close: 2565.5, volume: 1900000 },
        { date: new Date("2024-11-01T18:00:00"), open: 2565.5, high: 2572.0, low: 2558.0, close: 2568.0, volume: 1700000 },
        { date: new Date("2024-11-01T21:00:00"), open: 2568.0, high: 2575.0, low: 2555.0, close: 2560.0, volume: 2200000 },

        // Day 2
        { date: new Date("2024-11-02T03:00:00"), open: 2560.0, high: 2568.0, low: 2548.0, close: 2552.0, volume: 2400000 },
        { date: new Date("2024-11-02T06:00:00"), open: 2552.0, high: 2560.0, low: 2545.0, close: 2548.0, volume: 2500000 },
        { date: new Date("2024-11-02T09:00:00"), open: 2548.0, high: 2555.0, low: 2538.0, close: 2540.0, volume: 2600000 },
        { date: new Date("2024-11-02T12:00:00"), open: 2540.0, high: 2548.0, low: 2535.0, close: 2542.5, volume: 2400000 },
        { date: new Date("2024-11-02T15:00:00"), open: 2542.5, high: 2550.0, low: 2538.0, close: 2545.0, volume: 2100000 },
        { date: new Date("2024-11-02T18:00:00"), open: 2545.0, high: 2552.0, low: 2540.0, close: 2548.0, volume: 2000000 },
        { date: new Date("2024-11-02T21:00:00"), open: 2548.0, high: 2555.0, low: 2540.0, close: 2542.0, volume: 2200000 },

        // Day 3
        { date: new Date("2024-11-03T03:00:00"), open: 2542.0, high: 2550.0, low: 2532.0, close: 2540.0, volume: 2300000 },
        { date: new Date("2024-11-03T06:00:00"), open: 2540.0, high: 2552.0, low: 2535.0, close: 2545.0, volume: 2400000 },
        { date: new Date("2024-11-03T09:00:00"), open: 2545.0, high: 2560.0, low: 2540.0, close: 2552.0, volume: 2500000 },
        { date: new Date("2024-11-03T12:00:00"), open: 2552.0, high: 2565.0, low: 2548.0, close: 2558.0, volume: 2600000 },
        { date: new Date("2024-11-03T15:00:00"), open: 2558.0, high: 2570.0, low: 2550.0, close: 2562.0, volume: 2100000 },
        { date: new Date("2024-11-03T18:00:00"), open: 2562.0, high: 2572.0, low: 2555.0, close: 2568.0, volume: 1800000 },
        { date: new Date("2024-11-03T21:00:00"), open: 2568.0, high: 2578.0, low: 2560.0, close: 2570.0, volume: 1900000 },

        // Day 4
        { date: new Date("2024-11-04T03:00:00"), open: 2570.0, high: 2580.0, low: 2560.0, close: 2575.0, volume: 2500000 },
        { date: new Date("2024-11-04T06:00:00"), open: 2575.0, high: 2585.0, low: 2570.0, close: 2578.0, volume: 2300000 },
        { date: new Date("2024-11-04T09:00:00"), open: 2578.0, high: 2590.0, low: 2572.0, close: 2580.0, volume: 2600000 },
        { date: new Date("2024-11-04T12:00:00"), open: 2580.0, high: 2592.0, low: 2575.0, close: 2585.0, volume: 2400000 },
        { date: new Date("2024-11-04T15:00:00"), open: 2585.0, high: 2598.0, low: 2578.0, close: 2582.0, volume: 2000000 },
        { date: new Date("2024-11-04T18:00:00"), open: 2582.0, high: 2588.0, low: 2572.0, close: 2580.0, volume: 2200000 },
        { date: new Date("2024-11-04T21:00:00"), open: 2580.0, high: 2585.0, low: 2570.0, close: 2575.0, volume: 2300000 },

        // Day 5
        { date: new Date("2024-11-05T03:00:00"), open: 2575.0, high: 2585.0, low: 2565.0, close: 2572.0, volume: 2100000 },
        { date: new Date("2024-11-05T06:00:00"), open: 2572.0, high: 2582.0, low: 2562.0, close: 2578.0, volume: 2400000 },
        { date: new Date("2024-11-05T09:00:00"), open: 2578.0, high: 2590.0, low: 2570.0, close: 2585.0, volume: 2500000 },
        { date: new Date("2024-11-05T12:00:00"), open: 2585.0, high: 2592.0, low: 2578.0, close: 2588.0, volume: 2600000 },
        { date: new Date("2024-11-05T15:00:00"), open: 2588.0, high: 2595.0, low: 2580.0, close: 2590.0, volume: 2100000 },
        { date: new Date("2024-11-05T18:00:00"), open: 2590.0, high: 2600.0, low: 2585.0, close: 2592.0, volume: 1800000 },
        { date: new Date("2024-11-05T21:00:00"), open: 2592.0, high: 2598.0, low: 2588.0, close: 2590.0, volume: 1900000 },
    ]
}
export { getData }