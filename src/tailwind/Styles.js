class Styles {
    classNames = [];

    static builder() {
        return new Styles();
    }

    add(className) {
        className && this.classNames.push(className);
        return this;
    }

    addIf(className, condition) {
        condition && this.add(className);
        return this;
    }

    merge(entity) {
        entity?.getClassName && this.add(entity.getClassName())
        return this;
    }

    getClassName() {
        return this.classNames.join(' ').trim();
    }
}

export default Styles;