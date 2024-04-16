class URLGenerator {
    static COLON = ':';
    static SLASH = '/';

    static PROTOCOL = {
        HTTP: 'http',
        HTTPS: 'https'
    };

    static HOSTNAME = {
        PRODUCTION: null, // TODO
        DEVELOPMENT: 'localhost'
    };

    static PORT = {
        DEVELOPMENT: '3000'
    };

    static PATHS = {
        SKILLS: 'skills'
    };

    static #generateIndexURL(protocol, hostname, port) {
        return protocol + this.COLON + this.SLASH + this.SLASH + hostname + this.COLON + port;
    }

    static #generateDevelopmentIndexURL() { // TODO: Update to HTTPS
        return this.#generateIndexURL(this.PROTOCOL.HTTP, this.HOSTNAME.DEVELOPMENT, this.PORT.DEVELOPMENT);
    }

    static #generateProductionIndexURL() {
        return null; // TODO
    }

    static #generateDevelopmentEndpointURL(endpoint) {
        return this.#generateDevelopmentIndexURL() + this.SLASH + endpoint;
    }

    static generateDevelopmentEndpointURL_Skills() {
        return this.#generateDevelopmentEndpointURL(this.PATHS.SKILLS);
    }


};

export default URLGenerator;