import Ember from 'ember';

export default Ember.Controller.extend({
  message: Ember.computed.alias('model.message'),
  emailAddress: Ember.computed.alias('model.email'),
  messageLength: Ember.computed.alias('message.length'),
  isEmailOk: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageLengthOk: Ember.computed.gte('messageLength', 5),
  canSendMsg: Ember.computed.and('isEmailOk', 'isMessageLengthOk'),
  actions: {
    sendMessage(newContact){
      alert("The message is being sent..");

      newContact.save().then(
        (response) => {
          this.set('responseMessage', `Thank you! Your message [${this.get('message')}] has 
                been sent. Contact saved with id: ${response.get('id')}. 
                Redirecting to Contacts..`);
          this.set('message', '');
          this.set('emailAddress', '');

          let that = this;
          Ember.run.later((function() {
            //do something in here that will run in 2 seconds
            that.transitionToRoute('admin.contacts');
          }), 5000);
        });
    }
  }
});
