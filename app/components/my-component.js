import Ember from 'ember';
import YieldWithKeywords from '../mixins/yield-with-keywords';

export default Ember.Component.extend(YieldWithKeywords, {
   _yieldKeywords: {
       keywordFromComponent: 'This is the value of a keyword coming from the component'
   },
});
