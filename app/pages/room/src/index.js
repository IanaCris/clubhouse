import { constants } from '../../_shared/constants.js';
import SocketBuilder from '../../_shared/socketBuilder.js';

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('User connected!', user))
  .setOnUserDisconnected((user) => console.log('User disconnected!', user))
  .build();

const room = {
  id: Date.now(),
  topic: 'JS Expert'
}

const user = {
  img: 'https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_woman_female_1-128.png',
  username: 'Cristina'
}

socket.emit(constants.events.JOIN_ROOM, { user, room})