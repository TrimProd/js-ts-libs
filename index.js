class eLibs {
  static Random = (min, max) => {
    return Math.floor(Math.random() * max) + min;
  };

  static MailValidator = (mail) => {
    var regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regexp.test(mail);
  };
}

module.exports = { eLibs };
