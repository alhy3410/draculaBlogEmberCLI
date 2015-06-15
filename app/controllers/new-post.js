import Ember from "ember";

var NewPostController = {
  actions: {
    save: function() {
      var newPost = this.store.createRecord('post', {
        // id: posts.length + 1,
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body')
      });
      newPost.save();
      this.transitionToRoute('posts');
    }
  }
};

export default Ember.ObjectController.extend(NewPostController);
