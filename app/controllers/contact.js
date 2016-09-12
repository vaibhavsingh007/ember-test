import Ember from 'ember';

export default Ember.Controller.extend({
  message: '',
  emailAddress: '',
  messageLength: Ember.computed.alias('message.length'),
  isEmailOk: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageLengthOk: Ember.computed.gte('messageLength', 5),
  canSendMsg: Ember.computed.and('isEmailOk', 'isMessageLengthOk'),
  actions: {
    sendMessage(){
      alert("The message is being sent..");

      this.set('responseMessage', `Thank you! Your message [${this.get('message')}] has been sent.`);
      this.set('message', '');
      this.set('emailAddress', '');
    }
  }
});
