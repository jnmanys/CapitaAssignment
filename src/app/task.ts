
export class Title {
    stringValue: string;
    constructor() { this.stringValue = ''; }
}

export class Description {
    stringValue: string;
    constructor() { this.stringValue = ''; }
}

export class Fields {
    title: Title;
    description: Description;

    constructor() {
        this.title = new Title();
        this.description = new Description();
    }
}

export class Task {
    name: string;
    fields: Fields;
    createTime: Date;
    updateTime: Date;

    constructor() {
        this.name = '';
        this.fields = new Fields();
        this.createTime = new Date();
        this.updateTime = new Date();
    }
}
