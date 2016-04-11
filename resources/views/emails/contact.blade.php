<center>
    <table width="600px" style="border-collapse: collapse;">
        <tr style="background: #ecedee;">
            <td width="25%" style="padding: 10px;">Name :</td>
            <td width="75%" style="padding: 10px;">{{ $formInfo['name'] }}</td>
        </tr>
        <tr>
            <td width="25%" style="padding: 10px;">Email :</td>
            <td width="75%" style="padding: 10px;">{{ $formInfo['email'] }}</td>
        </tr>
        <tr style="background: #ecedee;">
            <td width="25%" style="padding: 10px;">Phone :</td>
            <td width="75%" style="padding: 10px;">{{ $formInfo['phone'] }}</td>
        </tr>
        <tr>
            <td width="25%" style="padding: 10px;">Subject :</td>
            <td width="75%" style="padding: 10px;">{{ $formInfo['subject'] }}</td>
        </tr>
        <tr style="background: #ecedee;">
            <td width="100%" colspan="2" style="padding: 10px 10px 0px 10px;">Message:</td>
        </tr>
        <tr style="background: #ecedee;">
            <td width="100%" colspan="2" style="padding: 10px;">{{ $formInfo['message'] }}</td>
        </tr>
    </table>
</center>
