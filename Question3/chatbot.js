module.exports.chatbotReply = function(message) {
    this.name = "I_AM_DEV_PRAJAPATI_😎";
    message = message.toLowerCase();
    if (message.indexOf('hi') > -1 || message.indexOf('hello') > -1) {
        return "Hello " + this.name;
    }
    if (message.indexOf('how') > -1 || message.indexOf('how are you') > -1) {
        return "I am Fine";
    }
    if (message.indexOf('your') > -1 || message.indexOf('what is your name') > -1) {
        return "My name is: " + this.name;
    }
    if (message.indexOf('where you from?') > -1) {
        return "I Am From India ❤️";
    }
    if (message.indexOf('are you male or female?') > -1) {
        return "I am bot , i am either male or female";
    }
    if (message.indexOf('okay byy') > -1) {
        return "bye bye";
    }

    return "wrong";
}