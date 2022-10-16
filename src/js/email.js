const DATA = {
    global: {
        "email": "benduterme@gmail.com",
        "token": "e999d8b6-b853-494b-a600-a3a4dcc0734e"
    }
}

function contact () {

    return {
        user: {
            nom: "",
            prenom: "",
            email: "",
            telephone: "",
            object: "",
            message: "",
        },

        errors: [],
        success: [],

        mounted() {

        },
        
        setSuccess(success) {
          while (this.success.length) { this.success.pop() }
          for (let s of success) { this.success.push(s) }
        },
        setError(errors) {
          while (this.errors.length) { this.errors.pop() }
          for (let error of errors) { this.errors.push(error) }
        },

        sendEmail() {
          this.errors = []
          this.success = []
    
          const data = DATA.global
          let hasError = false
          let errors = []
          if ( (!this.user.nom) || (!this.user.prenom) || (!this.user.email) ) {
            errors.push("Il manque des informations personnelles")
          }
          if ( (!this.user.message)) {
            errors.push("Veuillez saisir un message")
          }
          if (errors.length) {
            this.setError(errors)
            return
          }
    
          let message =
                `Demande de renseignements:<br>`
              + `-------------------<br><br>`
              + `De: ${this.user.nom} ${this.user.prenom} - ${this.user.email}`
          if (this.user.telephone)
            message += ` (${this.user.telephone})<br><br>`
          else {
            message += '<br>'
          }
          
          if (this.user.object) {
            message+= `Objet: ${this.user.object}<br><br>`
          } else {
            message += '<br>'
          }
          
          message += `Message: ${this.user.message}`
    
          const toEmail = encodeURIComponent(data.toemail)
          Email.send({
            SecureToken: data.token,
            To: "alexandre.willems@hotmail.com",
            From: data.email,
            Subject: "Demande de renseignements",
            Body: message,
          }).then(mess => {
            if (mess === "OK") {
              this.setSuccess(["Votre demande a bien été envoyée."])
            }
            else {
              this.setErrors(["Il y a eu un problème avec l'envoi de votre email."])
            }
          })
        }
    }
}