const BandList = require('./band-list')
class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList()
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      // Escuchar evento: mensaje-to-server
      console.log('Client connect')
      //
      socket.emit("current-bands", this.bandList.getBands())

      socket.on('add-band', (name) => {
        this.bandList.addBand(name)
        const bands = this.bandList.getBands()
        this.io.emit("current-bands", bands)
      })
      /** 
      socket.on("mensaje-to-server", (data) => {
        console.log(data);

        this.io.emit("mensaje-from-server", data);
      });
      */
    });
  }


}

module.exports = Sockets;
