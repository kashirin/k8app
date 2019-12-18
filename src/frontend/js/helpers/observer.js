let event2subscribers = {};
class Observer {
    

    on(eventName, subscriberId, callback){
        if(!event2subscribers[eventName]){
            event2subscribers[eventName] = {};
        }
        event2subscribers[eventName][subscriberId] = callback;
    }


    send(eventName, data){
        for(let j in event2subscribers[eventName]){
            return event2subscribers[eventName][j](data);
        }
    }
}

export default new Observer();