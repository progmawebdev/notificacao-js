let notification;

let notificationVisibility;

function showNotification(){


    if (Notification.permission !== 'granted'){
        
        Notification.requestPermission()

    } else{

        notification = new Notification('Notificação Cringe!', {

            body: 'Vai neymar, eu sei que tu gosta né neymar!!!',

            icon: 'img/seuSirigueijo.jpeg',

            image: 'img/lulu.png',

        });

    }

}

function showNotificationVisibility(){

    if (document.visibilityState === 'hidden'){

        notificationVisibility = new Notification('Ei!!!', {

            body: 'Volta, Corno!',

            image: 'img/xamuel.png'

        });

    } else {

        notificationVisibility.close();
        
    }

};

let btnNotification = document.querySelector('.btn-notification');

btnNotification.addEventListener("click", showNotification);

document.addEventListener('visibilitychange', showNotificationVisibility)
