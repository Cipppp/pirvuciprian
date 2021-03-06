module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './src/components/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#8AD8FA',
            },

            boxShadow: {
                card: '1px 6px 23px 9px rgba(0,0,0,0.25)',
            },
            fontFamily: {
                josefin: ['"Josefin Sans"'],
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            msm: { max: '640px' },
            mmd: { max: '768px' },
            mlg: { max: '1024px' },
            mxl: { max: '1280px' },
            m2xl: { max: '1536px' },
        },
    },
};
