import firebase from 'firebase';



class Fire {
    constructor(){
        this.init()
    }
    init =() => {
        
            firebase.initializeApp({
              apiKey: "AIzaSyA6fLl3IbSgEQxFNN7kkT05t9AxZZfSBXA",
            authDomain: "closefriend-1333a.firebaseapp.com",
            databaseURL: "https://closefriend-1333a.firebaseio.com",
            projectId: "closefriend-1333a",
            storageBucket: "closefriend-1333a.appspot.com",
            messagingSenderId: "313771334944",
            appId: "1:313771334944:web:fe75060b47796493d1cb45",
            measurementId: "G-3BB17TNXB3"
            })
        
    }
    
    
    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
    
            this.db.push(message)
        });
    }


    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)


        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot )))
    }

    off(){
        this.db.off()
    }

    

    get db(){
        
        return firebase.database().ref("messages");
    }

}

export default new Fire();
