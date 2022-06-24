<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="WebApplication1.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>TTCS</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.css" />
    <link href="Css/style.css" rel="stylesheet" />
</head>
<body>
    <div class="home">
        <table id="bgtt" class="table table-striped table-bordered table-sm" style="width: 100%" cellspacing="0">
            <thead id="header-fixed">
                <tr>
                    <th rowspan="2">CK</th>
                    <th rowspan="2">Trần</th>
                    <th rowspan="2">Sàn</th>
                    <th rowspan="2">TC</th>
                    <th rowspan="1" colspan="6">Bên mua</th>
                    <th rowspan="1" colspan="2">Khớp lệnh</th>
                    <th rowspan="1" colspan="6">Bên bán</th>
                    <th rowspan="2">Tổng KL</th>
                </tr>
                <tr align="center" id="header-row">
                    <th>Giá 3</th>
                    <th>KL 3</th>
                    <th>Giá 2</th>
                    <th>KL 2</th>
                    <th>Giá 1</th>
                    <th>KL 1</th>
                    <th>Giá</th>
                    <th>KL</th>
                    <th>Giá 1</th>
                    <th>KL 1</th>
                    <th>Giá 2</th>
                    <th>KL 2</th>
                    <th>Giá 3</th>
                    <th>KL 3</th>
                </tr>
            </thead>

            <tbody id="tbInfo"></tbody>

            <caption>Captions of the table</caption>

        </table>
    </div>

    <script src="/Scripts/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.js"></script>
    <script src="/Scripts/jquery.signalR-2.4.3.min.js"></script>
    <script src="/signalr/hubs" type="text/javascript"></script>
    <script src="Scripts/index.js"></script>
    <script type="text-javascript">
        function PageClose() {
            PageMethods.Page_Close()           
        }

        window.onbeforeunload = PageClose
    </script>
</body>
</html>
