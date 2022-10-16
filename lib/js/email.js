"use strict";

var DATA = {
  global: {
    "email": "benduterme@gmail.com",
    "token": "e999d8b6-b853-494b-a600-a3a4dcc0734e"
  }
};

function contact() {

  return {
    user: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      object: "",
      message: ""
    },

    errors: [],
    success: [],

    mounted: function mounted() {},
    setSuccess: function setSuccess(success) {
      while (this.success.length) {
        this.success.pop();
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = success[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var s = _step.value;
          this.success.push(s);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    setError: function setError(errors) {
      while (this.errors.length) {
        this.errors.pop();
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = errors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var error = _step2.value;
          this.errors.push(error);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },
    sendEmail: function sendEmail() {
      var _this = this;

      this.errors = [];
      this.success = [];

      var data = DATA.global;
      var hasError = false;
      var errors = [];
      if (!this.user.nom || !this.user.prenom || !this.user.email) {
        errors.push("Il manque des informations personnelles");
      }
      if (!this.user.message) {
        errors.push("Veuillez saisir un message");
      }
      if (errors.length) {
        this.setError(errors);
        return;
      }

      var message = "Demande de renseignements:<br>" + "-------------------<br><br>" + ("De: " + this.user.nom + " " + this.user.prenom + " - " + this.user.email);
      if (this.user.telephone) message += " (" + this.user.telephone + ")<br><br>";else {
        message += '<br>';
      }

      if (this.user.object) {
        message += "Objet: " + this.user.object + "<br><br>";
      } else {
        message += '<br>';
      }

      message += "Message: " + this.user.message;

      var toEmail = encodeURIComponent(data.toemail);
      Email.send({
        SecureToken: data.token,
        To: "alexandre.willems@hotmail.com",
        From: data.email,
        Subject: "Demande de renseignements",
        Body: message
      }).then(function (mess) {
        if (mess === "OK") {
          _this.setSuccess(["Votre demande a bien été envoyée."]);
        } else {
          _this.setErrors(["Il y a eu un problème avec l'envoi de votre email."]);
        }
      });
    }
  };
}