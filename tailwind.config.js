module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                'navy-500': '#171a21',
                'green-steam': '#5c7e10',
                'secondaryBlue': 'rgba(62, 126, 167, 0.8)'
            },
            gridTemplateColumns: {
                'main': '200px 1fr'
            },
        },
    },
    variants: {},
    plugins: [],
}
