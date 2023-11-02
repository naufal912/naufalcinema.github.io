document.addEventListener('DOMContentLoaded', function () {
  const ticketForm = document.getElementById('ticket-form');
  const ticketList = document.getElementById('ticket-list');
  const addButton = document.getElementById('add');

  let tickets = [];

  addButton.addEventListener('click', function () {
    const movieInput = document.getElementById('movie');
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('price');

    const movie = movieInput.value;
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(priceInput.value);

    if (movie && quantity && price) {
      const total = quantity * price;
      const newTicket = {
        movie,
        quantity,
        price,
        total,
      };
      tickets.push(newTicket);

      renderTickets();
      resetForm();
      tambahkanTanggalWaktu();
    }
  });

  function renderTickets() {
    ticketList.innerHTML = `
          <tr>
              <th>Nama Film</th>
              <th>Jumlah Tiket</th>
              <th>Harga Tiket</th>
              <th>Total Harga</th>
              <th>Aksi</th>
          </tr>
      `;

    tickets.forEach((ticket, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
              <td>${ticket.movie}</td>
              <td>${ticket.quantity}</td>
              <td>${ticket.price}</td>
              <td>${ticket.total}</td>
              <td><button class="edit" data-index="${index}">Edit</button> <button class="delete" data-index="${index}">Hapus</button></td>
          `;

      ticketList.appendChild(row);
    });

    const editButtons = document.querySelectorAll('.edit');
    const deleteButtons = document.querySelectorAll('.delete');

    editButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const index = parseInt(button.getAttribute('data-index'));
        editTicket(index);
        tambahkanTanggalWaktu();
      });
    });

    deleteButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const index = parseInt(button.getAttribute('data-index'));
        deleteTicket(index);
        tambahkanTanggalWaktu();
      });
    });
  }

  function resetForm() {
    ticketForm.reset();
  }

  function editTicket(index) {
    const editedTicket = tickets[index];
    const movieInput = document.getElementById('movie');
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('price');

    movieInput.value = editedTicket.movie;
    quantityInput.value = editedTicket.quantity;
    priceInput.value = editedTicket.price;

    tickets.splice(index, 1);
    renderTickets();
  }

  function deleteTicket(index) {
    tickets.splice(index, 1);
    renderTickets();
  }
});

function tambahkanTanggalWaktu() {
  var tanggalWaktu = new Date().toLocaleString();
  document.getElementById('tanggal_waktu_transaksi').textContent = 'Tanggal dan Waktu Transaksi: ' + tanggalWaktu;
}
