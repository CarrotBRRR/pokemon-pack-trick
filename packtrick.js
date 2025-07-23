fetch('pokemon-packs.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('card-trick-container');

    Object.entries(data).forEach(([sectionTitle, sets]) => {
      // Create collapsible details element
      const details = document.createElement('details');
      // details.open = true; // Set to false if you want all collapsed by default

      // Create summary (clickable heading)
      const summary = document.createElement('summary');
      summary.textContent = sectionTitle;
      summary.style.fontSize = '1.25em';
      summary.style.fontWeight = 'bold';
      details.appendChild(summary);

      // Create table
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const headRow = document.createElement('tr');
      const th1 = document.createElement('th');
      th1.textContent = 'Set';
      const th2 = document.createElement('th');
      th2.textContent = 'Cards to The Back';

      headRow.appendChild(th1);
      headRow.appendChild(th2);
      thead.appendChild(headRow);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');

      sets.forEach(([setName, cardCount]) => {
        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.textContent = setName;
        const td2 = document.createElement('td');
        td2.textContent = cardCount;
        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
      });

      table.appendChild(tbody);
      details.appendChild(table);
      container.appendChild(details);
    });
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });
