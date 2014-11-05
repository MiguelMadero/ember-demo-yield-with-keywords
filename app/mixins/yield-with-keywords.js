import Ember from 'ember';

export default Ember.Mixin.create({
    _yieldKeywords: Ember.K,
    _yield: function(context, options) {
        var get = Ember.get,
            view = options.data.view,
            parentView = this._parentView,
            template = get(this, 'template'),
            keywords = Ember.merge(parentView.cloneKeywords(), this.get('_yieldKeywords'));
        if (template) {
            Ember.assert('A Component must have a parent view in order to yield.', parentView);
            view.appendChild(Ember.View, {
                isVirtual: true,
                tagName: '',
                _contextView: parentView,
                template: template,
                context: get(parentView, 'context'),
                controller: get(parentView, 'controller'),
                // context: get(view, 'context'), // the default is get(parentView, 'context'),
                // controller: get(view, 'controller'), // the default is get(parentView, 'context'),
                templateData: { keywords: keywords }
            });
        }
    },
});
