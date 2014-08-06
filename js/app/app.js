var Notes = Ember.Application.create({
});

// router
Notes.Router.map(function() {
  this.resource('notes', {path: "/"}, function() {
    this.route('note', {path: "/note/:note_id"});
  });
});

Notes.NotesRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('note');
    }
});

Notes.NotesNoteRoute = Ember.Route.extend({
    model: function(note) {
        return this.store.find('note', note.note_id);
    }
});
