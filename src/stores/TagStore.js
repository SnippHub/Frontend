import { autorun, observable, computed } from 'mobx';
import request from "superagent";

const dummyTags = [
    { name: 'Frontend', color: '#50363b' },
    { name: 'React', color: '#356d57' },
    { name: 'CSS', color: '#f3e07d' },
    { name: 'Common', color: '#7bd866' },
    { name: 'JS Library', color: '#252549' },
    { name: 'Custom Theme', color: '#9a77f2' },
]

class TagStore {
    @observable
    globalTags = [];

    constructor() {
        autorun(() => this.printTags());
    }

    loadTags() {
        return new Promise((resolve, reject) => {
            //TODO: Real data
            setTimeout(() => {
                this.setTags(dummyTags);
                resolve(dummyTags)
            }, 1000);
        });
    }

    setTags(tags) {
        this.globalTags = tags;
    }

    addNewTag(tag) {
        this.globalTags.push(tag);
    }

    removeTag(tag) {
        _.remove(this.globalTags, tag);
    }

    printTags() {
        console.log('Tags updated: ' + this.globalTags.map(t => t.name).join(','));
    }

}

export default TagStore;