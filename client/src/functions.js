function showLakes(lakes)
{
    var html= '';
    for(var l of lakes)
    {
    html += `<table>
                <tbody>
                    <tr>
                        <th>Tó neve</th>
                        <th>Tó helye</th>
                        <th>Tó fajtája</th>
                        <th>Tó rövid leírása</th>
                    </tr>
                    <tr>
                        <td>${l.name}</td>
                        <td>${l.location}</td>
                        <td>${l.type}</td>
                        <td>${l.comment}</td>
                    </tr>
                </tbody>
            </table>`;
    }
    document.querySelector("table.lakes").innerHTML = html;
   
}