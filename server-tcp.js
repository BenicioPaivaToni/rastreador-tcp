const net = require('net');

const PORT = 5001; // Porta na qual o servidor TCP estará ouvindo

const server = net.createServer((socket) => {
  // Evento 'connection': Disparado quando um cliente se conecta ao servidor
  console.log('Client connected:', socket.remoteAddress, socket.remotePort);

  // Evento 'data': Disparado quando dados são recebidos do cliente
  socket.on('data', (data) => {
    
    console.log('Received data:', data.toString());
    // Aqui você pode processar os dados recebidos do cliente TCP
  });

  // Evento 'end': Disparado quando a conexão é fechada pelo cliente
  socket.on('end', () => {
    console.log('Client disconnected:', socket.remoteAddress, socket.remotePort);
  });

  // Trate possíveis erros de conexão
  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
