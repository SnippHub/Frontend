function getBaseHref() {
    var isProd = process.env.NODE_ENV === "production";
    return isProd ? this.baseHrefProd : this.baseHrefDev;
}

module.exports = {
    httpsDev: false,
    buildDir: 'dist',
    siteTitle: 'Minimalistic React Starter',

    baseHrefDev: '/',
    // If you deploy it under a virtual directory use '/{virtualPath}/'.
    // Example: www.example.org/subdir -> '/subdir/'
    baseHrefProd: '/',

    get publicPathDev() {
        let protocol = this.https ? 'https' : 'http';
        return `${protocol}://localhost:9000/`;
    },

    get publicPathProd() {
        // If the project build directory (dist) is not the root of your website use the line below.
        // return `${this.baseHrefProd}${this.buildDir}/`;
        return this.baseHrefProd;
    },

    getBaseHref: getBaseHref
};