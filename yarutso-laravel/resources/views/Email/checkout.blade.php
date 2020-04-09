<style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
    </style>


    <h2>Vehicle Request from website</h2>

    <table>
      <tr>
        <th>Props</th>
        <th>Details</th>
      </tr>
      <tr>
        <td>Full Name</td>
        <td>{{$name}}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{{$phone}}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{{$email}}</td>
      </tr>
      <tr>
        <td>Date From</td>
        <td>{{$fromDate}}</td>
      </tr>
      <tr>
        <td>To Date</td>
        <td>{{$toDate}}</td>
      </tr>
      <tr>
          <td>Car Name</td>
          <td>{{$carName}}</td>
      </tr>
      <tr>
        <td>License Plate</td>
        <td>(Comming Soon)</td>
    </tr>
    </table>
