import Ember from 'ember';
import YieldWithKeywordsMixin from 'context-from-component/mixins/yield-with-keywords';

module('YieldWithKeywordsMixin');

// Replace this with your real tests.
test('it works', function() {
  var YieldWithKeywordsObject = Ember.Object.extend(YieldWithKeywordsMixin);
  var subject = YieldWithKeywordsObject.create();
  ok(subject);
});
