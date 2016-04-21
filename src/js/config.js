export const config = {
    API_KEY: {
        // Default vector tile service API key used exclusively by Tangram Play
        // This key is owned by Mapzen
        DEFAULT: 'vector-tiles-P6dkVl4',
        SUPPRESSED: [
            'vector-tiles-P6dkVl4', // Tangram Play, should match API_KEY.DEFAULT
            'vector-tiles-HqUVidw', // Tangram & "house styles"
            'vector-tiles-JUsa0Gc', // Patricio's sandbox
        ]
    }
};
