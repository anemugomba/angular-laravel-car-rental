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


    <h2>Message from website contact us form</h2>

    <table>
      <tr>
        <th>Props</th>
        <th>Details</th>
      </tr>
      <tr>
        <td>Full Name</td>
        <td>{{$contactUsData->name}}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{{$contactUsData->email}}</td>
      </tr>
      <tr>
        <td>Subject</td>
        <td>{{$contactUsData->subject}}</td>
      </tr>
      <tr>
        <td>Content</td>
        <td>{{$contactUsData->content}}</td>
      </tr>
    </table>
