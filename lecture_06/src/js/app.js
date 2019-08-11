import '../scss/style.scss';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../image/', true, /\.(png|jpe?g|svg)$/));
