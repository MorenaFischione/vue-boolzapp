var app = new Vue(
    {
        el: '#app',
    
        data: {
            classeGreen : "my_green",
            classeWhite : "my_white",
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
            
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            indexContact : 0,
            newSms : "",
                
        },
    
        methods : {

            selectAvatar: function(elementIndex) {
                this.indexContact = elementIndex;
            },

            // funzione che aggiunge all'elemento oggetto dell'array una nuova chiave con valore indice di un array di immagini

            addImgAvatar :  function (array, index){  
                let newImgAvatar = "avatar" + array[index].avatar +".jpg";
                return newImgAvatar;
            },

            // funzione che aggiunge un messaggio alla lista dei messaggi -messages- 

            addNewSms : function(){
                if(this.newSms.trim().length > 0){
                    let data = new Date();
                    let Hh, Mm, Ss, mm, gg, ms, aaaa;
                    gg = data.getDate() + "/";
                    ms = data.getMonth() + 1 + "/";
                    aaaa = data.getFullYear();
                    Hh = data.getHours() + ":";
                    Mm = data.getMinutes() + ":";
                    Ss = data.getSeconds() + ":";
                    mm = data.getMilliseconds() + ":";

                    if(Mm < 10) Mm="0"+Mm;
                    if(Ss < 10) Ss="0"+Ss;
                    if(Hh <10) Hh="0"+Hh;

                    let messaggioCorrente = {
                        date: gg+ms+aaaa+ " " + Hh+Mm+Ss, 
                        text: this.newSms, 
                        status:"sent",
                    };
                    this.contacts[this.indexContact].messages.push(messaggioCorrente);
                    this.newSms = "";
                    setTimeout(this.messaggioOk, 1000);
                }
            },

            messaggioOk: function() {
                let data = new Date();
                    let Hh, Mm, Ss, mm, gg, ms, aaaa;
                    gg = data.getDate() + "/";
                    ms = data.getMonth() + 1 + "/";
                    aaaa = data.getFullYear();
                    Hh = data.getHours() + ":";
                    Mm = data.getMinutes() + ":";
                    Ss = data.getSeconds() + ":";
                    mm = data.getMilliseconds() + ":";

                    if(Mm < 10) Mm="0"+Mm;
                    if(Ss < 10) Ss="0"+Ss;
                    if(Hh <10) Hh="0"+Hh;

                    let messaggioCorrente = {
                        date: gg+ms+aaaa+ " " + Hh+Mm+Ss, 
                        text: "ok", 
                        status:"received",
                    };
                    this.contacts[this.indexContact].messages.push(messaggioCorrente);
            },

            

         
        },
        
    });