import { observable, computed, autorun } from 'mobx';

class SnippetStore {

    @observable
    globalTags = [];

}

export default SnippetStore;