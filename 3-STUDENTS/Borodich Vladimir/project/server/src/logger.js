module.exports = class Logger {
    // private _nameModule: string;
    constructor(name = 'Logger') {
        this._nameModule = name;
    }

    set name(name) {
        this._nameModule = name;
        // this.debug('Logger  Started');
    }

    get name() {
        return this._nameModule;
    }
    /**
     * debug
     */
    debug(message, ...arg) {
        if (arg.length > 0) {
            console.log(`DEBUG ${this.getTime()} [${this._nameModule}] ${message}`, ...arg);
        } else {
            console.log(`DEBUG ${this.getTime()} [${this._nameModule}] ${message}`);
        }
    }

    /**
     * info
     */
    info(message, ...arg) {
        if (arg.length > 0) {
            console.log(`INFO ${this.getTime()} [${this._nameModule}] ${message}`, ...arg);
        } else {
            console.log(`INFO ${this.getTime()} [${this._nameModule}] ${message}`);
        }
    }

    /**
     * error
     */
    error(message, ...arg) {
        if (arg.length > 0) {
            console.log(`ERROR ${this.getTime()} [${this._nameModule}] ${message}`, ...arg);
        } else {
            console.log(`ERROR ${this.getTime()} [${this._nameModule}] ${message}`);
        }
    }

    /**
     * warn #ff9528
     */
    warn(message, ...arg) {
        if (arg.length > 0) {
            console.log(`INFO ${this.getTime()} [${this._nameModule}] ${message}`, ...arg);
        } else {
            console.log(`INFO ${this.getTime()} [${this._nameModule}] ${message}`);
        }
    }

    getTime() {
        const d = new Date();
        const h = d.getHours();
        const H = h < 10 ? '0' + h : h;
        const m = d.getMinutes();
        const M = m < 10 ? '0' + m : m;
        const s = d.getSeconds();
        const S = s < 10 ? '0' + s : s;
        const Ms = d.getMilliseconds();
        return `${H}:${M}:${S}.${Ms}`;
    }
};
