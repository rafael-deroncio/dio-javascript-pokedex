class UriBuilder {
    constructor(uri = '') {
        this.uri = uri;

        this.scheme = '';
        this.host = '';
        this.path = '';
        this.params = '';
    }

    addScheme(scheme) {
        if (scheme === undefined) {
            return this;
        }

        if (scheme.match(/:\/\//)) {
            this.scheme = scheme;
        } else {
            this.scheme = `${scheme}://`;
        }
        return this;
    }

    addHost(host) {
        if (host === undefined) {
            return this;
        }

        if (host.charAt(host.length - 1) != "/") {
            host = host + ""
        }

        this.host = host;
        return this;
    }

    addPath(path) {
        if (path === undefined) {
            return this;
        }

        if (path.charAt(0) != "/") {
            path = "/" + path
        }

        if (path.charAt(path.length - 1) === "/") {
            path = path.slice(0, path.length - 1)
        }

        this.path = this.path + path;
        return this;
    }

    addParams(params, replace = false) {
        if (params === undefined) {
            return this;
        }

        if (replace) {
            this.params = '';
            return this;
        }

        let queryString = '';
        let keys = Object.keys(params);
        let values = Object.values(params);

        if (keys.length > 0) {
            for (let i = 0; i < keys.length; i++) {
                queryString = queryString + `${keys[i]}=${values[i]}`;

                if (i < keys.length - 1) {
                    queryString = queryString + "&"
                }
            }
        }

        if (this.params.charAt(0) != "?") {
            this.params = `?` + this.params;
        }

        this.params = this.params + queryString;

        return this;
    }

    build() {
        if (this.uri === '') {
            return `${this.scheme}${this.host}${this.path}${this.params}`;
        }

        return `${this.uri}${this.path}${this.params}`;
    }
}
